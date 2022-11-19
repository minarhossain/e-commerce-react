import {  TrashIcon } from '@heroicons/react/24/solid'
import React from 'react';
import './ReviewItems.css'
const ReviewItems = ({ product, handleRemoveItem }) => {
    console.log(product)
    const {id,name, price, quantity, img, shipping} = product;
    return (
        <div className="review-item">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>Name: { name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: {shipping}</p>

                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveItem(id)}>
                    
                        <TrashIcon className="font-size" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;