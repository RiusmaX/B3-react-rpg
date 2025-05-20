const axios = require('axios')

const api = axios.create({
  baseURL: process.env.STRAPI_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const fetchGame = async (gameId, token) => {
  // 1. On récupère la partie courante
  const game = await api.get(`/games/${gameId}?populate=*`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  const { data } = game
  return data
}

const saveGameProgress = async (step, aiResponse, gameId, token) => {
  try {
    const data = await fetchGame(gameId, token)
    // On récupère l'historique ou on le créé si non existant
    const historyUpdated = data.data.history ? data.data.history : {}
    historyUpdated[step] = JSON.parse(aiResponse)

    // On met à jour la partie avec le nouvel historique
    const updatedGame = await api.put(`/games/${gameId}`, {
      data: {
        history: historyUpdated
      }
    },
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return updatedGame
    // console.log(JSON.stringify(updatedGame, null, 2))
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  fetchGame,
  saveGameProgress
}
