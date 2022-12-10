import React from 'react'

const PlayerName = ({playerName, playerTwo}) => {
return (
<div className='player-name-cont'>
    <div className='player-one'>
        <p className='player-num'>Player 1</p>
        <h3 className='player'>{playerName}</h3>
    </div>
    <div className='player-two'>
        <p className='player-num'>Player 2</p>
        <h3 className='player'>{playerTwo}</h3>
    </div>

</div>
)
}

export default PlayerName;