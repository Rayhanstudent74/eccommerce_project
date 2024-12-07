import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import facebook_icon from '../Assets/facebook icon.png'
import whatsapp from '../Assets/whatsapp.png'
import phone_icon from '../Assets/phone-call.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
    <img src={footer_logo} alt=""/>
    <p>Stark Gadget BD</p>
      </div>
    <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li> About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={facebook_icon} alt=''/>
        </div>

        <div className="footer-icons-container">
            <img src={whatsapp} alt=''/>
        </div>

        <div className="footer-icons-container">
            <img src={phone_icon} alt=''/>
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
    </div>

    </div>
  )
}

export default Footer
