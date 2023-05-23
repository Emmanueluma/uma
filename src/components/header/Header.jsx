import Cta from '../usable/Cta'
import Img from '../usable/Img'
import Left from '../usable/Left'
import Right from '../usable/Right'
import './header.css'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
const Header = () => {
    return ( 
        <header id='home' >
        <div className="name">
            <h5>Hello, I'm</h5>
            <h1 >
                <span>
                    <Typewriter
                        words={['emmanuel uma', 'nicki scott','emmanuel uma']}
                        loop={3}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                    />
                </span>
            </h1>
            <h5>frontend developer</h5>
        </div>
        <Cta />
        <Img />
        <div className="rl">
            <Left />
            <Right />
        </div>
        </header>
     );
}
 
export default Header;

