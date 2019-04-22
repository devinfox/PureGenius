import React from 'react';
import {Link} from 'react-router-dom';
import SignInForm from '../../Components/SignInForm/SignInForm';
import './SignIn.css'

const SignIn = props => (
    <div className="signContainer">
    <div className="signImg">
    <div className="signInForm">
    <SignInForm />
    </div>
    </div>
    </div>
);

export default SignIn;