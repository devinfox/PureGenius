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
    <ul style={{paddingLeft: "0px"}}>
        <li>Home</li>
        <li>Top Ambassadors</li>
        <li>Support</li>
        <li>Sign In</li>
    </ul>
    </footer>
    </div>
       
      );
    }
  }
  
  export default Footer;