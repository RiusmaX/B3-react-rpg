import { useState } from 'react'
import Button from '../button'
import Modal from '../Modal'
import NewGameForm from '../forms/NewGameForm'

function NewGameSection () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4 bg-white shadow-md rounded-lg p-4 max-w-md'>
        <h1 className='text-2xl font-semibold'>Bienvenue sur AiRPG</h1>
        <div className='flex flex-row w-full justify-between items-center'>
          <Button
            variant='success'
            onClick={() => setIsModalOpen(true)}
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
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentLabel='Informations de la partie'
      >
        <h2 className='text-xl font-semibold mb-4'>Créer une partie</h2>
        <NewGameForm
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  )
}

export default NewGameSection
