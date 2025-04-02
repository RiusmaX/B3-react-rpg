import { useState } from 'react'
import Input from './inputs/Input'

function RegisterForm ({ onSubmit }) {
  const [data, setData] = useState({
    email: 'marius2@sergent.dev',
    username: 'marius2',
    password: 'password'
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
      <button
        type='submit'
        className='bg-green-400 hover:bg-green-200 px-4 py-2 rounded-lg cursor-pointer shadow-md transition-all duration-200'
      >
        S'inscrire
      </button>
    </form>
  )
}

export default RegisterForm
