import Input from './inputs/Input'
import Button from '../Button'
import React from 'react'

function RegisterForm ({ onSubmit }) {
  const [data, setData] = React.useState({
    email: '',
    username: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full bg-green-900/60 border-2 border-green-400/30 rounded-xl shadow-xl p-6'>
      <Input
        type='email'
        label='Email'
        value={data.email}
        onChangeText={(text) => setData({ ...data, email: text })}
        placeholder='Entrez votre email'
        autoComplete='email'
        required
      />
      <Input
        type='text'
        label="Nom d'utilisateur"
        value={data.username}
        onChangeText={(text) => setData({ ...data, username: text })}
        placeholder='Choisissez un pseudo'
        autoComplete='username'
        required
      />
      <Input
        type='password'
        label='Mot de passe'
        value={data.password}
        onChangeText={(text) => setData({ ...data, password: text })}
        placeholder='Créez un mot de passe'
        autoComplete='new-password'
        required
      />
      <Button type='submit'>S'inscrire</Button>
    </form>
  )
}

export default RegisterForm
