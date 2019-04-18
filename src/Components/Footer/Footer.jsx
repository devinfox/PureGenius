import React from 'react';
import './Footer.css';
import { withRoute } from 'react-router-dom';
import PropTypes from 'prop-types';

class Footer extends React.Component {
    
    static propTypes = {
        location: PropTypes.object.isRequired
    }
  
  
    render() {
      const { location } = this.props;
  
      return (
   
    <div className="footer-container">
    <div className="push"></div>
    <footer className={this.props.location === "/" ? 'purple' : 'white'}>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>
            Support
        </li>
        <li>Privacy Policy</li>
    </ul>
    </footer>
    </div>
       
      );
    }
  }
  
  export default Footer;