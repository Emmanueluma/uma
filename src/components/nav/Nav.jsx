import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    const [toggle, setToggle] = useState('#home');
    return ( 
        <nav >
            <a href="#home" onClick={e => {setToggle('#home')}} className={ toggle === '#home' ? 'active' : ''}> <AiOutlineHome /> </a>
            <a href="#about" onClick={e => {setToggle('#about')}} className={ toggle === '#about' ? 'active' : ''}> <AiOutlineUser /> </a>
            <a href="#experience" onClick={e => {setToggle('#experience')}} className={ toggle === '#experience' ? 'active' : ''}> <BiBook /> </a>
            <a href="#services" onClick={e => {setToggle('#services')}} className={ toggle === '#services' ? 'active' : ''}> <RiServiceLine /> </a>
            <a href="#contact" onClick={e => {setToggle('#contact')}} className={ toggle === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /> </a>
        </nav>
    );
}
 
export default Nav;