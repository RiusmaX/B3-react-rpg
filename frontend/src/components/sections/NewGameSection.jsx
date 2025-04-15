import { strapiCreateGame } from '../../api/strapi'
import { useAuth } from '../../contexts/AuthContext'
import Button from '../button'

function NewGameSection () {
  const { state: { user: { id } } } = useAuth()

  const handleCreateGame = async () => {
    // Récupération du nom
    const gameName = window.prompt('Nom de la partie', 'toto')
    if (gameName && gameName !== '') {
      console.log(gameName)
      try {
        // Création de la partie dans Strapi
        const result = await strapiCreateGame({
          name: gameName,
          userId: id
        })
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    } else {
      console.log('User cancelled prompt')
    }
  }

  return (
    <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4 bg-white shadow-md rounded-lg p-4 max-w-md'>
      <h1 className='text-2xl font-semibold'>Bienvenue sur AiRPG</h1>
      <div className='flex flex-row w-full justify-between items-center'>
        <Button
          variant='success'
          onClick={handleCreateGame}
        >
          Créer une partie
        </Button>
        <Button
          variant='info'
        >
          Rejoindre une partie
        </Button>
      </div>
    </section>
  )
}

export default NewGameSection
