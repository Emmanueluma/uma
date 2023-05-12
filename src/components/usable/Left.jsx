import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const Left = () => {
    return ( 
        <div className='header--social'>
            <a href="https://www.linkedin.com/in/emmanuel-uma/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
            </a>
            <a href="https://github.com/Emmanueluma" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
            <a href="https://twitter.com/Nicki_scott0" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
            </a>
        </div>
     );
}
 
export default Left;