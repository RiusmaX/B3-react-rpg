import { useState } from 'react'
import Input from './inputs/Input'
import Select from './inputs/Select'
import { playerClasses } from '../../config/constants'
import Button from '../button'
import { generatePlayer } from '../../api/aiBridge'

function CreatePlayerForm () {
  const [playerData, setPlayerData] = useState({
    name: '',
    class: 'bard'
  })

  const handleChangeClass = (e) => {
    setPlayerData({ ...playerData, class: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(playerData)
    const player = await generatePlayer(playerData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 justify-center items-center'
    >
      <Input
        type='text'
        value={playerData.name}
        label='Nom'
        onChangeText={(text) => setPlayerData({ ...playerData, name: text })}
      />
      <Select
        options={playerClasses}
        value={playerData.class}
        label='Classe du personnage'
        onChange={handleChangeClass}
      />
      <Button
        type='submit'
      >
        Générer le personnage
      </Button>
    </form>
  )
}

export default CreatePlayerForm
