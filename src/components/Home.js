import React from "react";
import { NavLink } from "react-router-dom";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import "./Home.css";
import "./Products.css"; // Ensure you import Products.css to apply the styles

const Home = () => {
  const products = [
    { id: 1, title: "12 Inch Idol", price: 950, size: "12 inch", image: g1 },
    { id: 2, title: "15 Inch Idol", price: 3500, size: "15 inch", image: g2 },
    { id: 3, title: "18 Inch Idol", price: 4800, size: "18 inch", image: g3 },
  ];

  return (
    <div>
      <div className="hero">
        <h1 className="hero-title">AALLIANCE</h1>
        <small className="hero-subtitle">presents</small>
        <h1 className="hero-title">THE VIGHNAHARTA COLLECTION</h1>
        <NavLink to="/products" className="button">
          Shop Now
        </NavLink>
      </div>
      <div className="products-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
