import { Link } from 'react-router'
import RegisterForm from '../forms/RegisterForm'
import { useAuth } from '../../contexts/AuthContext'

function RegisterSection () {
  const { register } = useAuth()
  const handleSubmit = async (data) => {
    if (data?.email && data?.username && data?.password) {
      await register(data)
    }
  }

  return (
    <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4 bg-white shadow-md rounded-lg p-4 max-w-md'>      <h2 className='text-2xl font-semibold'>S'inscrire</h2>
      <RegisterForm onSubmit={handleSubmit} />
      <Link to='/login' className='text-sm underline'>
        J'ai déjà un compte
      </Link>
    </section>
  )
}

export default RegisterSection
