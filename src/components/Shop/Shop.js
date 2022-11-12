import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // console.log('product load first before fetch',products)
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // console.log('product loaded');
            });
    }, []);

    // code ar bahera theka kono kechu load korla seta sideEffect tai useEffect ar vhetor load korta hobe
    useEffect(() => {
        // console.log('local storage first line')
        const storedCart = getStoredCart();
        const savedCart = [];
        // console.log(storedcart) // akta object pabo tar akta id and r akta value
        // object ar all properties accesss korta gale( for in ) loop chalate hobe loading data as a object
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        // console.log('local storage finished')
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        // jodi exists na kore tahole amra 
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
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
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;