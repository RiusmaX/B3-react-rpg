import { useState } from 'react'
import Input from './inputs/Input'

function LoginForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    identifier: 'marius@sergent.dev',
    password: 'password'
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(credentials)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center'>
      <Input
        type='email'
        label='Email'
        value={credentials.identifier}
        onChangeText={(text) => setCredentials({ ...credentials, identifier: text })}
      />
      <Input
        type='password'
        label='Password'
        value={credentials.password}
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
      />
      <button
        type='submit'
        className='bg-green-400 hover:bg-green-200 px-4 py-2 rounded-lg cursor-pointer shadow-md transition-all duration-200'
      >
        Se connecter
      </button>
    </form>
  )
}

export default LoginForm
