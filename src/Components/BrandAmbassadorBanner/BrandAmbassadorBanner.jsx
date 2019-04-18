import React, { Component } from 'react';
import './BrandAmbassadorBanner.css';
import {Carousel} from 'react-bootstrap';
import Slider from 'react-animated-slider';

class BrandAmbassadorBanner extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
    
        <div className="carouselContainer">
        <Carousel arrows={false} >
       
        <img className="mobile" 
        src="https://i.imgur.com/rEn0iJ0.jpg"></img>
        
        <img className="desktop" src="https://i.imgur.com/TSO42Gk.jpgnpm install"></img>
        
        </Carousel>
        </div>

       
        
      );

     
    }
  }
  
  export default BrandAmbassadorBanner;
  
