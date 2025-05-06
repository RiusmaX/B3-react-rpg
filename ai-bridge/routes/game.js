const { generateIntro } = require('../controllers/game-controller')

const router = require('express').Router()

router.post('/intro', async (req, res) => {
  const { body } = req
  if (!body) return res.status(500).send('Missing body')

  try {
    const intro = await generateIntro({ playerName: body.name, playerBio: body.biography })
    return res.send(intro)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
})

module.exports = router
