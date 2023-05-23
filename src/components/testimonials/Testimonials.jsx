import './testimonials.css'
import T1 from '../../assets/t1.jpg' 
import T2 from '../../assets/t2.png' 
import T3 from '../../assets/t3.png' 
import T4 from '../../assets/t4.png' 
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation} from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import { useRef, useEffect, useState } from 'react'
    
const Testimonials = () => {
    const data =[
        {
            id:1,
            image: T1,
            name: "Chris Izhizhi Hosea",
            test: "I really appreciate your work on our website. You are great! You are very thorough. I really appreciate the way you think through the best way to accomplish what we need on our site - even things that we don't think to do!."
        },
        {
            id:2,
            image: T2,
            name: "Michael ben",
            test: "Working with Emily was a breeze. She quickly understood our requirements, and her expertise in HTML, CSS, and JavaScript delivered an intuitive and visually stunning website. Her commitment to excellence is commendable!"
        },
        {
            id:3,
            image: T3,
            name: "benjamin garvey",
            test: "emmanuel's passion for frontend development shines through in her work. Her responsive design skills ensured our website looked great across devices. Her collaborative nature and commitment to delivering quality results make her a valuable asset to any team."
        },
        {
            id:4,
            image: T4,
            name: "mary akor",
            test: "Sam's dedication to creating user-centric experiences is remarkable. Their proficiency in HTML, CSS, and JavaScript was evident in the seamless functionality and visually appealing design of our website. A reliable and talented developer!"
        },
    ]

    const textRef = useRef;
    const [textVisible, setTextVisible] = useState(false);
    useEffect(() => {
        const textOption = {
            threshold: 0.5
        }
        const textObserver = new IntersectionObserver((entry, textObserver)=> {
            if(entry[0].isIntersecting === true){
                setTextVisible(entry[0].isIntersecting);
                textObserver.unobserve(textRef.current)
            }
        }, textOption)
        textObserver.observe(textRef.current)
    },[])
    return ( 
        <section id='testimonials' className="container testimonials">
            <h3>review from clients</h3>
            <h2>Testimonials</h2>
            <div className={ textVisible ? `main active` : `main`}>
                <Swiper ref={textRef} className="swiper-container"
                    modules={[Pagination, Navigation]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true}}
                >
                    {
                        data.map(item => {
                            return(
                                <SwiperSlide className="swiper-items" key={item.id}>
                                    <div className="img-bg">
                                        <img src={item.image} alt={item.id} />
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p>{item.test}</p>
                                </SwiperSlide>   
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    );
}
 
export default Testimonials;

