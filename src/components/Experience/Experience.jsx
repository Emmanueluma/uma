import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience= () => {
    return ( 
        <section id="experience" className="container experience">
            <h3>what skills i have</h3>
            <h2>my experience</h2>
            <div className="flex-container">
                <div className="flex-items one">
                    <h3>frontend development</h3>
                    <div className="grid-container">
                        <article>
                            <div className='one'>
                                <BsPatchCheckFill className='patch' />
                            </div>
                            <div className='two'>
                                <h4>HTML</h4>
                                <small>experience</small>
                            </div>
                        </article>
                        <article>
                           <div className='one'>
                                <BsPatchCheckFill className='patch' />
                            </div>
                            <div className='two'>
                                <h4>CSS</h4>
                                <small>intermediate</small>
                            </div>
                        </article>
                        <article>
                            <div className='one'>
                                <BsPatchCheckFill className='patch' />
                            </div>
                            <div className='two'>
                                <h4>javaScript</h4>
                                <small>experience</small>
                            </div>
                        </article>
                        <article>
                            <div className='one'>
                                <BsPatchCheckFill className='patch' />
                            </div>
                            <div className='two'>
                                <h4>React</h4>
                                <small>intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="flex-items one">
                    <h3>backend development</h3>
                    <div className="grid-container">
                        <article>
                            <div className='one'>
                                <BsPatchCheckFill className='patch' />
                            </div>
                            <div className='two'>
                                <h4>python</h4>
                                <small>experience</small>
                            </div>
                        </article>
                        <article>
                            <div className='one'>
                                <BsPatchCheckFill className='patch' />
                            </div>
                            <div className='two'>
                                <h4>node js</h4>
                                <small>intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Experience;