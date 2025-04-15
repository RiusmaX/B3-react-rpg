const { GoogleGenAI } = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const generateImage = async () => {
  console.log('generateImage')
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: 'Pourquoi le ciel est bleu ?'
  })
  console.log(response.text)
}

module.exports = {
  generateImage
}
