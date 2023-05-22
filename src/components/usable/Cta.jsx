import cv from '../../assets/resume.pdf'
const Cta = () => {
    return ( 
        <div className="cta">
            <a href={cv} download className="dw--btn">download CV</a>
            <a href="https://api.whatsapp.com/send?phone=9125246051" target="_blank" rel="noopener noreferrer" className="btn--primary">let's talk</a>
        </div>
    );
}
 
export default Cta;