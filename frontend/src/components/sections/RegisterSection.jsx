import AuthTabs from '../auth/AuthTabs'
import RegisterForm from '../forms/RegisterForm'
import { useAuth } from '../../contexts/AuthContext'

function RegisterSection () {
  const { register, state } = useAuth()
  const handleSubmit = async (data) => {
    if (data?.email && data?.username && data?.password) {
      await register(data)
    }
  }

  return (
    <section className='w-full max-w-md bg-green-900/80 border-2 border-green-400/30 rounded-2xl shadow-2xl p-8 flex flex-col items-center backdrop-blur-md'>
      <AuthTabs />
      <RegisterForm onSubmit={handleSubmit} />
      {state?.error && (
        <p className='text-red-500 text-sm mt-4 w-full text-center'>{state.error}</p>
      )}
    </section>
  )
}

export default RegisterSection
