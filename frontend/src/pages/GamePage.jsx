import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { strapiLoadGame } from '../api/strapi'

function GamePage () {
  const [game, setGame] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      try {
        const _game = await strapiLoadGame(params.id)
        if (_game?.data) {
          setGame(_game.data)
        } else {
          navigate('/')
        }
      } catch (error) {
        console.error(error)
        navigate('/')
      }
    }
    getData()
  }, [])

  return (
    <h1>{game?.name}</h1>
  )
}

export default GamePage
