import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import banner_image from '../Assets/Watch  Banner.png'

const Popular = () => {
  return (
    <div className=' shop-category'>
      <div className="shop-catagory-banner">
      <img src={banner_image} alt=''/>
      
      </div>
      <div className="textbanner">
      <h1>Here are the Amazing Gadgets </h1>
      </div>
      
      
      <div className="shopcatagory-product">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-8</span> out of 36 Products
        </p>
      </div>
      <div className="shopcatagory-loadmore">
        Explore More
      </div>

    </div>
  )
}

export default Popular

