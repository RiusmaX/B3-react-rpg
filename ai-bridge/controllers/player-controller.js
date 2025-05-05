const { generateText } = require('../adapters/gemini-adapter')

const generatePlayer = async (data) => {
  const aiResponse = await generateText(
    `
    Génère un personnage de jeu RPG en fonction des paramètres suivants :
     Nom: ${data.name}
     Classe: ${data.class}
     Univers: Dark fantasy medieval
    Utilise une touche d'humour noir.
    Répond en format JSON avec les champs "name", "description".
    Répond en français.
    Répond sans markdown ni aucune syntaxe particulière.
    Ne réutilise pas le "data.name" dans ta réponse.
    `
  )
  return aiResponse
}

module.exports = {
  generatePlayer
}
