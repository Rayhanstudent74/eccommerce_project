import React  from "react";
import './CSS/Support.css'
import { Link } from "react-router-dom";
import help_desk from '../Components/Assets/help-desk.png'
const support = () => {
    return (
       <div className="body">
       
        <header>
        <div className="container">
        <h1>Help & Support</h1>
        </div>
        </header>

         <section className="support-content">
             <div className="container">
                    <h2>How Can We Assist You ? </h2>
                    <p>If you have any question or need assistance, we're here to help! You can contact us using the following options: </p>

                    <div className="support-methods">
                        <div className="support-method">
                             <h3> Phone Support </h3>
                             <p> Call us at: <Link to="tel:+1234567890"> +8801782064867 </Link></p>
                        </div>
                            <div className="support-method">
                                <h3> Facebook Support </h3>
                                <Link to="https://www.facebook.com/starkgadgetbd/"> <h3>  Find us on facebook </h3></Link>
                        </div>

                        <div className="support-method">
                         <h3> Email Support </h3>
                         <Link to="https://www.rayhan3487@gmail.com"><p>  Send us an email </p> </Link>
                         </div>
                        
                    </div>
                     <div class="support-description">
                        <h3>Our Support Team</h3>
                        <img src={help_desk} alt="" />
                         <p>Our dedicated support team is available 24/7 to assist you with any issues or inquiries. We aim to provide timely and helpful responses to ensure your satisfaction with our services. Whether you're facing technical issues or need guidance, don't hesitate to reach out to us !</p>
                    </div>

             </div>
            </section>

        </div>
        
             
      
 

       
    )
}

export default support