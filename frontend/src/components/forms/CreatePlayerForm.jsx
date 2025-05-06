import { useState } from 'react'
import Input from './inputs/Input'
import Select from './inputs/Select'
import { playerClasses } from '../../config/constants'
import Button from '../Button'
import { generatePlayer } from '../../api/aiBridge'
import { toast } from 'react-toastify'
import { strapiCreatePlayer } from '../../api/strapi'
import { useAuth } from '../../contexts/AuthContext'

function CreatePlayerForm ({ closeModal }) {
  const [playerData, setPlayerData] = useState({
    name: '',
    class: 'bard',
    description: null
  })

  const { state: { user }, loadUserData } = useAuth()

  const handleChangeClass = (e) => {
    setPlayerData({ ...playerData, class: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const player = await generatePlayer(playerData)
      setPlayerData({
        ...playerData,
        name: player.name,
        description: player.description
      })
    } catch (error) {
      console.error(error)
      toast.error(error)
    }
  }

  const handleSavePlayer = async () => {
    try {
      await strapiCreatePlayer({
        name: playerData.name,
        userId: user.id,
        description: playerData.description,
        class: playerData.class
      })
      toast.success('Personnage créé')
      loadUserData()
      closeModal()
    } catch (error) {
      console.error(error)
      toast.error(error)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-6 justify-center items-center bg-green-900/70 border-2 border-green-400/30 rounded-xl shadow-xl p-6 w-full max-w-lg backdrop-blur-md'
      >
        <Input
          type='text'
          value={playerData.name}
          label={<span className='font-fantasy text-lg text-green-200'>Nom</span>}
          onChangeText={(text) => setPlayerData({ ...playerData, name: text })}
        />
        <Select
          options={playerClasses}
          value={playerData.class}
          label={<span className='font-fantasy text-lg text-green-200'>Classe du personnage</span>}
          onChange={handleChangeClass}
        />
        {playerData.description && (
          <textarea
            className='w-full h-40 bg-green-900/60 border-2 border-green-400/30 rounded-lg p-3 text-green-100 font-mono shadow-inner focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-200'
            value={playerData.description}
            readOnly
          />
        )}
        <Button
          type='submit'
          className='bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-400/30 border-2 border-emerald-300/40 transition-all duration-200 font-fantasy text-lg'
        >
          Générer le personnage
        </Button>
      </form>
      {playerData.description && (
        <Button
          onClick={handleSavePlayer}
          className='bg-gradient-to-r from-green-400 via-green-600 to-green-400 hover:from-green-300 hover:to-green-500 shadow-lg shadow-green-400/30 border-2 border-green-300/40 transition-all duration-200 font-fantasy text-lg mt-4'
        >
          Sauvegarder mon personnage
        </Button>
      )}
    </>
  )
}

export default CreatePlayerForm
