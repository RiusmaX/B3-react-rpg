import { Link } from 'react-router'
import { strapiLoginLocal } from '../../api/strapi'
import LoginForm from '../forms/LoginForm'

function LoginSection () {
  const handleSubmit = async (credentials) => {
    if (credentials?.identifier && credentials?.password) {
      const loginData = await strapiLoginLocal(credentials)
      console.log(loginData)
    }
  }

  return (
    <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4'>
      <h2 className='text-2xl font-semibold'>Se connecter</h2>
      <LoginForm onSubmit={handleSubmit} />
      <Link to='/register' className='text-sm underline'>
        Je n'ai pas de compte
      </Link>
    </section>
  )
}

export default LoginSection
