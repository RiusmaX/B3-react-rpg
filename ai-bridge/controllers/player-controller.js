const { generateText } = require('../adapters/gemini-adapter')

const generatePlayer = async (data) => {
  console.log(data)
  const aiResponse = await generateText(
    `
    Génère un personnage de jeu RPG en fonction des paramètres suivants :
     Nom: ${data.name}
     Classe: ${data.class}
     Univers: Dark fantasy medieval
    Soit drôle
    `
  )
  console.log(aiResponse)
}

module.exports = {
  generatePlayer
}
