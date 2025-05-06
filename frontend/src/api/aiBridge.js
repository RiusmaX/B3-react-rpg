import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const generatePlayer = async (params) => {
  const result = await api.post('/generate-player', params)
  return result.data
}

// STORY
const loadIntro = async (user) => {
  const result = await api.post('/game/intro', user)
  return result.data
}

export {
  generatePlayer,
  loadIntro
}
