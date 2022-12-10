
const ComputerPlayer = ({computer}) =>{

return(

    <div className="display-comp-actn-container">
        {(computer.rock === "✊") ? <h1 className='display-comp-actn'>✊</h1> : <>{((computer.paper === "🖐️") || (computer.scissor === "✌️")) ? <></>: <h1 className='display-actn'>🤖</h1>}</>}
        {(computer.paper === "🖐️") ? <h1 className='display-comp-actn'>🖐️</h1> : <></>}
        {(computer.scissor === "✌️") ? <h1 className='display-comp-actn'>✌️</h1> : <></>}
    </div>

)
}

export default ComputerPlayer;