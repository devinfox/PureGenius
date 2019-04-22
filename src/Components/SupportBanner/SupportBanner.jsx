import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'react-bootstrap';
import './SupportBanner.css';


const SupportBanner = props => (

<div className="support-container">

<div className="homepageCarousel">

<Carousel className="desktop" showArrows={false} showStatus={false} dynamicHeight={true} showIndicators={false} showThumbs={false}>
  <div>
    <img src="https://i.imgur.com/m6BrcuB.jpg" />
    
  </div>
  
</Carousel>
<Carousel className="mobile" showArrows={false} showStatus={false} dynamicHeight={true} showIndicators={false} showThumbs={false}>
<div className="mobile">
  <img src="https://i.imgur.com/cOinhYg.jpg" />
  </div>
</Carousel>

</div>
</div>
)

export default SupportBanner;
  


  