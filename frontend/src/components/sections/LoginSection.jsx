import AuthTabs from '../auth/AuthTabs'
import LoginForm from '../forms/LoginForm'
import { useAuth } from '../../contexts/AuthContext'

function LoginSection () {
  const { login, state } = useAuth()

  const handleSubmit = async (credentials) => {
    if (credentials?.identifier && credentials?.password) {
      await login(credentials)
    }
  }

  return (
    <section className='w-full max-w-md bg-green-900/80 border-2 border-green-400/30 rounded-2xl shadow-2xl p-8 flex flex-col items-center backdrop-blur-md'>
      <AuthTabs />
      <LoginForm onSubmit={handleSubmit} />
      {state.error && (
        <p className='text-red-500 text-sm mt-4 w-full text-center'>{state.error}</p>
      )}
    </section>
  )
}

export default LoginSection
