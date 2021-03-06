import React, { Component } from 'react';
import './BrandAmbassadorBanner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'react-bootstrap';

const BrandAmbassadorBanner = props => (

<div className="homepageCarousel">

<Carousel className="desktop" showArrows={false} showStatus={false} dynamicHeight={true} showIndicators={false} showThumbs={false}>
  <div>
    <img src="https://i.imgur.com/hrmMYRh.jpg" />
  </div>
  
</Carousel>
<Carousel className="mobile" showArrows={false} showStatus={false} dynamicHeight={true} showIndicators={false} showThumbs={false}>
<div className="mobile">
  <img src="https://i.imgur.com/MHOw13b.jpg" />
  </div>
</Carousel>

</div>

)

export default BrandAmbassadorBanner;








// import {Carousel} from 'react-bootstrap';
// import Slider from 'react-animated-slider';

// class BrandAmbassadorBanner extends React.Component {
//     constructor(props, context) {
//       super(props, context);
  
//       this.handleSelect = this.handleSelect.bind(this);
  
//       this.state = {
//         index: 0,
//         direction: null
//       };
//     }
  
//     handleSelect(selectedIndex, e) {
      
//       this.setState({
//         index: selectedIndex,
//         direction: e.direction
//       });
//     }
  
//     render() {
//       const { index, direction } = this.state;
  
//       return (
    
//         <div className="carouselContainer">
//         <Carousel arrows={false} >
       
//         <img className="mobile" 
//         src="https://i.imgur.com/rEn0iJ0.jpg"></img>
        
//         <img className="mobile" src="https://i.imgur.com/TSO42Gk.jpg"></img>
        
//         </Carousel>
//         </div>

       
        
//       );

     
//     }
//   }
  
//   export default BrandAmbassadorBanner;
  
