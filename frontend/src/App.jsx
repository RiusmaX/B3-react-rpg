import { BrowserRouter } from 'react-router'
import MainRouter from './navigation/MainRouter'
import { useState } from 'react'
import AuthRouter from './navigation/AuthRouter'
import GlobalLayout from './layouts/GlobalLayout'

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
    </GlobalLayout>
  )
}

export default App
