import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import NewGameForm from '../forms/NewGameForm'

function NewGameSection () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-6 bg-green-900/80 shadow-2xl rounded-2xl p-8 max-w-xl border-2 border-green-400/30 backdrop-blur-md relative'>
        <h1 className='text-4xl font-fantasy text-green-100 drop-shadow-lg text-center mb-2'>Bienvenue sur AiRPG</h1>
        <div className='w-16 h-2 rounded-full bg-gradient-to-r from-green-300 via-green-500 to-green-300 blur-sm opacity-80 mb-4' />
        <div className='flex flex-row w-full justify-between items-center gap-4'>
          <Button
            onClick={() => setIsModalOpen(true)}
            className='bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-400/30 border-2 border-emerald-300/40 transition-all duration-200'
          >
            Créer une partie
          </Button>
          <Button
            className='bg-gradient-to-r from-green-400 via-green-600 to-green-400 hover:from-green-300 hover:to-green-500 shadow-lg shadow-green-400/30 border-2 border-green-300/40 transition-all duration-200'
          >
            Rejoindre une partie
          </Button>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentLabel='Informations de la partie'
      >
        <h2 className='text-2xl font-fantasy text-green-200 mb-4 text-center'>Créer une partie</h2>
        <NewGameForm
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  )
}

export default NewGameSection
