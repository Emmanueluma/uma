import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_moa3fqu', 'template_gg0jlzs', form.current, 'Ajo0VTLZ9-D-IaNDl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    const conRef = useRef();
    const conRef1 = useRef();
    const conRef2 = useRef();
    const conRef3 = useRef();
    const [conVisible, setConVisible] = useState(false);
    const [conVisible1, setConVisible1] = useState(false);
    const [conVisible2, setConVisible2] = useState(false);
    const [conVisible3, setConVisible3] = useState(false);

    console.log(conVisible,conVisible1,conVisible2,conVisible3)
    useEffect(() => {
        const conOption = {
            threshold: 0.5
        }
        const conOption2 = {
            threshold: 0.3
        }
        
        const conObserver = new IntersectionObserver((entry, conObserver)=> {
            if(entry[0].isIntersecting === true){
                setConVisible(entry[0].isIntersecting);
                conObserver.unobserve(conRef.current)
            }
        }, conOption)
        conObserver.observe(conRef.current)

        const conObserver1 = new IntersectionObserver((entry, conObserver1)=> {
            if(entry[0].isIntersecting === true){
                setConVisible1(entry[0].isIntersecting);
                conObserver1.unobserve(conRef1.current)
            }
        }, conOption)
        conObserver1.observe(conRef1.current)

        const conObserver2 = new IntersectionObserver((entry, conObserver2)=> {
            if(entry[0].isIntersecting === true){
                setConVisible2(entry[0].isIntersecting);
                conObserver2.unobserve(conRef2.current)
            }
        }, conOption)
        conObserver2.observe(conRef2.current)

        const conObserver3 = new IntersectionObserver((entry, conObserver3)=> {
            if(entry[0].isIntersecting === true){
                setConVisible3(entry[0].isIntersecting);
                conObserver3.unobserve(conRef3.current)
            }
        }, conOption)
        conObserver3.observe(conRef3.current)


    },[])
    return ( 
        <section id="contact" className="container contact">
        <h3>get in touch</h3>
        <h2>contact me</h2>
        <div className="flex-container">
            <div className="flex-item one ">
                <article ref={conRef} className={conVisible ? `intersec active` : `intersec` }>
                    <MdOutlineEmail className="icons" />
                    <h3>email</h3>
                    <h4>umaemmanuel62@gmail.com</h4>
                    <a href="mailto:umaemmanuel62@gmail.com" target="_blank" rel="noopener noreferrer">send a message</a>
                </article>
                <article ref={conRef1} className={conVisible ? `intersec active` : `intersec` }>
                    <RiMessengerLine className="icons" />
                    <h3>messenger</h3>
                    <h4>nicki scott</h4>
                    <a href="http://m.me/100076048962580/" target="_blank" rel="noopener noreferrer">send a message</a>
                </article>
                <article ref={conRef2} className={conVisible ? `intersec active` : `intersec` }>
                    <BsWhatsapp className="icons" />
                    <h3>whatsapp</h3>
                    <h4>+2349125246051</h4>
                    <a href="https://api.whatsapp.com/send?phone=9125246051" target="_blank" rel="noopener noreferrer">send a message</a>
                    </article>
            </div>
            <div ref={conRef3} className={conVisible ? `flex-item two intersec active` : `flex-item two intersec` }>
                <form ref={form} onSubmit={sendEmail}>
                    <input 
                        type="text" 
                        placeholder='your full name'
                        name='name'
                    />
                    <input 
                        type="email" 
                        placeholder='your email'
                        name='email'
                        />
                    <textarea
                        rows="7"
                        placeholder='your message'
                        name='message'
                    />
                    <button className='btn--primary'>send message</button>
                </form>
            </div>
        </div>
        </section>
    );
}
 
export default Contact;