import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeFromCart }) => {

    // Notes: in Readme.md
    // 1. Element variable
    let command;
    if (cart.length === 0) {
        command = <p>Nothing added to your Cart</p>
    }
    else if (cart.length === 1) {
        command = <h2>Add more</h2>
    }
    else if (cart.length > 1 && cart.length < 4) {
        command = <h2>Keep ADDing</h2>
    }
    else if (cart.length === 4) {
        command = <div>
            <button className='cyan'>Clear Cart</button>
        </div>
    }





    return (
        <div>
            <h1>Total Items Selected: {cart.length}</h1>
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => removeFromCart(tShirt)}>X</button>
                </p>)
            }
            {command}


            {cart.length === 4 ? <div>
                <button className='cyan'>Review Order</button>
                <p>Review Button Using Ternary Operator</p>
            </div> : ''}


            {cart.length === 3 && <div className='orange'>
                <h1>Gift pack for 3</h1>
                <h4>Using (&&) shorthand..</h4>
            </div>}

            {cart.length === 0 || <h3 className='orange'>Wohoo!!! Picked one!!! (|| shorthand)</h3>}

        </div>
    );
};

export default Cart;