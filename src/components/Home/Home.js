import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {

    const [tShirts, setTShirts] = useTShirts()
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id)
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else {
            alert('already-exists')
        }
    }

    const removeFromCart = (selectedItem) => {
        const rest = cart.filter(item => item._id !== selectedItem._id)
        setCart(rest)
    }

    return (
        <div className='home-container'>
            <div className="tShirts-container">
                {
                    tShirts.map(tShirt => <TShirt
                        handleAddToCart={handleAddToCart}
                        key={tShirt._id}
                        tShirt={tShirt}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    removeFromCart={removeFromCart}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;