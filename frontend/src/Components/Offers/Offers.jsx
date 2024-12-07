import React from 'react'
import './Offers.css'
import exclusive from '../Assets/Homeimage.jpg'


const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Gadgets for you</h1>
        <p>ONLY ON BEST ORIGINAL PRODUCTS</p>
        <button> Check now </button>
        </div>
        <div className="offers-right">
        <img src={exclusive} alt=''/>
        </div>
    </div>
  )
}

export default Offers
