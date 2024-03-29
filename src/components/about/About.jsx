import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { useEffect, useRef, useState } from 'react'
import done from '../../assets/Done.jpeg'
const About = () => {
    const aboutRef1 = useRef();
    const aboutRef2 = useRef();
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    useEffect(() => {
        const aboutOption = {
            threshold: 0.3
        }
        const aboutObserver1 = new IntersectionObserver((entry, aboutObserver1)=> {
            if(entry[0].isIntersecting === true){
                setVisible1(entry[0].isIntersecting);
                aboutObserver1.unobserve(aboutRef1.current)
            }
        }, aboutOption)
        aboutObserver1.observe(aboutRef1.current)

        const aboutObserver2 = new IntersectionObserver((entry, aboutObserver2)=> {
            if(entry[0].isIntersecting === true){
                setVisible2(entry[0].isIntersecting);
                aboutObserver2.unobserve(aboutRef2.current)
            }
        }, aboutOption)
        aboutObserver2.observe(aboutRef2.current)
    },[])
    return ( 
        <section id="about" className="container about">
            <h3>get to know</h3>
            <h2>about me</h2>
            <div className="flex-container">
                <div ref={aboutRef1} className="flex-items one" style={{transform: visible1 && 'translateY(0px)', opacity: visible1 && "1"}}>
                    <div className="shadow"></div>
                    <div className="img-container">
                        <img src={done} alt="me" />
                    </div>
                </div>
                <div ref={aboutRef2}  className="flex-items two" style={{transform: visible2 && 'translateY(0px)', opacity: visible2 && "1"}}>
                    <div className="cards">
                        <article>
                            <FaAward />
                            <h3>experience</h3>
                            <small>1+ years working</small>
                        </article>

                        <article>
                            <FiUser />
                            <h3>clients</h3>
                            <small>10+ Worldwide</small>
                        </article>

                        <article>
                            <VscFolderLibrary />
                            <h3>projects</h3>
                            <small>40+ completed</small>
                        </article>
                    </div>
                    <p className='text'>
                        Passionate junior frontend developer proficient in HTML, CSS, JavaScript, and React. 
                        Committed to crafting captivating user experiences, I thrive on transforming ideas into
                        visually stunning and interactive web applications.
                    </p>
                    <p>
                        <a href="mailto:umaemmanuel62@gmail.com" className="btn--primary">let's talk</a>
                    </p>
                </div>
            </div>
        </section>    
    );
}
 
export default About;