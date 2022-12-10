import React from 'react'

const WinnerDisp = ({winner, playerScore, compScore}) => {
return (
    <div className="flex-cont">
        <div className='winner-main-cont'>
            <h2>{winner || "THE WINNER IS"}</h2>
            <div className='player-score-cont'>
                
                <div className="player-score-count-cont">
                    <h1>🧑🏻‍🦰</h1>
                    <p>Player I score </p>
                    <p id='score-count'>{playerScore || 0}</p>
                </div>
                <div className="player-score-count-cont">
                <h1>🤖</h1>
                    <p>Player II score </p>
                    <p id='score-count'>{compScore || 0}</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default WinnerDisp