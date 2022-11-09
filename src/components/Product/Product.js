import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { id, name, img, price, ratings, seller, quantity } = product;
    // console.log(product)
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p> <small> Seller:</small> {seller}</p>
                <p> <small>Price:</small>  ${price}</p>
                <p> <small>Quantity:</small>  {quantity}</p>
                <p> <small>Ratings:</small>  {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className="btn-card">Add to Cart  </button>


        </div>
    );
};

export default Product;