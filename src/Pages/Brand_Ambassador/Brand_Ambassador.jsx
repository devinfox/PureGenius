import React from 'react';
import {Link} from 'react-router-dom';
import './Brand_Ambassador.css';
import BrandAmbassadorBanner from '../../Components/BrandAmbassadorBanner/BrandAmbassadorBanner';
import TopAmbassador from '../../Components/TopAmbassador/TopAmbassador';
import About_Us from '../../Components/About_Us/About_Us';


const Brand_Ambassador = props => (
    <div className="ambassadorContainer">

    <div className="banner">
    <BrandAmbassadorBanner />
    </div>
    
    <div className="topContainer">
    <div className="text">
    </div>

    <TopAmbassador />

    </div>
    </div>
);

export default Brand_Ambassador;