import React  from "react";
import  './Hero.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import hand_icon from '../Assets/arrow-right.png'
import hero_image from '../Assets/homepicsecondery-removebg-preview.png'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={ hand_icon} alt =" "/>
                        
                    </div>
                    <p>Gadgets</p>
                    <p>for everyone</p>
                    
                </div>
                <div className="hero-latest-btn">
                    <div>Latest  Accessories </div>
                </div>
            </div>

            <div className="hero-right">
            <img src={ hero_image} alt =" "/>
            </div>
           
    
  
        </div>
    )
       
}

export default Hero