function PlayersListItem ({ player, isSelected, onClick }) {
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onClick()
  }

  return (
    <button
      className={`flex flex-col items-center justify-center gap-2 border-2 ${isSelected ? 'border-emerald-400 shadow-lg shadow-emerald-400/40' : 'border-green-700'} rounded-xl p-4 bg-green-900/70 hover:border-emerald-300 cursor-pointer transition-all duration-300 min-w-[160px] max-w-[220px]`}
      onClick={handleClick}
    >
      <h4 className='font-fantasy text-xl text-green-200 mb-1'>{player?.name}</h4>
      <p className='italic text-green-100 text-sm text-center'>{player?.biography?.substring(0, 50)}...</p>
    </button>
  )
}

function PlayersList ({ players, selectedPlayer, onPlayerSelect }) {
  if (!players || players.length < 1) return <h4 className='font-fantasy text-lg text-green-200'>No data...</h4>

  return (
    <>
      <h3 className='font-fantasy text-2xl text-green-100 mb-2'>Mes personnages</h3>
      <div className='w-full flex flex-row gap-4 flex-wrap justify-center'>
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
