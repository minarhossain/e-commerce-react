import React from 'react';

import './Cart.css'

const Cart = ({ cart, clearCart,children }) => {
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    // loop through array of object cart is array on cliking
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        // console.log(product)
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = parseFloat(total) + parseFloat(shipping) + parseFloat(tax);

    return (
        <div className="cart">
            <h3>Order Summary </h3>
            <p>Selected Items {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
            { children}
        </div>
    );
};

export default Cart;