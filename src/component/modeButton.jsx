import React from 'react'

const ModeButton = ({text, onClick}) => {
return (
    <button className='mode-btn' onClick={onClick}>
        {text}
    </button>
)
}

export default ModeButton;