import React from 'react'
import {Carousel}from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//AVATARS iMPORTS

import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";
const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={true}
        autoPlay={true}
        interval={3000}
        >
            
            <>
            <img src={avatar1} alt="Jhon Doe 1"/>
            <div className="myCarousel">
            <h3>Jhon Doe 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint quas ipsam consectetur ex saepe.</p>
            </div>
            </>
            <>
            <img src={avatar2} alt="Jhon Doe 2"/>
            <div className="myCarousel">
            <h3>Jhon Doe 2</h3>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint quas ipsam consectetur ex saepe.</p>
            </div>
            </>

            <>
            <div className="myCarousel">
            <img src={avatar3} alt="Jane Doe 3"/>
            <h3>Jhon Doe 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint quas ipsam consectetur ex saepe.</p>
            </div>
            </>
            <>

            <img src={avatar4} alt="Jhon Doe 4"/>
            <div className="myCarousel">
            <h3>Jhon Doe 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint quas ipsam consectetur ex saepe.</p>
            </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
