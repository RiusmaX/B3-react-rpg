import { Link } from 'react-router'
import { strapiRegisterLocal } from '../../api/strapi'
import RegisterForm from '../forms/RegisterForm'

function RegisterSection () {
  const handleSubmit = async (data) => {
    if (data?.email && data?.username && data?.password) {
      const loginData = await strapiRegisterLocal(data)
      console.log(loginData)
    }
  }

  return (
    <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4'>
      <h2 className='text-2xl font-semibold'>S'inscrire</h2>
      <RegisterForm onSubmit={handleSubmit} />
      <Link to='/login' className='text-sm underline'>
        J'ai déjà un compte
      </Link>
    </section>
  )
}

export default RegisterSection
