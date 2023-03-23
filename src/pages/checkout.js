import { useState, useEffect } from 'react';

const Checkout = ({basket}) => {
    //States?

    useEffect(() => {

    }, [])


    return (
        <div className="checkout-container">
            <h1>THIS IS THE CKECKOUT PAGE</h1>
            <h4>Total: £{basket}</h4>
        </div>
    )
};

export default Checkout;