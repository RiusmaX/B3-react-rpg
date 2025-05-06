import React from 'react'
import logo from '../../assets/logo.webp'

/**
 * Composant de layout pour les pages d'authentification.
 * Gère le fond dégradé, le centrage, et l'affichage du logo.
 */
function AuthLayout ({ children }) {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center bg-transparent'>
      <div className='relative flex flex-col items-center mb-2'>
        <img
          src={logo}
          alt='AIRPG Logo'
          className='w-40 mb-2 drop-shadow-xl shadow-green-400/40 rounded-full border-4 border-green-300/30'
          style={{ boxShadow: '0 0 40px 8px #6ee7b7, 0 0 0 4px #183a2c' }}
        />
        <span className='font-fantasy text-5xl tracking-widest text-green-100 drop-shadow-lg select-none -mt-4 mb-2'>AIRPG</span>
        <div className='w-12 h-2 rounded-full bg-gradient-to-r from-green-300 via-green-500 to-green-300 blur-sm opacity-80 mb-2' />
      </div>
      {children}
    </div>
  )
}

export default AuthLayout
