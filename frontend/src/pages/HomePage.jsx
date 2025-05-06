// import Button from '../components/button'
import { useEffect } from 'react'
import NewGameSection from '../components/sections/NewGameSection'
import { useAuth } from '../contexts/AuthContext'

function Home () {
  const { loadUserData } = useAuth()

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <NewGameSection />
  )
}

export default Home
