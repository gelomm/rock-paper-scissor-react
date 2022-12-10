import React from 'react'

const Footer = () => {
return (
    <footer>
        <div className='footer-content'>
            {/* <h3>Rock Paper Scissor</h3> */}
            <p>
            A project for fun, learning, and creativity.
            </p>
            <ul className='socials'>
                <li><a href="#0"><img src={require("./images/facebook.png")} alt="facebook" /></a></li>
                <li><a href="#0"><img className='git' src={require("./images/github.png")} alt="github" /></a></li>
                <li><a href="#0"><img src={require("./images/linkedin.png")} alt="linkedin" /></a></li>
            </ul>
            <div className='footer-bottom'>
                <p>
                © 2022 Angelo Mendenilla
                </p>
            </div>
            
        </div>
    </footer>
)
}

export default Footer;