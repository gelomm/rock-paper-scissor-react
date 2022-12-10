import React from 'react'

const RegisterName = ({handleSubmit}) => {


return (
    <div className='reg'>
        <div className='register-main-cont'>
            {/* <p className='Heading'>PLAY ROCK PAPER SCISSOR NOW!</p> */}
            <img className='heading' src={require("./head.png")} alt="header" srcset="" />
            <div className='input-cont' >
                <button className='play-btn' onClick={handleSubmit}>Let's Play!</button>
            </div>
        </div>
    </div>
)
}

export default RegisterName;