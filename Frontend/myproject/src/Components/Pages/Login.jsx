import React from 'react'
import './Login.css'
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if(formData.username==="Nagalakshmi"&& formData.password==="nagu123"){
      navigate("/Admin")
    }
    else{
      navigate("/userdash");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};
const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // You can submit the form data to your server or perform other actions here.
      setIsSubmitted(true);
    }
  };
const handleNavigate= () => {
    navigate("/register");
  };
  return (
    <div className='login'>
    <>
    <h2></h2>
    <div className="container-login" id="container">
      <div className="form-container sign-up-container">
       
      </div>
      <div className="form-container-login sign-in-container">
        <form action="#" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your account</span>
          <div className='input-field'>
            
            <input className='LoginInput' type='text' placeholder='Username' value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}/>
            </div>
            {errors.username && <p className="error">{errors.username}</p>}
            <div className='input-field'>
            <input className='LoginInput' type='password'   placeholder='Password' value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
          <button  className = "bollon">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp">
              <Link to ='/register'>Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </>
  
    </div>
  )
}

export default Login
