import { useState } from 'react'
import Input from './inputs/Input'
import PlayersList from '../lists/playersList'
import { useAuth } from '../../contexts/AuthContext'
import { strapiCreateGame } from '../../api/strapi'
import { toast } from 'react-toastify'
import Button from '../Button'

function NewGameForm () {
  const [gameData, setGameData] = useState({
    name: '',
    player: null
  })

  const { state: { user } } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Création de la partie dans Strapi
      const result = await strapiCreateGame({
        name: gameData.name,
        playerId: gameData.player.id,
        userId: user.id
      })
      console.log(result)
      toast.success('Partie créée avec succès')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 justify-center items-center'
    >
      <Input
        type='text'
        value={gameData.name}
        label='Nom de la partie'
        onChangeText={(text) => setGameData({ ...gameData, name: text })}
      />
      <PlayersList
        players={user.players}
        selectedPlayer={gameData.player}
        onPlayerSelect={(player) => setGameData({ ...gameData, player })}
      />
      <Button
        type='submit'
        variant='info'
      >
        Créer la partie
      </Button>
    </form>
  )
}

export default NewGameForm
