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
            name: "snow joe",
            test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias quisquam obcaecati id eligendi eum officiis distinctio, aspernatur illum facilis, cum ut molestiae sed consequuntur natus nulla cupiditate pariatur rerum? Quaerat aliquam fuga totam dolor modi unde iste enim odit."
        },
        {
            id:2,
            image: T2,
            name: "aaliyah ismaila",
            test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias quisquam obcaecati id eligendi eum officiis distinctio, aspernatur illum facilis, cum ut molestiae sed consequuntur natus nulla cupiditate pariatur rerum? Quaerat aliquam fuga totam dolor modi unde iste enim odit."
        },
        {
            id:3,
            image: T3,
            name: "benjamin garvey",
            test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias quisquam obcaecati id eligendi eum officiis distinctio, aspernatur illum facilis, cum ut molestiae sed consequuntur natus nulla cupiditate pariatur rerum? Quaerat aliquam fuga totam dolor modi unde iste enim odit."
        },
        {
            id:4,
            image: T4,
            name: "mary akor",
            test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias quisquam obcaecati id eligendi eum officiis distinctio, aspernatur illum facilis, cum ut molestiae sed consequuntur natus nulla cupiditate pariatur rerum? Quaerat aliquam fuga totam dolor modi unde iste enim odit."
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
    console.log(textVisible)
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

