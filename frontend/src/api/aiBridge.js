import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

api.interceptors.request.use(
  (config) => {
    const savedState = JSON.parse(window.localStorage.getItem('@AUTH'))
    if (savedState?.jwt) {
      config.headers.Authorization = 'Bearer ' + savedState.jwt
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const generatePlayer = async (params) => {
  const result = await api.post('/generate-player', params)
  return result.data
}

// STORY
const loadIntro = async (data) => {
  const result = await api.post('/game/intro', data)
  return result.data
}

const loadNextStep = async (data) => {
  const result = await api.post('/game/next', data)
  return result.data
}

export {
  generatePlayer,
  loadIntro,
  loadNextStep
}
