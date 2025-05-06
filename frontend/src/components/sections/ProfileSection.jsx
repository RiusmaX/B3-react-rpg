import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router'
import Button from '../Button'
import CreatePlayerForm from '../forms/CreatePlayerForm'
import { useState } from 'react'
import PlayersList from '../lists/playersList'
import Modal from '../Modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

function ProfileSection () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { logout, state: { user } } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-6 bg-green-900/80 shadow-2xl rounded-2xl p-8 max-w-2xl border-2 border-green-400/30 backdrop-blur-md relative'>
        <h2 className='text-3xl font-fantasy text-green-100 drop-shadow-lg text-center mb-2'>Mon Profil</h2>
        {user.players && <PlayersList players={user.players} />}
        <Button
          className='bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-400/30 border-2 border-emerald-300/40 transition-all duration-200 font-fantasy text-lg'
          onClick={() => setIsModalOpen(true)}
        >
          Créer un personnage
        </Button>
        <Button
          className='bg-gradient-to-r from-red-500 via-red-700 to-red-500 hover:from-red-400 hover:to-red-600 shadow-lg shadow-red-400/30 border-2 border-red-300/40 transition-all duration-200 font-fantasy text-lg mt-2'
          onClick={handleLogout}
        >
          Se déconnecter
        </Button>
      </section>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentLabel='Informations du joueur'
        style={customStyles}
      >
        <h2 className='text-2xl font-fantasy text-green-200 mb-4 text-center'>Créer un personnage</h2>
        <CreatePlayerForm
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  )
}

export default ProfileSection
