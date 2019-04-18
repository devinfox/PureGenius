import React from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';
import ResponsiveCarousel from '../../Components/ResponsiveCarousel/ResponsiveCarousel';
import HomepageCarousel from '../../Components/HomepageCarousel/HomepageCarousel';
import AnimatedCarousel from '../../Components/AnimatedCarousel/AnimatedCarousel'
import { Provider, Heading, Subhead } from 'rebass'
import { Hero, CallToAction, ScrollDownIndicator } from 'react-landing-page'
 
const App = props => (
  <Provider>
    <Hero className="desktop" backgroundImage="https://i.imgur.com/xWD8SWc.jpg">
        <div className="container">
        <CallToAction className="desktop-bttn" href="/#" mt={3}>Get Started</CallToAction>
        </div>
        <ScrollDownIndicator/>
    </Hero>
    <Hero className="mobile" backgroundImage="https://i.imgur.com/eQ9ISrx.jpg">
        <CallToAction className="bttn" href="/#" mt={3}>Get Started</CallToAction>
        <ScrollDownIndicator/>
    </Hero>
  </Provider>
)

export default App;