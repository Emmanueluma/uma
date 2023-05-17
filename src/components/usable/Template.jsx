
const Template = ( {image, title, github, demo } ) => {
    return ( 
        <article className="portfolio-card">
            <div className="portfolio-img">
                <img src={image} alt={title} />
            </div>
            <h4>{title}</h4>
            <a href={github} download className="dw--btn">github</a>
            <a href={demo} className="btn--primary">live demo</a>
        </article>     
    );
}
 
export default Template;