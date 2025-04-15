import { Link, useNavigate } from 'react-router'
import LoginForm from '../forms/LoginForm'
import { useAuth } from '../../contexts/AuthContext'

function LoginSection () {
  const { login, state } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async (credentials) => {
    if (credentials?.identifier && credentials?.password) {
      await login(credentials)
      navigate('/')
    }
  }

  return (
    <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4'>
      <h2 className='text-2xl font-semibold'>Se connecter</h2>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
      <LoginForm onSubmit={handleSubmit} />
      <p className='text-red-600'>
        {state.error}
      </p>
      <Link to='/register' className='text-sm underline'>
        Je n'ai pas de compte
      </Link>
    </section>
  )
}

export default LoginSection
