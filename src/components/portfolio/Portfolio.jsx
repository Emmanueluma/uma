import './portfolio.css'
import IMG1 from '../../assets/P1.jpg'
import IMG2 from '../../assets/P2.jpg'
import IMG3 from '../../assets/P3.jpg'
import IMG4 from '../../assets/P4.jpg'
import IMG5 from '../../assets/P5.jpg'
import IMG6 from '../../assets/P6.png'
import Template from '../usable/Template'

const Portfolio = () => {

    const data = [
        {
            id:1,
            image: IMG6,
            title: 'nft portfolio: Discover, Connect, And Thrive In Our NFt Community',
            github: 'https://github.com/Emmanueluma/nftportfolio',
            demo: 'https://nftportfolio.pages.dev/'
        },
        {
            id:2,
            image: IMG2,
            title: 'scott me-time: Serenity in Adventurous Getaways',
            github: 'https://github.com/Emmanueluma/meTime',
            demo: 'https://metime.pages.dev/'
        },
        {
            id:3,
            image: IMG1,
            title: 'scott travelvile: Discover the World\'s Wonders Together',
            github: 'https://github.com/Emmanueluma/tour/',
            demo: 'https://metour.pages.dev/'
        },
        {
            id:4,
            image: IMG3,
            title: 'scott grocoMarket: Savory Delights Delivered to Your Doorstep',
            github: 'https://github.com/Emmanueluma/groco',
            demo: 'https://groco.pages.dev/'
        },
        {
            id:5,
            image: IMG4,
            title: 'CoffeeHaven: Your One-Stop Brew Shop Experience',
            github: 'https://github.com/Emmanueluma/coffees',
            demo: 'https://coffees.pages.dev/'
        },
        {
            id:6,
            image: IMG5,
            title: 'scott FoodieReserve: Reserve Culinary Experiences with a Click',
            github: 'https://github.com/Emmanueluma/chill',
            demo: 'https://mechill.pages.dev/'
        }
    ]
        const newData = data.map(item => {
            return(
                <Template 
                    ref={item.ref}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    github={item.github}
                    demo={item.demo}
                />
            )
        })
        
    return ( 
        <section id='portfolio' className="container Portfolio">
            <h3>my recent work</h3>
            <h2>Projects</h2>
            <div className="grid-container">
                {newData}
            </div>
        </section> 
    );
}
 
export default Portfolio;