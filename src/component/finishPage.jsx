import React from 'react'
import ModeButton from './modeButton'

const FinishPage = ({victor,handleModeToComp,handleModeToPlayer}) => {
return (
    <div className='register-main-cont'>
        <h2 >You win <p className='victor-name'>{victor}</p></h2>
        <div className='chooseF'>
            CHOOSE GAME MODE
        </div>
        <div className="mode-btn-container">
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

export default FinishPage