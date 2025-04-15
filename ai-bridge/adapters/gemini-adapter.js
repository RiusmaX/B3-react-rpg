const { GoogleGenAI } = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const generateImage = async () => {
  // console.log('generateImage')
  // const response = await ai.models.generateContent({
  //   model: 'gemini-2.0-flash',
  //   contents: 'Génère une image d\'un vieux mage dans un style RPG haut de gamme'
  // })
  // console.log(response.candidates[0].content)

  // TODO : Find a free API for generate picture
}

module.exports = {
  generateImage
}
