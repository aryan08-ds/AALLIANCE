import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Account.css";
import ganeshji from "../assets/ganeshji.jpg";

const Signup = () => {
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleGenerateOtp = () => {
    const mobile = document.getElementById("signup-mobile").value;
    if (mobile.match(/^\d{10}$/)) {
      setOtpSent(true);
      alert("OTP sent to your mobile number!");
    } else {
      setMobileError("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const mobile = document.getElementById("signup-mobile").value;
    const password = document.getElementById("signup-password").value;
    const otpInput = document.getElementById("signup-otp").value;

    let isValid = true;

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setEmailError("Invalid email ID");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!mobile.match(/^\d{10}$/)) {
      setMobileError("The phone number should consist of 10 digits");
      isValid = false;
    } else {
      setMobileError("");
    }

    if (!password.match(/^.{6,}$/)) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!otpSent || otpInput !== "1234") {
      setOtpError("Invalid OTP. Please try again.");
      isValid = false;
    } else {
      setOtpError("");
    }

    if (isValid) {
      alert("Sign-Up successful!");
      // Handle sign-up logic here
    }
  };

  return (
    <div className="account-page">
      <div className="login-container">
        <div className="login-card">
          <img src={ganeshji} alt="Ganesh Ji" className="ganesh-img" />
          <h2>Sign Up to AALLIANCE</h2>
          <p className="description">
            Join us to bring the blessings of Ganpati Ji into your life
          </p>
          <form id="signup-form" onSubmit={handleSignupSubmit}>
            <div className="input-container">
              <label htmlFor="signup-email">Email ID</label>
              <input type="email" id="signup-email" required />
              {emailError && <p className="error-text">{emailError}</p>}
            </div>
            <div className="input-container">
              <label htmlFor="signup-mobile">Mobile Number</label>
              <input
                type="text"
                id="signup-mobile"
                pattern="\d{10}"
                title="Please enter a valid 10-digit mobile number"
                required
              />
              {mobileError && <p className="error-text">{mobileError}</p>}
            </div>
            <div className="input-container">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                pattern=".{6,}"
                title="Password must be at least 6 characters long"
                required
              />
              {passwordError && <p className="error-text">{passwordError}</p>}
            </div>
            {otpSent && (
              <div className="input-container">
                <label htmlFor="signup-otp">Enter OTP</label>
                <input
                  type="text"
                  id="signup-otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                {otpError && <p className="error-text">{otpError}</p>}
              </div>
            )}
            {!otpSent ? (
              <button
                type="button"
                className="generate-otp-button"
                onClick={handleGenerateOtp}
              >
                Generate OTP
              </button>
            ) : (
              <button type="submit" className="sign-in-button">
                SIGN UP
              </button>
            )}
          </form>
          <NavLink to="/" className="back-button">
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
