import React from 'react'

const ActionDisplay = ({action}) => {
return (
    <div className='display-actn-container'>
        {(action.rock === "✊") ? <h1 className='display-actn'>✊</h1> : <>{((action.paper === "🖐️") || (action.scissor === "✌️")) ? <></>: <h1 className='display-actn'>🧑🏻‍🦰</h1>}</>}
        {(action.paper === "🖐️") ? <h1 className='display-actn'>🖐️</h1> : <></>}
        {(action.scissor === "✌️") ? <h1 className='display-actn'>✌️</h1> : <></>}
    </div>
)
}

export default ActionDisplay;