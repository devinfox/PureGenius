import React, { Component } from 'react';
import './Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'react-bootstrap';

const ReactCarousel = props => (

<div className="homepageCarousel">

<Carousel className="desktop" showArrows={false} showStatus={false} dynamicHeight={true} showIndicators={false} showThumbs={false}>
  <div>
    <img src="https://i.imgur.com/bsWZHpH.jpg" />
    <button className="legend">Start Playing</button>
  </div>
</Carousel>

<Carousel className="mobile" showArrows={false} showStatus={false} dynamicHeight={true} showIndicators={false} showThumbs={false}>
  <div>
    <img src="https://i.imgur.com/FoauCtQ.jpg" />
    <button className="legend">Start Playing</button>
  </div>
</Carousel>

</div>

)

// class Controlled_carousel extends React.Component {
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
    
//         <Carousel arrows={false} >
//         <img className="mobile" src="https://i.imgur.com/yaWrn2A.jpg"></img>
//         <img className="desktop" src="https://i.imgur.com/9X8o9Qi.jpg"></img>

//         </Carousel>
       
//       );
//     }
//   }
  
  export default ReactCarousel;
  