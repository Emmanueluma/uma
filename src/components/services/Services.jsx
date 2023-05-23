import './services.css'
import {BiCheck} from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react';
const Services = () => {
    const ServicesRef1 = useRef();
    const ServicesRef2 = useRef();
    const ServicesRef3 = useRef();
    const [visibleServices1, setVisibleServices1] = useState(false);
    const [visibleServices2, setVisibleServices2] = useState(false);
    const [visibleServices3, setVisibleServices3] = useState(false);

    useEffect(() => {
        const ServicesOption = {
            threshold: 0.3
        }
        const ServicesObserver1 = new IntersectionObserver((entry, ServicesObserver1)=> {
            if(entry[0].isIntersecting === true){
                setVisibleServices1(entry[0].isIntersecting);
                ServicesObserver1.unobserve(ServicesRef1.current)
            }
        }, ServicesOption)
        ServicesObserver1.observe(ServicesRef1.current)

        const ServicesObserver2 = new IntersectionObserver((entry, ServicesObserver2)=> {
            if(entry[0].isIntersecting === true){
                setVisibleServices2(entry[0].isIntersecting);
                ServicesObserver2.unobserve(ServicesRef2.current)
            }
        }, ServicesOption)
        ServicesObserver2.observe(ServicesRef2.current)

        const ServicesObserver3 = new IntersectionObserver((entry, ServicesObserver3)=> {
            if(entry[0].isIntersecting === true){
                setVisibleServices3(entry[0].isIntersecting);
                ServicesObserver3.unobserve(ServicesRef3.current)
            }
        }, ServicesOption)
        ServicesObserver3.observe(ServicesRef3.current)

    },[])
    return ( 
        <section id="services" className="container services">
            <h3>what i offer</h3>
            <h2>services</h2>
            <div className="grid-container">
                <article ref={ServicesRef1} className={ visibleServices1 ? "grid-items one active" : "grid-items one"}>
                    <div className="header">
                        <h4>UI/UX design</h4>
                    </div>
                    <ul>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>AI-powered User Research and Analysis.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>Personalized User Experience through AI.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>AI-driven UI Design Recommendations and Insights.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>Automated User Testing and Feedback.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>AI-generated Visual Design Solutions.</p>
                            </div>
                        </li>
                    </ul>
                </article>
                <article ref={ServicesRef2} className={ visibleServices2 ? "grid-items two extra active" : "grid-items two extra"}>
                    <div className="header">
                        <h4>web development</h4>
                    </div>
                    <ul>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>Responsive Website Design and Development.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>Development using HTML, CSS, JavaScript, React.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>Website Maintenance and Ongoing Support.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>User-friendly Interface Design with React.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>Website Optimization for Speed and SEO.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>Cross-Browser Compatibility Testing and Troubleshooting.</p>
                            </div>
                        </li>
                    </ul>
                </article>
                <article ref={ServicesRef3} className={ visibleServices3 ? "grid-items three active" : "grid-items three"}>
                    <div className="header">
                        <h4>content creation</h4>
                    </div>
                    <ul>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>AI-generated Blog and Article Writing.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>Content Curation and Recommendations with AI.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>AI-driven Social Media Content Creation.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>Automated Video and Image Creation.</p>
                            </div>
                        </li>
                        <li>
                            <div className='one'>
                                <BiCheck className='bicheck'/>
                            </div>
                            <div className='two'>
                                <p>AI-powered Copywriting and Advertisements.</p>
                            </div>
                        </li>
                    </ul>
                </article>
            </div>
        </section>    
    );
}
 
export default Services;