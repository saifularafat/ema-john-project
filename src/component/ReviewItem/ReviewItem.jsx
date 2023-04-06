import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({ product, handlerDeleteButton }) => {
    const {id, name, price, img, quantity ,ratings} = product
    return (
        <div className='review-content'>
            <img src= {img} alt="" />

            <div className='review-info'>
                <h6 className='title'>{name}</h6>
                <p>Price:<span className='orange'>${price}</span></p>
                <p>Quantity:<span className='orange'>{quantity}</span></p>
            </div>
            <button onClick={() => handlerDeleteButton(id)} className='delete-btn'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;