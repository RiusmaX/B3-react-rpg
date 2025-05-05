import { useState } from 'react'
import Input from './inputs/Input'
import Button from '../button'

function RegisterForm ({ onSubmit }) {
  const [data, setData] = useState({
    email: '',
    username: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center'>
      <Input
        type='email'
        label='Email'
        value={data.email}
        onChangeText={(text) => setData({ ...data, email: text })}
      />
      <Input
        type='text'
        label='Username'
        value={data.username}
        onChangeText={(text) => setData({ ...data, username: text })}
      />
      <Input
        type='password'
        label='Password'
        value={data.password}
        onChangeText={(text) => setData({ ...data, password: text })}
      />
      <Button
        type='submit'
      >
        S'inscrire
      </Button>
    </form>
  )
}

export default RegisterForm
