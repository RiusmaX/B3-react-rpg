import { BrowserRouter } from 'react-router'
import MainRouter from './navigation/MainRouter'
import AuthRouter from './navigation/AuthRouter'
import GlobalLayout from './layouts/GlobalLayout'
import { ToastContainer } from 'react-toastify'
import { useAuth } from './contexts/AuthContext'

function App () {
  const { state: { isLoggedIn } } = useAuth()

  return (
    <BrowserRouter>
      <GlobalLayout>
        {
          isLoggedIn
            ? <MainRouter />
            : <AuthRouter />
        }
        <ToastContainer />
      </GlobalLayout>
    </BrowserRouter>
  )
}

export default App
