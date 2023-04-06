import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart()
        const saveCart = [];
        // ^ step : 1 get id
        for (const id in storedCart) {
            // ! step : 2 get the product using is
            const addedProduct = products.find(product => product.id === id);

            // step: 3 add quantity
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    const handlerAddToCart = (product) => {
        // const newCart = [...cart, product]
        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart =  [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart)
        addToDb(product.id)
    }

    const handlerClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handlerClearCart = {handlerClearCart}
                >
                    <Link to= '/orders'>
                        <button className='review-order-btn'>
                        <span>Review Order</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;