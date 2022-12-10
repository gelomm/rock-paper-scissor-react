import React from 'react'
import ModeButton from './modeButton';

const PickMode = ({playerName, handlePlayerName, handleModeToComp, handleModeToPlayer}) => {
return (
    <div className='register-main-cont'>
        <h1 className='greet'>
            Hi there, <input value={playerName} onChange={handlePlayerName} className='Name' type="text" placeholder="Name Here" />
        </h1>
        <div className='choose'>
            CHOOSE GAME MODE
        </div>
        <div className='mode-btn-container'>
            <ModeButton
            onClick = {handleModeToComp}
            text = "Player vs. Computer"
            />
            <ModeButton
            onClick = {handleModeToPlayer}
            text = "Player vs. Player"
            />
        </div>
    </div>
)
}

export default PickMode;