import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const { products, initialCart } = useLoaderData(); // object destructuring kore use korta hobe
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className="shop-container">
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}

                    ></ReviewItems>)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to='/'>Shop more</Link> </h2>
                }
            </div>
            <div style={{ backgroundColor: 'orange' }} className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'>
                    <button >Proceed Shipping</button>
                    </Link>


                </Cart>
            </div>
        </div>
    );
};

export default Orders;