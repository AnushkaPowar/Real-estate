import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

        {/* Sign In Form */}
        {!isSignUp ? (
          <form className="auth-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="submit-btn">Sign In</button>
          </form>
        ) : (
          // Sign Up Form
          <form className="auth-form">
            <div className="input-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Enter your full name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Create a password" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
            </div>
            <button type="submit" className="submit-btn">Sign Up</button>
          </form>
        )}

        {/* Toggle Button (Always visible) */}
        <button className="toggle-btn" onClick={handleToggle}>
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
