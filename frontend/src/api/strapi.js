import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const strapiLoginLocal = async (credentials) => {
  const response = await api.post('/auth/local', credentials)
  return response.data
}

const strapiRegisterLocal = async (data) => {
  const response = await api.post('/auth/local/register', data)
  return response.data
}

export {
  strapiLoginLocal,
  strapiRegisterLocal
}
