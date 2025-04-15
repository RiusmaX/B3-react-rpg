import { Link } from 'react-router'
import LoginForm from '../forms/LoginForm'
import { useAuth } from '../../contexts/AuthContext'

function LoginSection () {
  const { login } = useAuth()

  const handleSubmit = async (credentials) => {
    if (credentials?.identifier && credentials?.password) {
      await login(credentials)
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
