import React from 'react';
import {Link} from 'react-router-dom';
import SupportBanner from '../../Components/SupportBanner/SupportBanner';
import SupportText from '../../Components/SupportText/SupportText';



const Brand_Ambassador = props => (
    <div className="ambassadorContainer">

    <div className="banner">
    <SupportBanner/>
    </div>

    <div className="support-text">
    <SupportText />
    </div>
    
    <div className="topContainer">
    <div className="text">
    </div>



    </div>
    </div>
);

export default Brand_Ambassador;