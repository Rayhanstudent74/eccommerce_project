import React from 'react'
import './Breadcrum.css'
import arrow2_icon from '../Assets/BreadcumArrow.png'        

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
       Home <img src={arrow2_icon} alt=''/>Accessories <img src={arrow2_icon} alt=''/>  {product.name}
    </div>
  )
}

export default Breadcrum 
