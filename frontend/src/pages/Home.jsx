import { useAuth } from '../contexts/AuthContext'

function Home () {
  const { logout } = useAuth()

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={logout}
        className='bg-red-400 hover:bg-green-200 px-4 py-2 rounded-lg cursor-pointer shadow-md transition-all duration-200'
      >
        Se déconnecter
      </button>
    </>
  )
}

export default Home
