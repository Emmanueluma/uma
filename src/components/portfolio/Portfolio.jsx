import './portfolio.css'
import IMG1 from '../../assets/P1.jpg'
import IMG2 from '../../assets/P2.jpg'
import IMG3 from '../../assets/P3.jpg'
import IMG4 from '../../assets/P4.jpg'
import IMG5 from '../../assets/P5.jpg'
import IMG6 from '../../assets/P6.jpg'
import Template from '../usable/Template'
import { useEffect, useRef, useState } from 'react'
const Portfolio = () => {
    const data = [
        {
            id:1,
            image: IMG1,
            title: 'scott travelvile: Discover the World\'s Wonders Together',
            github: 'https://github.com/Emmanueluma/tour/',
            demo: 'https://scotttravelvile.pages.dev/'
        },
        {
            id:2,
            image: IMG2,
            title: 'scott me-time: Serenity in Adventurous Getaways',
            github: 'https://github.com/Emmanueluma/meTime',
            demo: 'https://scottmetime.pages.dev/'
        },
        {
            id:3,
            image: IMG3,
            title: 'scott grocoMarket: Savory Delights Delivered to Your Doorstep',
            github: 'https://github.com/Emmanueluma/groco',
            demo: 'https://scottgroco.pages.dev/'
        },
        {
            id:4,
            image: IMG4,
            title: 'CoffeeHaven: Your One-Stop Brew Shop Experience',
            github: 'https://github.com/Emmanueluma/coffees',
            demo: 'https://scottcoffees.pages.dev/'
        },
        {
            id:5,
            image: IMG5,
            title: 'scott FoodieReserve: Reserve Culinary Experiences with a Click',
            github: 'https://github.com/Emmanueluma/chill',
            demo: 'https://scottchill.pages.dev/'
        },
        {
            id:6,
            image: IMG6,
            title: 'the critics: Crafting Captivating Cinematic Experiences for the World',
            github: 'https://github.com/Emmanueluma/theCritics',
            demo: 'https://thecriticscompany.pages.dev/'
        }
    ]
        const newData = data.map(item => {
            return(
                <Template 
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