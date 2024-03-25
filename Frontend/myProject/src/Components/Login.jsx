import React from 'react'
import './Login.css'
function Login() {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Page HTML CSS | Codehal</title>
    <link rel="stylesheet" href="./style.css" />
    <div className="wrapper">
      <form action="">
        <h2>Login</h2>
        <div className="input-group">
          <span className="icon">
            <ion-icon name="person" />
          </span>
          <input type="text" placeholder="Username" required="" />
        </div>
        <div className="input-group">
          <span className="icon">
            <ion-icon name="lock-closed" />
          </span>
          <input type="password" placeholder="Password" required="" />
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="sign-link">
          <p>
            Don't have an account?{" "}
            <a href="#" className="register-link">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  </>
  </div>
  )
}

export default Login