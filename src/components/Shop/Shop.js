import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        // cart.push
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className="shop-container yes">
            <div className="products-container">
                {
                    products.map(product => <Product

                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }

            </div>
            <div className="cart-container yes2">
                <h3>Order Summary </h3>
                <p>Selected Items {cart.length}</p>
                
            </div>
        </div>
    );
};

export default Shop;