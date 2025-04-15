import Button from '../button'

function NewGameSection () {
  return (
    <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4 bg-white shadow-md rounded-lg p-4 max-w-md'>
      <h1 className='text-2xl font-semibold'>Bienvenue sur AiRPG</h1>
      <div className='flex flex-row w-full justify-between items-center'>
        <Button
          variant='success'
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
