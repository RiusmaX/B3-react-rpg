import Button from '../components/button'
import { useAuth } from '../contexts/AuthContext'

function Home () {
  const { logout } = useAuth()

  return (
    <>
      <h1>Home</h1>
      <Button
        variant='danger'
        onClick={logout}
      >
        Se déconnecter
      </Button>
    </>
  )
}

export default Home
