import axios from 'axios'
import slugify from 'slugify'

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

api.interceptors.request.use(
  (config) => {
    const savedState = JSON.parse(window.localStorage.getItem('@AUTH'))
    if (savedState) {
      config.headers.Authorization = 'Bearer ' + savedState.jwt
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// AUTHENTICATION

const strapiLoginLocal = async (credentials) => {
  const response = await api.post('/auth/local', credentials)
  return response.data
}

const strapiRegisterLocal = async (data) => {
  const response = await api.post('/auth/local/register', data)
  return response.data
}

// GAME

const strapiCreateGame = async (data) => {
  const body = {
    data: {
      name: data.name,
      users: [
        data.userId
      ],
      slug: slugify(data.name)
    }
  }
  const response = await api.post('/games', body)
  return response.data
}

export {
  strapiLoginLocal,
  strapiRegisterLocal,
  strapiCreateGame
}
