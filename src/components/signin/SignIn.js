import React from "react";
import "./SignIn.css";
import { appleIcon, carbonIcon, gitIcon, googleIcon, linkdinIcon, twiterIcon } from "../../helpers/Icon";

const SignIn = () => {
  return (
    <div className="sign-wrap">
        <div className="left-side">
            <div className="logo">Logo</div>
            <div className="text">Board.</div>
            <div className="social-icon">
                <a href="/">{gitIcon({width:28,height:28})}</a>
                <a href="/">{twiterIcon({width:28,height:28})}</a>
                <a href="/">{linkdinIcon({width:28,height:28})}</a>
                <a href="/">{carbonIcon({width:28,height:28})}</a>
            </div>
        </div>
        <div className="right-side">
            <div className="right-side-into">
                <div className="heading">Sign In</div>
                <div className="sub-heading">Sign in to your account</div>
                <div className="other-account-wrap">
                    <div className="app">
                        <span className="icon">{googleIcon({width:16,height:16})}</span>
                        <div className="text">Sign in with Google</div>
                    </div>
                    <div className="app">
                        <span className="icon">{appleIcon({width:16,height:16})}</span>
                        <div className="text">Sign in with Apple</div>
                    </div>
                </div>
                <form action="" className="form-wrap">
                    <div className="field-group">
                        <label htmlFor="email" className="label">Email address</label>
                        <input className="input" type="email" name="" id="" placeholder="Enter Email Address"/>
                    </div>
                    <div className="field-group">
                        <label htmlFor="password" className="label">Password</label>
                        <input className="input" type="password" name="" id="" placeholder="Enter Password"/>
                    </div>
                    <a href="/" className="forgot-link">Forgot password?</a>
                    <div className="btn-wrap"><button type="submit" className="btn">Sign In</button></div>
                </form>
                <div className="register">Don’t have an account? <a href="/" className="link">Register here</a></div>
            </div>
        </div>
    </div>
  )
}

export default SignIn;