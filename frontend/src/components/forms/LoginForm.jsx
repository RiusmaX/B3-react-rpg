import { useState } from 'react'
import Input from './inputs/Input'
import Button from '../Button'

function LoginForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(credentials)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full bg-green-900/60 border-2 border-green-400/30 rounded-xl shadow-xl p-6'>
      <Input
        type='email'
        label='Email'
        value={credentials.identifier}
        onChangeText={(text) => setCredentials({ ...credentials, identifier: text })}
        placeholder='Entrez votre email'
        autoComplete='email'
        required
      />
      <Input
        type='password'
        label='Mot de passe'
        value={credentials.password}
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
        placeholder='Entrez votre mot de passe'
        autoComplete='current-password'
        required
      />
      {/* <a href="#" className="text-xs text-gray-400 hover:text-green-400 text-right mb-2">Mot de passe oublié ?</a> */}
      <Button type='submit'>Se connecter</Button>
    </form>
  )
}

export default LoginForm
