const { generateAvatar } = require('../controllers/avatar-controller')

const router = require('express').Router()

router.post('/', async (req, res) => {
  const avatar = await generateAvatar()
  console.log(avatar)
  res.send('Tiens ta photo !')
})

module.exports = router
