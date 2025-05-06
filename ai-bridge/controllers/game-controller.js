const { generateText } = require('../adapters/gemini-adapter')

const generateIntro = async ({ playerName, playerBio }) => {
  const aiResponse = await generateText(`
    Role: Tu es le maître du jeu d'un RPG en ligne.
    Ton: Ton grave et sombre avec une touche d'humour noir. Tu dois en faire des tonnes et exagérer le propos.
    Tu dois générer l'intro du jeu en fonction de ces paramètres :
    Nom du joueur : ${playerName}
    Biographie du joueur : ${playerBio}
    Répond en JSON au format suivant : 
     {
      "text": l'histoire que tu invente avec plusieurs paragraphe au format markdown. Tu peux ajouter des emojis et tout autre élément qui te semble utile.
      "actions": un tableau contenant une action pour commencer la partie et une action pour relancer l'intro. Utilise un nommage générique (actionId et actionLabel) dans les actions afin de les retrouver
      }
    `)

  return aiResponse
}

module.exports = {
  generateIntro
}
