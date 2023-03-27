import { useState, useEffect } from 'react';
import "./checkout.css";

const Checkout = ({basket}) => {
    //States?

    useEffect(() => {

    }, [])


    return (
        <div className="checkout-container">
            <h1 id='title'>Your Items</h1>
           <div className='checkoutBox'>

            <h2>Contact Information</h2>
            <div className='detailBoxes'><input placeholder='Email'></input>
            </div>

           <div className='ContactBoxes'>
            <input id='inputBox' placeholder='First name'></input>
           <input id='inputBox' placeholder='Last name'></input>
           <input placeholder='Address name'></input>
           <input placeholder='Post code'></input>
           
           </div>

            <h2>Pay below</h2>
            <h4>Total: £{basket}</h4>
            <div><button>Pay now</button></div>
            </div>





            
        </div>
    )
};

export default Checkout;