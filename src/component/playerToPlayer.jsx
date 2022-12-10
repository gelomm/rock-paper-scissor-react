import React from 'react'
import { useState } from 'react';

import PlayerName from './playerName';
import PlayerOne from '../playerOne/player';
import PlayerTwo from './playerTwo';
import ActionDisplay from '../playerOne/actionDisplay';
import ActionDisplayTwo from './actionDisplayTwo';
import WinnerDisp from './winnerDisp';
import FinishPage from './finishPage';

const PlayerToPlayer = ({gameMode,handleModeToPlayer,handleModeToComp,action, HandleRock, HandlePaper,HandleScissor}) => {

const [actionTwo, setActionTwo] = useState({
    rock: "",
    paper: "",
    scissor: ""
})
const [winnerP2P, setWinnerP2P] = useState('')
const [scoreP2P, setScoreP2P] = useState({
    Pscore: 0,
    Cscore: 0
})

const PlayerScoreCounter = () =>{ //player 1 score counter
    const newPlayer1Score = {
    Pscore: scoreP2P.Pscore + 1,
    Cscore: scoreP2P.Cscore
    }
    setScoreP2P(newPlayer1Score)
    CheckPlayerVic(newPlayer1Score)
}

const Player2ScoreCount = () =>{
    const newPlayer2Score = {
    Pscore: scoreP2P.Pscore,
    Cscore: scoreP2P.Cscore + 1
    }
    setScoreP2P(newPlayer2Score)
    CheckPlayerVic(newPlayer2Score)
}

const WinnerCheckP2P = (playerOne, playerTwo) =>{
    if(playerOne.rock){
        if(playerTwo.rock){
            console.log("ITS A TIE");
            setWinnerP2P("IT'S A TIE")
        }else if(playerTwo.paper){
            console.log("PAPER WINS PLAYER 2 WIN");
            setWinnerP2P("PAPER WINS PLAYER 2 WIN")
            Player2ScoreCount();
        }else if (playerTwo.scissor){
            console.log("ROCK WINS PLAYER 1 WIN");
            setWinnerP2P("ROCK WINS PLAYER 1 WIN")
            PlayerScoreCounter();
        }
    }
    else if(playerOne.paper){
        if(playerTwo.rock){
            console.log("PAPER WINS PLAYER 1 WIN");
            setWinnerP2P("PAPER WINS PLAYER 1 WIN")
            PlayerScoreCounter();
        }else if(playerTwo.paper){
            console.log("TIE");
            setWinnerP2P("IT'S A TIE")
        }else if (playerTwo.scissor){
            console.log("SCISSORS WINS PLAYER 2 WIN");
            setWinnerP2P("SCISSORS WINS PLAYER 2 WIN")
            Player2ScoreCount();
        }
    }
    else if(playerOne.scissor){
        if (playerTwo.rock) {
            console.log("ROCK WINS PLAYER 2 WIN");
            setWinnerP2P("ROCK WINS PLAYER 2 WIN")
            Player2ScoreCount();
        }else if(playerTwo.paper){
            console.log("SCISSOR WINS PLAYER 1 WIN");
            setWinnerP2P("SCISSORS WINS PLAYER 1 WIN")
            PlayerScoreCounter();
        }else if(playerTwo.scissor){
            console.log("ITS A TIE");
            setWinnerP2P("IT'S A TIE")
        }
    }
}


const HandleRockTwo = () => {
    const newActTwo = {
    rock: actionTwo.rock = "✊",
    paper: actionTwo.paper = "",
    scissor: actionTwo.scissor = ""
    }
    setActionTwo(newActTwo)
    console.log("player",newActTwo)
    console.log("winnerP2P check ",WinnerCheckP2P(action, actionTwo));
}

const HandlePaperTwo = () => {
    const newActTwo = {
    rock: actionTwo.rock = "",
    paper: actionTwo.paper = "🖐️",
    scissor: actionTwo.scissor = ""
    }
    setActionTwo(newActTwo)
    console.log("player",newActTwo)
    console.log("winnerP2P check ",WinnerCheckP2P(action, actionTwo));
}

const HandleScissorTwo = () => {
    const newActTwo = {
    rock: actionTwo.rock = "",
    paper: actionTwo.paper = "",
    scissor: actionTwo.scissor = "✌️"
    }
    setActionTwo(newActTwo)
    console.log("player",newActTwo)
    console.log("winnerP2P check ",WinnerCheckP2P(action, actionTwo));
}
const [isDone, setIsDone] = useState(false)
const [VictorP2P, setVictorP2P] = useState("")

const CheckPlayerVic =(scoreP2P)=>{
    if (scoreP2P.Pscore === 5) {
    
    setVictorP2P("Player I")
    setIsDone(true)
    }else if(scoreP2P.Cscore === 5){
    setVictorP2P("Player II")
    setIsDone(true)
    
    }
    console.log(isDone);
}

const handleModeToPlayerP2P =(e)=>{
    e.preventDefault();
    setIsDone(false)

    const setScoreZero = {
        Pscore: scoreP2P.Pscore =0,
        Cscore: scoreP2P.Cscore =0
    }
    setScoreP2P(setScoreZero)
}

return (
<div>
    <WinnerDisp
    playerScore = {scoreP2P.Pscore}
    compScore = {scoreP2P.Cscore}
    winner = {winnerP2P}
    />
    {(isDone) ? 
    <FinishPage
    handleModeToComp = {handleModeToComp}
    handleModeToPlayer = {handleModeToPlayerP2P}
    victor={VictorP2P}
    /> 
    :
    <div className="flex-cont">
        <div className='main-cont' id='main-cont-P2P'>
            <div className='arena'>
            <ActionDisplay
            action  = {action}/>

            <ActionDisplayTwo
            actionTwo  = {actionTwo}/>
            
            </div>
            <PlayerName
            />
            <div className='two-player-action-cont'>
                <PlayerOne 
                HandleRock = {HandleRock}
                HandlePaper = {HandlePaper}
                HandleScissor = {HandleScissor}
                /> 
                <PlayerTwo 
                HandleRockTwo = {HandleRockTwo}
                HandlePaperTwo = {HandlePaperTwo}
                HandleScissorTwo = {HandleScissorTwo}
                /> 
            </div>
        </div>
    </div>
    }
</div>
)
}

export default PlayerToPlayer;