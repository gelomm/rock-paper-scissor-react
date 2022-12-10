import React from 'react'
import PlayerName from './playerName';
import PlayerOne from '../playerOne/player';
import ActionDisplay from '../playerOne/actionDisplay';
import ComputerPlayer from '../computerP/compP';
import WinnerDisp from './winnerDisp';
import FinishPage from './finishPage';


const PlayerToComp = ({handleModeToComp,handleModeToPlayer,victor,isDone,playerScore, compScore,p2cWinner, playerName, action, computer, HandleRock, HandlePaper,HandleScissor}) => {
return (
    <div>
        <WinnerDisp
        playerScore={playerScore}
        compScore={compScore}
        winner = {p2cWinner}
        />
        {(isDone) ? 
        <FinishPage
        handleModeToComp = {handleModeToComp}
        handleModeToPlayer = {handleModeToPlayer}
        victor={victor}
        /> 
        :
        <div className="flex-cont">
            <div id='main-cont' className='main-cont'>
                <div className='arena'>
                <ActionDisplay
                action  = {action}/>
                
                <ComputerPlayer
                computer = {computer}
                />
                </div>
                <PlayerName
                playerName = {playerName}
                playerTwo = "Computer"
                />
                <PlayerOne 
                HandleRock = {HandleRock}
                HandlePaper = {HandlePaper}
                HandleScissor = {HandleScissor}
                /> 
            </div>
        </div>
        }
    </div>
)
}

export default PlayerToComp;