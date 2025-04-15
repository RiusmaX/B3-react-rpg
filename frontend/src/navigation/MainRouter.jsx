import { Routes, Route, Navigate } from 'react-router'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'

function MainRouter () {
  return (
    <Routes>
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
      <Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  )
}

export default MainRouter
