import React from 'react'

/**
 * Bouton principal stylisé pour l'authentification et autres actions.
 */
function Button ({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`w-full py-2 px-4 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold text-lg shadow transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
