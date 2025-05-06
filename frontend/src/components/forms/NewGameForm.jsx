import { useState } from 'react'
import Input from './inputs/Input'
import PlayersList from '../lists/playersList'
import { useAuth } from '../../contexts/AuthContext'
import { strapiCreateGame } from '../../api/strapi'
import { toast } from 'react-toastify'
import Button from '../Button'
import { useNavigate } from 'react-router'

function NewGameForm () {
  const [gameData, setGameData] = useState({
    name: '',
    player: null
  })

  const { state: { user } } = useAuth()
  const navigate = useNavigate()

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
      navigate(`/game/${result?.data?.documentId}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-6 justify-center items-center bg-green-900/70 border-2 border-green-400/30 rounded-xl shadow-xl p-6 w-full max-w-lg backdrop-blur-md'
    >
      <Input
        type='text'
        value={gameData.name}
        label={<span className='font-fantasy text-lg text-green-200'>Nom de la partie</span>}
        onChangeText={(text) => setGameData({ ...gameData, name: text })}
      />
      <PlayersList
        players={user.players}
        selectedPlayer={gameData.player}
        onPlayerSelect={(player) => setGameData({ ...gameData, player })}
      />
      <Button
        type='submit'
        className='bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-400/30 border-2 border-emerald-300/40 transition-all duration-200 font-fantasy text-xl'
      >
        Créer la partie
      </Button>
    </form>
  )
}

export default NewGameForm
