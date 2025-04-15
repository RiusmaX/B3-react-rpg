import { createContext, useContext, useReducer } from 'react'
import { strapiLoginLocal } from '../api/strapi'

const AuthContext = createContext()

const initialState = {
  user: null,
  jwt: null,
  loading: false,
  error: null
}

const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT'
}

// previousState = état précédent
const authReducer = (previousState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.REGISTER_SUCCESS:
      return {
        user: action.data.user,
        jwt: action.data.jwt,
        loading: false,
        error: null
      }
    case actionTypes.LOADING:
      return {
        ...previousState,
        loading: true
      }
    case actionTypes.ERROR:
      return {
        user: null,
        jwt: null,
        error: action.error,
        loading: false
      }
    case actionTypes.LOGOUT:
      return initialState
    default :
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const authFactory = (previousState, dispatch) => ({
  login: async (credentials) => {
    dispatch({
      type: actionTypes.LOADING
    })
    const loginData = await strapiLoginLocal(credentials)
    if (loginData.user && loginData.jwt) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: loginData
      })
    }
  },
  logout: () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }
})

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={{ state, ...authFactory(state, dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

export {
  AuthProvider,
  useAuth
}
