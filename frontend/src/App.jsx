import { BrowserRouter } from 'react-router'
import MainRouter from './navigation/MainRouter'
import { useState } from 'react'
import AuthRouter from './navigation/AuthRouter'

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      {
        isLoggedIn
          ? <MainRouter />
          : <AuthRouter />
      }
    </BrowserRouter>
  )
}

export default App
