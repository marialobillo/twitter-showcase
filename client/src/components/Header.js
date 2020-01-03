import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
            <Link to="/home" className="navbar-brand">
                Twitter Showcase
            </Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink
                        to="/home"
                        className="nav-link"
                        activeClassName="active"
                    >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/search"
                        className="nav-link"
                        activeClassName="active"
                    >Search</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/random"
                        className="nav-link"
                        activeClassName="active"
                    >Random</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;