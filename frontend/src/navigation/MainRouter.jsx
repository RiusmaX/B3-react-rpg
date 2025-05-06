import { Routes, Route, Navigate } from 'react-router'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import GamePage from '../pages/GamePage'

function MainRouter () {
  return (
    <Routes>
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
      <Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='game'>
        <Route path=':id' element={<GamePage />} />
      </Route>
    </Routes>
  )
}

export default MainRouter
