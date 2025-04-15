import { useAuth } from '../contexts/AuthContext'
import Navbar from '../navigation/Navbar'

function GlobalLayout ({ children }) {
  const { state: { isLoggedIn } } = useAuth()
  return (
    <>
      {
      isLoggedIn &&
        (
          <header className='fixed flex flex-row w-full justify-center items-center h-20 bg-white shadow-xl rounded-b-lg top-0 z-50'>
            <Navbar />
          </header>
        )
      }
      <main
        className='flex flex-col h-full w-full min-h-screen bg-cover bg-center bg-no-repeat justify-center items-center'
        style={{ backgroundImage: "url('/src/assets/bg-fantasy.webp')" }}
      >
        {
          !isLoggedIn && (
            <div className='flex flex-row justify-center items-center w-full z-50 mb-[-50px]'>
              <img src='/src/assets/logo.webp' alt='logo' className='h-56 w-56' />
            </div>
          )
        }
        {children}
      </main>
    </>
  )
}

export default GlobalLayout
