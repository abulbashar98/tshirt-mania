import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h1>Total Items Selected: {cart.length}</h1>
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => removeFromCart(tShirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;