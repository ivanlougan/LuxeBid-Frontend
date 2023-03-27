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
              <div className='detailBoxes'><input className='EmailBox' placeholder='Email'></input>
            </div>

           <div className='ContactBoxes'>
              <h2 className='ContactBoxes'>Shipping Address</h2>
           <div className='NameBoxes'> <input id='inputBox' placeholder='First name'></input>
              <input id='inputBox' placeholder='Last name'></input></div>
              <input id='inputBox' placeholder='Address name'></input>
              <input id='inputBox' placeholder='Post code'></input>
           </div>

              <h2>Pay below</h2>
              <h4>Total: £{basket}</h4>
              <div><button className='PayButton'>Pay now</button></div>
           </div></div>
           
           )
    }

export default Checkout;