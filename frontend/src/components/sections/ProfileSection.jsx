import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router'
import Modal from 'react-modal'
import Button from '../button'
import CreatePlayerForm from '../forms/CreatePlayerForm'

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
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4 bg-white shadow-md rounded-lg p-4 max-w-md'>
        <h2 className='text-2xl font-semibold'>Mon Profil</h2>
        <Button
          variant='info'
        >
          Créer un personnage
        </Button>
        <Button
          variant='danger'
          onClick={handleLogout}
        >
          Se déconnecter
        </Button>
      </section>
      <Modal
        isOpen
        contentLabel='Informations du joueur'
        style={customStyles}
      >
        <h2 className='text-xl font-semibold mb-4'>Créer un personnage</h2>
        <CreatePlayerForm />
      </Modal>
    </>
  )
}

export default ProfileSection
