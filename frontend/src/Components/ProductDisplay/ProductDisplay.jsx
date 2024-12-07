import React, { useContext } from 'react'
import '../ProductDisplay/ProductDisplay.css'
import star_icon from "../Assets/star.png"
import star_dull from '../Assets/star-dull.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props;

    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="product-display-left">
       

        <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
      </div>
      <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-start">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <br/>
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">৳{product.old_price}</div>
                    <div className="productdisplay-right-price-new">৳{product.new_price}</div>
                </div>
                <div className="productdisplay-right-discription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex rem nostrum nemo excepturi!
                   Nesciunt fugit ab aspernatur dolorem ex rem, repellendus, corporis cupiditate tenetur beatae est 
                   possimus quasi cum! Delectus quo beatae non maiores vero quam est aliquam itaque eligendi quas sed 
                   modi, enim, reprehenderit, officia sint obcaecati culpa!
                </div>
                <div className="productdisplaly-right-color">

                  <h1>Select Color </h1>
                  <div className="productdisplay-right-colors">
                    <div>Black</div>
                    <div>White</div>
                    <div>Multicolor</div>
                  </div>
                  
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART </button>
                
      </div>
    </div>
  )
}

export default ProductDisplay