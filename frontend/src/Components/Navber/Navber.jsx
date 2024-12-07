import React, { useContext, useRef, useState } from 'react'
import  './Navber.css'
import logo from '../Assets/logo.jpg' 
import cart_icon from '../Assets/cart.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown-removebg-preview.png'
const Navber = () => {

    const [menu,setMenu]= useState("home");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggole = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navber'>

           <div className="nav_logo">
                <img src={logo} alt="" />
                <p>StarkGadgetbd</p>
           </div>
            <img  className='nav-dropdown' onClick={dropdown_toggole} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick ={ () => {setMenu("home")}} > <Link  style={{textDecoration:'none'}} to='/'> Home </Link> {menu==="home"?<hr/>:<></>}</li>
                <li onClick ={ () => {setMenu("accessories")}} ><Link style={{textDecoration:'none'}} to ='/Accessories'> Accessories </Link> {menu==="accessories"?<hr/>:<></>}</li>
                <li onClick ={ () => {setMenu("Support")}} ><Link style={{textDecoration:'none'}} to = '/Support'> Help & Support </Link> {menu==="help"?<hr/>:<></>}</li>
               
                
            </ul>

              <div className="nav-login-cart">
              <Link to ='./LoginSignup'> <button >Login</button> </Link> 
                <Link to ='/Cart'> <img src={cart_icon} alt="" /> </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                 
              </div>

        </div>
    )
}

export default Navber
