import { Link } from 'react-router'

function Navbar () {
  return (
    <nav className='flex flex-row w-full justify-center items-center px-6 max-w-[1440px]'>
      <div className='flex flex-row w-full justify-between items-center'>
        <a className='navbar-brand opacity-100 hover:opacity-60 transition-all duration-300' href='/'>
          <img src='/src/assets/logo.webp' alt='logo' className='h-20 w-20' />
        </a>
        <Link
          to='/profile'
        >
          Profile
        </Link>
        {/* <div className='flex flex-row gap-4'>
          <a href='/login' className='text-sm text-gray-700 hover:text-gray-900 transition-all duration-300'>
            Se connecter
          </a>
          <a href='/register' className='text-sm text-gray-700 hover:text-gray-900 transition-all duration-300'>
            S'inscrire
          </a>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
