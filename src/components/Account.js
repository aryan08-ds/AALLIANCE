import React from "react";
import { NavLink } from "react-router-dom";
import "./Account.css";
import ganeshji from "../assets/ganeshji.jpg";

const Account = () => {
  return (
    <div className="account-page">
      <div className="login-container">
        <div className="login-card">
          <img src={ganeshji} alt="Ganesh Ji" className="ganesh-img" />
          <h2>Welcome to AALLIANCE</h2>
          <p className="description">
            Take your first step towards bringing the blessings of Ganpati Ji
          </p>
          <form id="login-form">
            <div className="input-container">
              <label htmlFor="identifier">Email/Mobile Number</label>
              <input
                type="text"
                id="identifier"
                pattern="^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}|\d{10})$"
                title="Please enter a valid email address or 10-digit mobile number"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                pattern=".{6,}"
                title="Password must be at least 6 characters long"
                required
              />
            </div>
            <button type="button" className="sign-in-button">
              Log In
            </button>
            <p className="request-text">
              Don’t have an Account?{" "}
              <NavLink to="/signup" className="sign-up-link">
                Sign Up
              </NavLink>
            </p>
          </form>
          <NavLink to="/" className="back-button">
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Account;
