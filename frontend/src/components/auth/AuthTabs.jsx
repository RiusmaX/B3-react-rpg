import React from 'react'
import { Link, useLocation } from 'react-router'

/**
 * Onglets de navigation entre connexion et inscription.
 */
function AuthTabs () {
  const location = useLocation()
  const isLogin = location.pathname === '/login'

  return (
    <div className='flex w-full justify-between mb-6'>
      <Link
        to='/login'
        className={`flex-1 text-center py-2 text-lg font-semibold transition-colors duration-200 ${isLogin ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-300 border-b-2 border-transparent hover:text-green-300'}`}
      >
        Login
      </Link>
      <Link
        to='/register'
        className={`flex-1 text-center py-2 text-lg font-semibold transition-colors duration-200 ${!isLogin ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-300 border-b-2 border-transparent hover:text-green-300'}`}
      >
        Sign Up
      </Link>
    </div>
  )
}

export default AuthTabs
