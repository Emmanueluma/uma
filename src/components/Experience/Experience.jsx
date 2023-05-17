import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { useRef, useState, useEffect } from 'react';
const Experience= () => {
    const experRef1 = useRef();
    const experRef2 = useRef();
    const [experVisible1, setExperVisible1] = useState(false);
    const [experVisible2, setExperVisible2] = useState(false);
    useEffect(() => {
        const experOption = {
            threshold: 0.3
        }
        const experObserver1 = new IntersectionObserver((entry, eperObserver1)=> {
            if(entry[0].isIntersecting === true){
                setExperVisible1(entry[0].isIntersecting);
                experObserver1.unobserve(experRef1.current)
            }
        }, experOption)
        experObserver1.observe(experRef1.current)
        const experObserver2 = new IntersectionObserver((entry, experObserver2)=> {
            if(entry[0].isIntersecting === true){
                setExperVisible2(entry[0].isIntersecting);
                experObserver2.unobserve(experRef2.current)
            }
        }, experOption)
        experObserver2.observe(experRef2.current)
    },[])
    return ( 
        <section id="experience" className="container experience">
            <h3>what skills i have</h3>
            <h2>my experience</h2>
            <div className="flex-container">
                    <div ref={experRef1} className={ experVisible1 ? `flex-items one active` : `flex-items one` }>
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
                <div ref={experRef2} className={ experVisible2 ? `flex-items two active` : `flex-items two` }>
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