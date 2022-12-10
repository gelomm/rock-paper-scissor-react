import React from 'react'

const ActionDisplayTwo = ({actionTwo}) => {
return (
    <div className='display-actn-container'>
        {(actionTwo.rock === "✊") ? <h1 className='display-actn'>✊</h1> : <>{((actionTwo.paper === "🖐️") || (actionTwo.scissor === "✌️")) ? <></>: <h1 className='display-actn'>🧑🏽‍🦱</h1>}</>}
        {(actionTwo.paper === "🖐️") ? <h1 className='display-actn'>🖐️</h1> : <></>}
        {(actionTwo.scissor === "✌️") ? <h1 className='display-actn'>✌️</h1> : <></>}
    </div>
)
}

export default ActionDisplayTwo;