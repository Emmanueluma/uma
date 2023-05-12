import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import React, { useRef } from 'react';
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

    return ( 
        <section id="contact" className="container contact">
        <h3>get in touch</h3>
        <h2>contact me</h2>
        <div className="flex-container">
            <div className="flex-item one">
                <article>
                    <MdOutlineEmail className="icons" />
                    <h3>email</h3>
                    <h4>umaemmanuel62@gmail.com</h4>
                    <a href="mailto:umaemmanuel62@gmail.com" target="_blank" rel="noopener noreferrer">send a message</a>
                </article>
                <article>
                    <RiMessengerLine className="icons" />
                    <h3>messenger</h3>
                    <h4>nicki scott</h4>
                    <a href="http://m.me/100076048962580/" target="_blank" rel="noopener noreferrer">send a message</a>
                    </article>
                <article>
                    <BsWhatsapp className="icons" />
                    <h3>whatsapp</h3>
                    <h4>+2349125246051</h4>
                    <a href="https://api.whatsapp.com/send?phone=9125246051" target="_blank" rel="noopener noreferrer">send a message</a>
                    </article>
            </div>
            <div className="flex-item two">
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