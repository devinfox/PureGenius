import React from 'react';
import './About_Us.css';
import {Link} from 'react-router-dom';

const About_Us = props => (
    <header className="About_Us">
        <div className="content">
        <div className="about_text">
        <div className="holder">
            <h3 className="header">About Us</h3>
            <br></br>
            <p>
            We are the McCullough-Roark family. We are bringing delicious, organic, fresh stone-milled, whole grain, sourdough bread and baked goods to greater Los Angeles and the San Fernando Valley. Organic, whole grain, sourdough is great for the body because the gluten has been pre-digested and broken down by good bacteria during a long, 3-day fermentation that removes any inflammatory response by the body yet retains the fiber and protein found in the “whole grain” living seed.  The added bonus is that the same long fermentation process... </p>
            <br></br>
            <Link to='/about'>
            <div className="btn-holder">
            <button className="button">Read More</button>
            </div>
            </Link>
            </div>
        </div>
        </div>
    </header>
);
export default About_Us;