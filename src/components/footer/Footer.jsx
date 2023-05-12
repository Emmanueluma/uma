import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
    return ( 
        <footer>
            <h2>emmanuel uma</h2>

            <ul>
                <a href="#home" >home</a>
                <a href="#about">about</a>
                <a href="#experience" >experience</a>
                <a href="#services" >services</a>
                <a href="#portfolio" >portfolio</a>
                <a href="#testimonials" >testimonials</a>
                <a href="#contact" >contact</a>
            </ul>
            <div className="icons">
                <a href="http://m.me/100076048962580/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/nicki_scott001/" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                <a href="https://twitter.com/Nicki_scott0" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
            </div>
            <small>&#169; emmanuel uma. all right reserved</small>
        </footer>
     );
}
 
export default Footer;