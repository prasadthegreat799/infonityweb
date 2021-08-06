import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';

function Login() {
    return (
        <div className="login">

            <div className="loginLeft__container">

                    <img src="https://t4.ftcdn.net/jpg/03/61/52/11/360_F_361521131_tvclR3GrsVQBFVsUe1EPNFgH2MWIN1w7.jpg" alt="logo" />

                    <h4>Welcome To Our Company</h4>

            </div>
            <div className="loginRight__contianer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Information.svg/1200px-Information.svg.png" alt="companyLogo"/>
                    <h2>InfoSNity</h2>
                    <p>Smart Information Sharing Software</p>

                    <Button className="GoogleLoginBtn">Signin To InfoSNity</Button>
        
            </div>

        </div>
    )
}

export default Login
