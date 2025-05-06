import { useAuth } from '../contexts/AuthContext'
import Navbar from '../navigation/Navbar'
import React from 'react'

// Icônes décoratives SVG (exemple : feuille elfique et gemme magique)
const LeafIcon = () => (
  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' className='absolute left-4 top-4 opacity-60' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16 2C10 10 2 18 16 30C30 18 22 10 16 2Z' fill='#6ee7b7' stroke='#34d399' strokeWidth='2' />
  </svg>
)
const GemIcon = () => (
  <svg width='28' height='28' viewBox='0 0 28 28' fill='none' className='absolute right-6 top-8 opacity-70' xmlns='http://www.w3.org/2000/svg'>
    <polygon points='14,2 26,10 22,26 6,26 2,10' fill='#a7f3d0' stroke='#34d399' strokeWidth='2' />
  </svg>
)

function GlobalLayout ({ children }) {
  const { state: { isLoggedIn } } = useAuth()
  return (
    <div className='min-h-screen w-full flex flex-col bg-gradient-to-br from-green-900 via-green-800 to-gray-900 relative overflow-x-hidden'>
      {/* Icônes décoratives en fond */}
      <LeafIcon />
      <GemIcon />
      {isLoggedIn && (
        <header className='fixed flex flex-row w-full justify-center items-center h-20 bg-green/80 shadow-xl rounded-b-lg top-0 z-50 backdrop-blur-md border-b-2 border-green-300/30'>
          <Navbar />
        </header>
      )}
      <main className='flex flex-col h-full w-full min-h-screen justify-center items-center pt-24 pb-8'>
        {/* Autre icône décorative en bas à droite */}
        <svg width='40' height='40' viewBox='0 0 40 40' fill='none' className='absolute bottom-4 right-4 opacity-50' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='20' cy='20' r='18' fill='#bbf7d0' stroke='#34d399' strokeWidth='2' />
          <text x='50%' y='55%' textAnchor='middle' fill='#166534' fontSize='18' fontFamily='UnifrakturCook, cursive'>✦</text>
        </svg>
        {children}
      </main>
    </div>
  )
}

export default GlobalLayout
