import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <a href="#"><img src={logo} alt="ema-john Logo" /></a>
            <div>
                <a href="/">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/login">login</a>
            </div>
        </nav>
    );
};

export default Header;