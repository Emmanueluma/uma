import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
    return ( 
        <section id="about" className="container about">
            <h3>get to know</h3>
            <h2>about me</h2>
            <div className="flex-container">
                <div className="flex-items one">
                    <div className="shadow"></div>
                    <div className="img-container"></div>
                </div>
                <div className="flex-items two">
                    <div className="cards">
                        <article>
                            <FaAward />
                            <h3>experience</h3>
                            <small>3+ years working</small>
                        </article>

                        <article>
                            <FiUser />
                            <h3>clients</h3>
                            <small>300+ Worldwide</small>
                        </article>

                        <article>
                            <VscFolderLibrary />
                            <h3>projects</h3>
                            <small>80+ completed</small>
                        </article>
                    </div>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam libero dolorem necessitatibus, sint aliquid obcaecati quod explicabo perspiciatis, facere tempora eveniet officiis ea corporis veritatis in, vero porro aspernatur.</p>
                    <p>
                        <a href="mailto:umaemmanuel62@gmail.com" className="btn--primary">let's talk</a>
                    </p>
                </div>
            </div>
        </section>    
    );
}
 
export default About;