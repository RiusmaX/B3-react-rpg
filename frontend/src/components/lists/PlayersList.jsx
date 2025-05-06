function PlayersListItem ({ player }) {
  return (
    <div
      className='flex flex-col items-center justify-center gap-4 border-2 border-gray-200 rounded-lg p-2 lg:max-w-52 hover:border-gray-400 cursor-pointer transition-all duration-300'
    >
      <h4 className='font-semibold text-lg'>{player?.name}</h4>
      <p>{player?.biography?.substring(0, 50)}...</p>
    </div>
  )
}

function PlayersList ({ players }) {
  if (!players || players.length < 1) return <h4>No data...</h4>

  return (
    <>
      <h3 className='font-semibold text-2xl'>Mes personnages</h3>
      <div className='w-full flex flex-row gap-4 flex-wrap'>
        {
          players?.map(player => (
            <PlayersListItem key={player.id} player={player} />
          ))
        }
      </div>
    </>
  )
}

export default PlayersList
