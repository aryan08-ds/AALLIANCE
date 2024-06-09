import React from "react";
import ganeshjicontact from "../assets/ganeshjicontact.jpg";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div
      className="contact-us-container"
      style={{ backgroundImage: `url(${ganeshjicontact})` }}
    >
      <div className="contact-us">
        <div className="contact-form">
          <h2>SEND US AN EMAIL</h2>
          <form>
            <div className="form-row">
              <div className="form-col">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="form-col">
                <label>Your Email</label>
                <input type="email" name="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="form-row">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="Phone Number" />
            </div>
            <div className="form-row">
              <label>Your Message</label>
              <textarea name="message" placeholder="Your Message"></textarea>
            </div>
            <div className="form-row">
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="divider"></div>
        <div className="contact-info">
          <h2>CONTACT US</h2>
          <div className="contact-info-row">
            <div className="contact-info-col">
              <p>
                <i className="fas fa-phone"></i> +91 9152156360
              </p>
              <p>
                <i className="fas fa-mobile-alt"></i> Mervyn : +91 9820141447
              </p>
              <p>
                <i className="fas fa-mobile-alt"></i> Manish : +91 8691940004
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@alliance.co.in
              </p>
            </div>
            <div className="contact-info-col">
              <p>
                <i className="fas fa-map-marker-alt"></i> Vighnaharta Collection
                <br />
                A/57, Raj Industrial Complex
                <br />
                Marol Military, Road Marol
                <br />
                Andheri (East), Mumbai - 400059.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
