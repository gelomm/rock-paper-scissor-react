import { useState } from 'react';

//custom components imports
import RegisterName from './firstPage/Register';
import PlayerToComp from './component/playerToComp';
import PlayerToPlayer from './component/playerToPlayer';
import Footer from './component/footer';
import PickMode from './component/pickMode';
import FinishPage from './component/finishPage';
import PlayerName from './component/playerName';

function App() {
const [action, setAction] = useState({
  rock: "",
  paper: "",
  scissor: ""
})

const [computer, setComputer] = useState({
  rock: "",
  paper: "",
  scissor: ""
})
const [isSubmit, setIsSubmit] = useState(false)
const [playerName, setPlayerName] = useState({
  Pname: ""
})

const [gameMode, setGameMode] = useState({
    playerToComp: false,
    playerToPlayer: false
})
const [winner, setWinner] = useState('')
const [scoreP2C, setScoreP2C] = useState({
  Pscore: 0,
  Cscore: 0
})

const PlayerScoreCount = () =>{ //player 1 score counter
  const newPlayerScore = {
    Pscore: scoreP2C.Pscore + 1,
    Cscore: scoreP2C.Cscore
  }
  setScoreP2C(newPlayerScore)
  CheckPlayerVic(newPlayerScore);
}

const ComputerScoreCount = () =>{
  const newComputerScore = {
    Pscore: scoreP2C.Pscore,
    Cscore: scoreP2C.Cscore + 1
  }
  setScoreP2C(newComputerScore)
  CheckPlayerVic(newComputerScore);
}

const WinnerCheck =(action, computer)=>{
  
  if(action.rock){
      if(computer.rock){
        console.log("ITS A TIE");
        setWinner("IT'S A TIE")
      }else if(computer.paper){
        console.log("PAPER WINS PLAYER 2 WIN");
        setWinner("PAPER WINS PLAYER 2 WIN")
        ComputerScoreCount();
      }else if (computer.scissor){
        console.log("ROCK WINS PLAYER 1 WIN");
        setWinner("ROCK WINS PLAYER 1 WIN")
        PlayerScoreCount();
      }
  }
  else if(action.paper){
    if(computer.rock){
      console.log("PAPER WINS PLAYER 1 WIN");
      setWinner("PAPER WINS PLAYER 1 WIN")
      PlayerScoreCount();
    }else if(computer.paper){
      console.log("TIE");
      setWinner("IT'S A TIE")
    }else if (computer.scissor){
      console.log("SCISSORS WINS PLAYER 2 WIN");
      setWinner("SCISSORS WINS PLAYER 2 WIN")
      ComputerScoreCount();
    }
  }
  else if(action.scissor){
    if (computer.rock) {
      console.log("ROCK WINS PLAYER 2 WIN");
      setWinner("ROCK WINS PLAYER 2 WIN")
      ComputerScoreCount();
    }else if(computer.paper){
      console.log("SCISSOR WINS PLAYER 1 WIN");
      setWinner("SCISSORS WINS PLAYER 1 WIN")
      PlayerScoreCount();
    }else if(computer.scissor){
      console.log("ITS A TIE");
      setWinner("IT'S A TIE")
    }
  }
  console.log("score", scoreP2C);

}

const ComputerChoice =()=>{ //Random number from 1 to 3
  const value = (((Math.random()*2)+1).toFixed(0))
  console.log("random val",value);

  if (value == 1) {
    const newComp = {
      rock: computer.rock = "✊",
      paper: computer.paper = "",
      scissor: computer.scissor = ""
    }
    setComputer(newComp)
    console.log("Computer", newComp);
  } else if(value == 2){
    const newComp = {
      rock: computer.rock = "",
      paper: computer.paper = "🖐️",
      scissor: computer.scissor = ""
    }
    setComputer(newComp)
    console.log("Computer", newComp);
  }else if(value == 3){
    const newComp = {
      rock: computer.rock = "",
      paper: computer.paper = "",
      scissor: computer.scissor = "✌️"
    }
    setComputer(newComp)
    console.log("Computer", newComp);
  }
}

  const HandleRock = () => {
    const newAct = {
      rock: action.rock = "✊",
      paper: action.paper = "",
      scissor: action.scissor = ""
    }
    setAction(newAct)
    console.log("player",newAct)
    // ComputerChoice()
    const computerAction = ComputerChoice();
    // WinnerCheck(action, computerAction)
    console.log("winner check ",WinnerCheck(action, computer));
  }

  const HandlePaper = () => {
    const newAct = {
      rock: action.rock = "",
      paper: action.paper = "🖐️",
      scissor: action.scissor = ""
    }
    setAction(newAct)
    console.log("player",newAct)
    // ComputerChoice()
    const computerAction = ComputerChoice();
    console.log("winner check ",WinnerCheck(action, computer));
  }

  const HandleScissor = () => {
    const newAct = {
      rock: action.rock = "",
      paper: action.paper = "",
      scissor: action.scissor = "✌️"
    }
    setAction(newAct)
    console.log("player",newAct)
    // ComputerChoice()
    const computerAction = ComputerChoice();
    console.log("winner check ",WinnerCheck(action, computer));
  }

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmit(true)
}
const handlePlayerName = (e) =>{
  setPlayerName(e.target.value)
  const Nam = {
    Pname: playerName.Pname = e.target.value
  }
  setPlayerName(Nam)
}
const handleModeToComp = e =>{
  e.preventDefault();
  const newMode = {
    playerToComp: gameMode.playerToComp = true,
    playerToPlayer: gameMode.playerToPlayer = false
  }
  const setScoreZero = {
    Pscore: scoreP2C.Pscore =0,
    Cscore: scoreP2C.Cscore =0
  }
  setScoreP2C(setScoreZero)
  setGameMode(newMode)
  setIsDone(false)
  console.log("mode", gameMode);
}
const handleModeToPlayer = e =>{
  e.preventDefault();
  const newMode = {
    playerToPlayer: gameMode.playerToPlayer = true,
    playerToComp: gameMode.playerToComp = false
  }

  setGameMode(newMode)
  setIsDone(false)
  console.log("mode", gameMode);
}
const [isDone, setIsDone] = useState(false)
const [Victor, setVictor] = useState("")

const CheckPlayerVic =(scoreP2C)=>{
  if (scoreP2C.Pscore === 5) {
    
    setVictor("Player I")
    setIsDone(true)
    
    
  }else if(scoreP2C.Cscore === 5){
    setVictor("Player II")
    setIsDone(true)
    
  }
  console.log(isDone);
}

return (
  <>
  {(isSubmit) ?//first page
  <>
      {(gameMode.playerToComp) ? //second page
      <>
        
        <PlayerToComp
        handleModeToComp = {handleModeToComp}
        handleModeToPlayer = {handleModeToPlayer}
        victor = {Victor}
        isDone = {isDone}
        playerScore = {scoreP2C.Pscore}
        compScore = {scoreP2C.Cscore}
        p2cWinner = {winner}
        playerName = {playerName.Pname}
        action = {action}
        computer = {computer}
        HandleRock = {HandleRock}
        HandlePaper = {HandlePaper}
        HandleScissor = {HandleScissor}
        />

      </> 
      :
      <>

          {(gameMode.playerToPlayer) ? 
          <>
              <PlayerToPlayer
              isDone = {isDone}
              gameMode = {gameMode}
              handleModeToComp = {handleModeToComp}
              handleModeToPlayer = {handleModeToPlayer}
              playerName = {playerName.Pname}
              action = {action}
              HandleRock = {HandleRock}
              HandlePaper = {HandlePaper}
              HandleScissor = {HandleScissor}
            />
          </> 
          : 
          <>
        <PickMode
        handleModeToComp = {handleModeToComp}
        handleModeToPlayer = {handleModeToPlayer}
        playerName = {playerName.Pname}
        handlePlayerName = {handlePlayerName} />
          </>
        }

      </>
      }
  </>
    :
    <>
      <RegisterName
      handleSubmit= {handleSubmit}
      />
    </>
  }
    <Footer/>
  </>
  );
}

export default App;

// start page - choose p2p or AI
// game
// after game redirect to start page

//game feats
  //round counter
  //score counter (upto 5)

