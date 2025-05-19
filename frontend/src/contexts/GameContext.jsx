import { createContext, useContext, useEffect, useReducer } from 'react'
import { strapiLoadGame } from '../api/strapi'
import { toast } from 'react-toastify'
import { loadIntro } from '../api/aiBridge'

const GameContext = createContext()

const initialState = {
  gameData: null,
  currentData: null, // { text: '', actions: [], selectedAction }
  history: [], // [ currentData, currentData, currentData, currentData, ... ]
  loading: false,
  error: null
}

const actionTypes = {
  LOAD_GAME_DATA: 'LOAD_GAME_DATA',
  LOAD_INTRO: 'LOAD_INTRO',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  RESET: 'RESET'
}

// previousState = état précédent
const gameReducer = (previousState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_GAME_DATA:
      return {
        gameData: action.data,
        error: null,
        loading: false
      }
    case actionTypes.LOAD_INTRO:
      return {
        ...previousState,
        currentData: action.data,
        history: [action.data],
        loading: false
      }
    case actionTypes.LOADING:
      return {
        ...previousState,
        loading: true
      }
    case actionTypes.ERROR:
      return {
        ...previousState,
        error: action.error
      }
    case actionTypes.RESET:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const gameFactory = (previousState, dispatch) => ({
  loadGameData: async (id, navigate) => {
    dispatch({
      type: actionTypes.LOADING
    })
    try {
      const game = await strapiLoadGame(id)
      if (game?.data) {
        dispatch({
          type: actionTypes.LOAD_GAME_DATA,
          data: game.data
        })
      } else {
        navigate('/')
      }
    } catch (error) {
      handleError(dispatch, error)
      navigate('/')
    }
  },
  loadGameIntro: async (userData) => {
    dispatch({
      type: actionTypes.LOADING
    })
    try {
      const intro = await loadIntro({ gameData: previousState.gameData, userData })
      if (intro) {
        dispatch({
          type: actionTypes.LOAD_INTRO,
          data: intro
        })
      }
    } catch (error) {
      handleError(dispatch, error)
    }
  },
  reset: () => {
    dispatch({
      type: actionTypes.RESET
    })
  }
})

const handleError = (dispatch, error) => {
  console.error(error)
  toast.error(error?.response?.data?.error?.message)
  dispatch({
    type: actionTypes.ERROR,
    error: error?.response?.data?.error?.message
  })
}

const GameProvider = ({ children }) => {
  // Récupération de l'état sauvegardé
  const savedState = JSON.parse(window.localStorage.getItem('@GAME'))
  const [state, dispatch] = useReducer(gameReducer, savedState || initialState)

  useEffect(() => {
    // Sauvegarde de l'état à chaque changement via la liste de dépendances du useEffect()
    window.localStorage.setItem('@GAME', JSON.stringify(state))
  }, [state])

  return (
    <GameContext.Provider value={{ state, ...gameFactory(state, dispatch) }}>
      {children}
    </GameContext.Provider>
  )
}

const useGame = () => {
  const context = useContext(GameContext)
  if (!context) throw new Error('useGame must be used inside a GameProvider')
  return context
}

export {
  GameProvider,
  useGame
}
