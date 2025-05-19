import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGame } from '../contexts/GameContext'
import Button from '../components/Button'
import Markdown from 'react-markdown'

function GamePage () {
  const params = useParams()

  const navigate = useNavigate()

  const { loadGameData, loadGameIntro, state: { gameData, currentData } } = useGame()

  useEffect(() => {
    loadGameData(params.id, navigate)
  }, [])

  useEffect(() => {
    loadGameIntro(gameData?.players[0])
  }, [])

  console.log(currentData)

  const handleAction = async (action) => {
    if (action.actionId === 'start_game') {
      console.log(action)
      // Continuer
    } else {
      console.log('reload game')
      // Recharger l'intro
    }
  }

  return (
    <div className='w-full flex flex-col gap-8 justify-center items-center'>
      <div className='text-white text-xl max-w-4xl prose'>
        <Markdown>
          {currentData?.text}
        </Markdown>
      </div>
      <div className='max-w-4xl flex flex-col items-center justify-center gap-4'>
        {
          currentData?.actions?.map(action => (
            <Button key={action.actionId} onClick={() => handleAction(action)}>
              {action.actionLabel}
            </Button>
          ))
        }
      </div>
    </div>
  )
}

export default GamePage
