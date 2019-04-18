import React from 'react';
import {Link} from 'react-router-dom';
import PartnerBanner from '../../Components/PartnerBanner/PartnerBanner';
import TopAmbassador from '../../Components/TopAmbassador/TopAmbassador';
import About_Us from '../../Components/About_Us/About_Us';


const Brand_Ambassador = props => (
    <div className="ambassadorContainer">

    <div className="banner">
    <PartnerBanner />
    </div>
    
    <div className="topContainer">
    <div className="text">
    </div>

    <TopAmbassador />

    </div>
    </div>
);

export default Brand_Ambassador;