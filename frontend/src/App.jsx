import { BrowserRouter } from 'react-router'
import MainRouter from './navigation/MainRouter'
import AuthRouter from './navigation/AuthRouter'
import GlobalLayout from './layouts/GlobalLayout'
import { ToastContainer } from 'react-toastify'
import { useAuth } from './contexts/AuthContext'

function App () {
  const { state: { isLoggedIn } } = useAuth()

  return (
    <GlobalLayout>
      <BrowserRouter>
        {
          isLoggedIn
            ? <MainRouter />
            : <AuthRouter />
        }
      </BrowserRouter>
      <ToastContainer />
    </GlobalLayout>
  )
}

export default App
