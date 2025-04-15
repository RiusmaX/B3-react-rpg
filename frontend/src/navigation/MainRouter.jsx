import { Routes, Route, Navigate } from 'react-router'
import Home from '../pages/Home'

function MainRouter () {
  return (
    <Routes>
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
      <Route index path='/' element={<Home />} />
    </Routes>
  )
}

export default MainRouter
