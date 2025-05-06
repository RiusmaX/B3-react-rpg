import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGame } from '../contexts/GameContext'

function GamePage () {
  const params = useParams()

  const navigate = useNavigate()

  const { loadGameData, state: { gameData } } = useGame()

  useEffect(() => {
    loadGameData(params.id, navigate)
  }, [])

  return (
    <h1>{gameData?.name}</h1>
  )
}

export default GamePage
