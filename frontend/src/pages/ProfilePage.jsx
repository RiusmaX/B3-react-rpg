import { useEffect } from 'react'
import ProfileSection from '../components/sections/ProfileSection'
import { useAuth } from '../contexts/AuthContext'

function ProfilePage () {
  const { loadUserData } = useAuth()

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <ProfileSection />
  )
}

export default ProfilePage
