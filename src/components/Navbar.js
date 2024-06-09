import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const state = useSelector((state) => state.handleCart);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavbarOpen(false); // Collapse navbar on route change
  }, [location]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm custom-navbar">
      <div className="container">
        <img src={logo} alt="logo" className="logo__nav" />
        <input
          type="checkbox"
          id="label-check"
          className="label-check"
          onClick={toggleNavbar}
          checked={navbarOpen}
        />
        <label htmlFor="label-check" className="hamburger-label">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </label>
        <div
          className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active nav-item-custom"
                to="/"
                onClick={toggleNavbar}
                style={{ color: "black" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link nav-item-custom"
                to="/products"
                onClick={toggleNavbar}
                style={{ color: "black" }}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link nav-item-custom"
                to="/about"
                onClick={toggleNavbar}
                style={{ color: "black" }}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link nav-item-custom"
                to="/contact"
                onClick={toggleNavbar}
                style={{ color: "black" }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="buttons__login">
            <NavLink
              to="/account"
              className="btn btn-outline-dark custom-btn"
              onClick={toggleNavbar}
              style={{ backgroundColor: "#800000", color: "white" }}
            >
              <i className="fas fa-user"></i> Account
            </NavLink>
            <NavLink
              to="/orders"
              className="btn btn-outline-dark custom-btn"
              onClick={toggleNavbar}
              style={{
                backgroundColor: "#800000",
                color: "white",
                marginLeft: "10px",
              }}
            >
              <i className="fas fa-box"></i> Your Orders
            </NavLink>
            <NavLink
              to="/cart"
              className="btn btn-outline-dark custom-btn"
              onClick={toggleNavbar}
              style={{
                backgroundColor: "#800000",
                color: "white",
                marginLeft: "10px",
              }}
            >
              <i className="fa fa-shopping-cart"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
