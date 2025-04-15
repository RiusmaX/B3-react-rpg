import { BrowserRouter } from 'react-router'
import MainRouter from './navigation/MainRouter'
import { useState } from 'react'
import AuthRouter from './navigation/AuthRouter'
import GlobalLayout from './layouts/GlobalLayout'
import { ToastContainer } from 'react-toastify'

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
