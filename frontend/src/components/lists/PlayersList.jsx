function PlayersListItem ({ player, isSelected, onClick }) {
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onClick()
  }

  return (
    <button
      className={`flex flex-col items-center justify-center gap-4 border-2 ${isSelected ? 'border-gray-400' : 'border-gray-200'} rounded-lg p-2 lg:max-w-52 hover:border-gray-400 cursor-pointer transition-all duration-300`}
      onClick={handleClick}
    >
      <h4 className='font-semibold text-lg'>{player?.name}</h4>
      <p>{player?.biography?.substring(0, 50)}...</p>
    </button>
  )
}

function PlayersList ({ players, selectedPlayer, onPlayerSelect }) {
  if (!players || players.length < 1) return <h4>No data...</h4>

  return (
    <>
      <h3 className='font-semibold text-2xl'>Mes personnages</h3>
      <div className='w-full flex flex-row gap-4 flex-wrap'>
        {
          players?.map(player => (
            <PlayersListItem
              key={player.id}
              player={player}
              onClick={() => onPlayerSelect(player)}
              isSelected={selectedPlayer?.id === player.id}
            />
          ))
        }
      </div>
    </>
  )
}

export default PlayersList
