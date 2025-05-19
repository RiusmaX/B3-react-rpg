const { generateIntro } = require('../controllers/game-controller')
const { saveGameProgress, fetchGame } = require('../controllers/strapi-controller')

const router = require('express').Router()

router.post('/intro', async (req, res) => {
  const { body, headers } = req
  if (!body) return res.status(500).send('Missing body')

  // On récupère l'authentification de l'utilisateur
  const token = headers.authorization.replace('Bearer ', '')

  try {
    // On récupère la partie
    const data = await fetchGame('th54kmcom726nt6ynlnvamfv', token)

    // Si j'ai déjà une intro, je la retourne
    if (data?.data?.history?.intro) {
      return res.send(data?.data?.history?.intro)
    } else {
      // Si je n'ai pas d'intro, alors j'en génère une
      const intro = await generateIntro({ playerName: body.name, playerBio: body.biography })
      await saveGameProgress('intro', intro, 'th54kmcom726nt6ynlnvamfv', token)
      return res.send(intro)
    }
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
})

module.exports = router
