import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './AnimatedCarousel.css';
import OwlCarousel from 'react-owl-carousel2';
import {Carousel, Button} from 'react-bootstrap';


	const options = {
		items: 1,
		nav: true,
	};

// const content = [
// 	{	
// 		firsttitle: "BECOME A MEMBER",
// 		firsttitletwo: "TO DOWNLOAD & PLAY",
// 		firsttitlethree: "ANY GAME",
// 		firstbutton: 'Download Now',
// 		image: 'https://i.imgur.com/hDfKHbh.jpg',
	
// 	},
// 	{
		
// 		secondtitle: "ANY GAME. ANYTIME. ONE CLICK AWAY.",
// 		image: 'https://i.imgur.com/NKIDl3E.jpg',
// 		secondbutton: 'Download Now'
// 	},
// ];

const AnimatedCarousel = () => (
	<div className="site-wrapper">

	<div className="site-wrapper-inner">

	  <div className="container">

		<div className="masthead clearfix">
		  <div className="container inner">
			<h3 className="masthead-brand">Cover</h3>
			<nav>
			  <ul className="nav masthead-nav">
				<li className="active"><a href="#">Home</a></li>
				<li><a href="#">Features</a></li>
				<li><a href="#">Contact</a></li>
			  </ul>
			</nav>
		  </div>
		</div>

		<div className="inner cover">
		  <h1 className="cover-heading">Cover your page.</h1>
		  <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
		  <p className="lead">
			<a href="#" className="btn btn-lg btn-default">Learn more</a>
		  </p>
		</div>

	  </div>

	</div>

  </div>
);


		// <Slider infinite="true" autoplay="5000" classNameName="slider-wrapper buttonDisabled">
		// 	{content.map((item, index) => (
		// 		<div
		// 			key={index}
		// 			classNameName="slider-content"
		// 			style={{ background: `url('${item.image}') no-repeat center center` }}
		// 		>
		// 		<div classNameName="inner">
						
		// 				<div classNameName="header-container">
						
		// 				<h1 classNameName="first-header">
		// 				{item.firsttitle}
		// 				</h1>
				
		// 				<h1 classNameName="firsttitletwo">
		// 				{item.firsttitletwo}</h1>
				
		// 				<h1 classNameName="firsttitlethree">
		// 				{item.firsttitlethree}
		// 				</h1>
						
				

		// 				<button classNameName="firstbutton">{item.firstbutton}</button>
		// 				<button classNameName="secondbutton">{item.secondbutton}</button>
		// 				</div>

					
						

		// 			</div>
					
		// 		</div>
		// 	))}
		// </Slider>