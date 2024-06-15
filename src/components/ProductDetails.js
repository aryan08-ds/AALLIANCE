import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const history = useHistory();
  const { product } = location.state;

  return (
    <div className="product-details-container my-5">
      <div className="back-button" onClick={() => history.goBack()}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{product.title}</h1>
          <p className="lead">${product.price}</p>
          <div className="product-details">
            <p>Size: {product.size}</p>
            <p>Category: {product.category}</p>
            <button className="btn btn-outline-dark btn-lg">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
