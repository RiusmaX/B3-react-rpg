import { Routes, Route, Navigate } from 'react-router'
import LoginPage from '../pages/LoginPage'

function AuthRouter () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route index path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default AuthRouter
