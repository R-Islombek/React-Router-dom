import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="navbar-container">
                    <h1>Logo</h1>
                    <ul className='navbar-list'>
                        <li className='navbar-item'><Link to={'/'} >Home</Link></li>
                        <li className='navbar-item'><Link to={'/about'} >About</Link></li>
                        <li className='navbar-item'><Link to={'/contact'} >Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
