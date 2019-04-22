import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = props => (
    <header className="NavBar">
        <nav className="NavBar_navigation">
            
            <div className="logo-mobile">
            <Link to='/'>
            <div className="NavBar_Logo"><img src="https://i.imgur.com/VQ0yOfi.png" /></div>
            </Link>
            </div>
            
            <div className="spacer"></div>
            <div className="NavBar_items">
                <ul>
                    <Link to ='/BrandAmbassadors'>
                    <li>Brand Ambassadors</li>
                    </Link>
                 
                    <li><a href='/support'>Help & Support</a></li>

                    <Link to ='/SignIn'>
                    <li>Sign In</li>
                    </Link>
                </ul>
            </div>
        </nav>
    </header>
);
export default NavBar;