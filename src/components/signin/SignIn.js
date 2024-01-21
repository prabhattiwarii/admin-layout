import React, {useState} from "react";
import "./SignIn.css";
import {appleIcon,carbonIcon,gitIcon,linkdinIcon,twiterIcon} from "../../helpers/Icon";
import {hasValidationError,validationError,focusOnFeild} from "../../helpers/frontend";
import GoogleLogin from 'react-google-login';
import AppleLogin from 'react-apple-login';

const SignIn = () => {
    const [form,setForm] = useState({email:"",password:""});
    const [errors,setErrors] = useState([])
    const handleChange = (e) => {
        setForm({...form,[e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newError = {};
        let positionFocus = "";
         // eslint-disable-next-line
        const emailRE = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        if(!form.email || !form.email.trim()){
            newError["email"] = "Required";
            positionFocus = positionFocus || "email";
        }else if(form.email && form.email.length > 50){
            newError["email"] = "Maximum 50 characters allowed";
            positionFocus = positionFocus || "email";
        }else if(form.email && !emailRE.test(form.email)){
            newError["email"] = "Enter a valid email";
            positionFocus = positionFocus || "email";
        }
        if(!form.password || !form.password.trim()){
            newError["password"] = "Required";
            positionFocus = positionFocus || "password";
        }else if (!form.password || form.password.trim().length < 8) {
            newError["password"] = "Password must be at least 8 characters";
            positionFocus = positionFocus || "password";
        }else if (!/[A-Z]/.test(form.password)) {
            newError["password"] = "Password must contain at least one uppercase letter";
            positionFocus = positionFocus || "password";
        }else if (!/\d/.test(form.password)) {
            newError["password"] = "Password must contain at least one number";
            positionFocus = positionFocus || "password";
        }
        setErrors(newError);
        if(positionFocus){
            focusOnFeild(positionFocus);
            return false;
        }
        window.location = "/admin/dashboard"
        return true;
    }
    const responseGoogle = (response) => {
        // Handle Google login response
        console.log(response);
      };
    
      const responseApple = (response) => {
        // Handle Apple login response
        console.log(response);
      };

    const CustomAppleButton = ({ onClick }) => (
        <div className="apple" onClick={onClick}>
            <span className="icon">{appleIcon({ width: 16, height: 16 })}</span>
            <div className="text">Sign in with Apple</div>
        </div>
    );
    
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
                <div className="account-wrap">
                    <div className="app">
                    <GoogleLogin
                        clientId="your-google-id"
                        buttonText="Sign in with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    </div>
                    <AppleLogin
                        clientId="your-apple-id"
                        redirectURI="your-apple-redirect-uri"
                        onSuccess={responseApple}
                        onFailure={responseApple}
                        render={(props) => (
                        <CustomAppleButton onClick={props.onClick} />
                        )}
                    />
                </div>
                <form action="" onSubmit={handleSubmit} className="form-wrap" autoComplete="off">
                    <div className="field-group">
                        <label htmlFor="email" className="label">Email address</label>
                        <input type="text" name="email" id="email" placeholder="Enter Email Address" className={`input ${(hasValidationError(errors,"email") ? "input-error" : "")}`} value={form.email} onChange={handleChange}/>
                        {hasValidationError(errors,"email") ? (<span className="error">{validationError(errors,"email")}</span>) : null}
                    </div>
                    <div className="field-group">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" className={`input ${(hasValidationError(errors,"password") ? "input-error" : "")}`} value={form.password} onChange={handleChange} maxLength={20}/>
                        {hasValidationError(errors,"password") ? (<span className="error">{validationError(errors,"password")}</span>) : null}
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