const { generateText } = require('../adapters/gemini-adapter')

const generatePlayer = async (data) => {
  const aiResponse = await generateText(
    `Génère un personnage de jeu RPG en fonction des paramètres suivants ${data}`
  )
  console.log(aiResponse)
}

module.exports = {
  generatePlayer
}
