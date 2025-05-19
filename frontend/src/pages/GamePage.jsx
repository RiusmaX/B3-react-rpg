import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGame } from '../contexts/GameContext'
import Button from '../components/Button'
import Markdown from 'react-markdown'

function GamePage () {
  const params = useParams()

  const navigate = useNavigate()

  const { loadGameData, loadGameIntro, loadNextStep, state: { gameData, history, currentData, loading } } = useGame()

  useEffect(() => {
    if (!currentData) {
      loadGameData(params.id, navigate)
    }
  }, [])

  useEffect(() => {
    if (!history || history.length < 1) {
      loadGameIntro(gameData?.players[0])
    }
  }, [gameData])

  console.log('history', history)

  console.log('currentData', currentData)

  const handleAction = async (action) => {
    if (action.actionId === 'reload_game') {
      // console.log(action)
      // Recharger l'intro
      console.log('reload game')
    } else {
      // Continuer
      await loadNextStep(action)
    }
  }

  if (loading) {
    return (
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold animate-bounce text-white'>Chargement...
        </h2>
      </div>
    )
  }

  return currentData && currentData.text && currentData.actions && (
    <div className='w-full flex flex-col gap-8 justify-center items-center'>
      <div className='text-white text-xl max-w-4xl prose'>
        <Markdown>
          {currentData.text}
        </Markdown>
      </div>
      <div className='max-w-4xl flex flex-col items-center justify-center gap-4'>
        {
          currentData.actions.map(action => (
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
