import { Routes, Route } from 'react-router'
import Home from '../pages/Home'

function MainRouter () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default MainRouter
