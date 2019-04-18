import React, { Component } from 'react';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Homepage from './Pages/Homepage/Homepage';
// import AnimatedCarousel from './Components/AnimatedCarousel/AnimatedCarousel';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Brand_Ambassador from './Pages/Brand_Ambassador/Brand_Ambassador';
import Footer from './Components/Footer/Footer';
import HelpSupport from './Pages/HelpSupport/HelpSupport';
import Partners from './Pages/Partners/Partners';
import Support from './Pages/Support/Support';


// import Homepage from './Pages/Homepage/Homepage';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
      <NavBar />
      
      <Route path="/" exact render={() =>
       <Homepage />
      } />
    
      <Route path="/BrandAmbassadors" exact render={() =>
        <Brand_Ambassador />  
      } />

      <Route path="/Partners" exact render={() =>
        <Partners/>  
      } />

       <Route path="/Support" exact render={() =>
        <Support/>  
      } />

      <Footer />
      </div> 
      </Router>
    );
  }
}

export default App;
