const { generateImage } = require('../adapters/gemini-adapter')

const generateAvatar = async () => {
  const result = await generateImage()
  return result
}

module.exports = {
  generateAvatar
}
