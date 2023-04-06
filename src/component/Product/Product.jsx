import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, ratings } = props.product;
    const handlerAddToCart = props.handlerAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="product-img" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='price'>Price : ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Start</p>
            </div>
            <button onClick={() => handlerAddToCart(props.product)}
                className='btn-button'>Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;