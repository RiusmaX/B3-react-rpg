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
    <section className='flex flex-col w-full h-full mx-auto justify-center items-center'>
      <h2>Login Section</h2>
      <LoginForm onSubmit={handleSubmit} />
    </section>
  )
}

export default LoginSection
