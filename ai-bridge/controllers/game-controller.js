const { generateText } = require('../adapters/gemini-adapter')

const generateIntro = async ({ playerName, playerBio }) => {
  const aiResponse = await generateText(`
    Role: Tu es le maître du jeu d'un RPG en ligne.
    Ton: Ton grave et sombre avec une touche d'humour noir. Tu dois en faire des tonnes et exagérer le propos.
    Tu dois générer l'intro du jeu en fonction de ces paramètres :
    Nom du joueur : ${playerName}
    Biographie du joueur : ${playerBio}
    Répond en JSON au format suivant : {"text": l'histoire que tu invente avec plusieurs paragraphe au format markdown. Tu peux ajouter des emojis et tout autre élément qui te semble utile. La mise en page doit être digne d'un livre. "actions": un tableau contenant une action pour commencer la partie et une action pour relancer l'intro. Utilise un nommage générique (actionId et actionLabel) dans les actions afin de les retrouver }.
    Dans l'intro, l'actionId pour relancer l'intro doit être toujours "reload_game".
    `)

  return aiResponse
}

const generateNextStep = async ({ playerName, playerBio, history, action }) => {
  console.log(history)
  const historyArray = Object.entries(history)
  const previousStep = historyArray[historyArray.length - 1][1]
  console.log(previousStep)

  console.log(action)

  const aiResponse = await generateText(`🕹️ **Rôle**  
  Tu es **le Maître du Jeu** d’un RPG textuel en ligne, arbitre tout-puissant des destinées.

  🎭 **Ton**  
  Grave, crépusculaire et gonflé à bloc d’humour noir. Surjoue chaque réplique, exagère les ténèbres et n’hésite pas à décocher une vanne cinglante quand l’atmosphère l’exige.

  ⚙️ **Sources (à injecter telles quelles)**  
  • Historique complet : ${history}  
  • Dernière étape   : ${previousStep}  
  • Action du joueur : ${action.label}  

  📋 **Paramètres**  
  • Nom du joueur  : ${playerName}  
  • Biographie     : ${playerBio}  

  🔗 **Contraintes narratives**  
  1. **Commence** toujours par rappeler l’action du joueur : « ${action.label}… ».  
  2. **Fais évoluer** l’intrigue à partir de ce choix, en maintenant une **cohérence sans faille**.  
  3. **Ajoute 1 à 3 événements aléatoires** (ombre glissante, grondement souterrain, prophétie maudite…) pour pimenter la scène.  
  4. **Varie** descriptions gothiques, dialogues percutants et scènes d’action — façon roman noir immersif.  
  5. **Termine** sur un cliffhanger haletant pour donner envie de choisir la suite.

  📦 **Format de réponse (JSON strict)**  
  {
    "text":  "<Ton histoire en Markdown, plusieurs paragraphes, titres # ou ### si besoin, emojis 🎲🗡️…>",
    "actions": [
      { "actionId": "a1", "actionLabel": "Choix percutant n°1" },
      { "actionId": "a2", "actionLabel": "Choix percutant n°2" },
      { "actionId": "a3", "actionLabel": "Choix percutant n°3" }
      // Ajoute jusqu’à 5 actions au total
    ]
  }`)

  return aiResponse
}

module.exports = {
  generateIntro,
  generateNextStep
}
