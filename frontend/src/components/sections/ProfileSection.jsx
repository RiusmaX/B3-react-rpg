import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router'
import Button from '../button'

function ProfileSection () {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4 bg-white shadow-md rounded-lg p-4 max-w-md'>
      <h2 className='text-2xl font-semibold'>Mon Profil</h2>
      <Button
        variant='info'
      >
        Générer mon personnage
      </Button>
      <Button
        variant='danger'
        onClick={handleLogout}
      >
        Se déconnecter
      </Button>
    </section>
  )
}

export default ProfileSection
