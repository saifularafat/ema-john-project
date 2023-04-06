import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handlerClearCart, children }) => {
    // const cart = props.cart // ? Destructuring one system
    // const {cart} = props // ! Destructuring two system

    let totalPrice = 0;
    let shippingCount = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        //    product.quantity = product.quantity || 1 ;
        // console.log(item);
        totalPrice = totalPrice + product.price * product.quantity
        shippingCount = shippingCount + product.shipping
        quantity = quantity + product.quantity
    }

    const tex = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shippingCount + tex;
    return (
        <div className='cart-style'>
            <h2>Order Summary</h2>
            <h4>Selected Items: {quantity}</h4>
            <p>Total Price : ${totalPrice}</p>
            <p>Shipping Charge: ${shippingCount}</p>
            <p>Tex: ${tex.toFixed(2)}</p>
            <h6>Grand Total: $<span className='grandTotal'>{grandTotal.toFixed(2)}</span></h6>
            <div className='btn-button-div'>
                <button onClick={handlerClearCart} className='clearCart'>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            {children}
            </div>
        </div>
    );
};

export default Cart;