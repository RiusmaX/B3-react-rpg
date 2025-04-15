import { useState } from 'react'
import Input from './inputs/Input'
import Button from '../button'

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
      <Button
        type='submit'
      >
        Se connecter
      </Button>
    </form>
  )
}

export default LoginForm
