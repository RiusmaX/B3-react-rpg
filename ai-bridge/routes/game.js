const { generateIntro, generateNextStep } = require('../controllers/game-controller')
const { saveGameProgress, fetchGame } = require('../controllers/strapi-controller')

const router = require('express').Router()

router.post('/intro', async (req, res) => {
  const { body, headers } = req
  if (!body) return res.status(500).send('Missing body')

  const { gameData, userData } = body

  // On récupère l'authentification de l'utilisateur
  const token = headers.authorization.replace('Bearer ', '')

  try {
    // On récupère la partie
    const data = await fetchGame(gameData.documentId, token)

    // Si j'ai déjà une intro, je la retourne
    if (data?.data?.history?.intro) {
      return res.send(data?.data?.history?.intro)
    } else {
      // Si je n'ai pas d'intro, alors j'en génère une
      const intro = await generateIntro({
        playerName: userData.name,
        playerBio: userData.biography
      })
      await saveGameProgress('intro', intro, gameData.documentId, token)
      return res.send(intro)
    }
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
})

router.post('/next', async (req, res) => {
  const { body, headers } = req
  if (!body) return res.status(500).send('Missing body')
  const { gameData, userData, action } = body
  // On récupère l'authentification de l'utilisateur
  const token = headers.authorization.replace('Bearer ', '')

  try {
    // On récupère la partie
    const data = await fetchGame(gameData.documentId, token)

    if (data?.data?.history) {
      console.log(data.data.history)
      const history = Object.entries(data.data.history)
      const previousStep = history[history.length - 1][0]

      console.log(previousStep)

      const previousStepNumber = previousStep.includes('intro')
        ? 0
        : Number(previousStep.replace('step', ''))

      console.log(previousStepNumber)

      const step = await generateNextStep({
        playerName: userData.name,
        playerBio: userData.biography,
        history: data.data.history,
        action
      })

      await saveGameProgress(`step${previousStepNumber + 1}`, step, gameData.documentId, token)
      return res.send({
        step,
        history: data.data.history
      })
    } else {
      throw new Error('Can\'t load history')
    }
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
})

module.exports = router
