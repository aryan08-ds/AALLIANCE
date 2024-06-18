import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4201/api/v1/products/${id}`
        );
        setProduct(response.data.data); // adjust based on your actual API response structure
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err); // Log error for debugging
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:{" "}
        {error.message ||
          "An error occurred while fetching the product details"}
        <pre>{JSON.stringify(error, null, 2)}</pre>{" "}
        {/* Detailed error information */}
      </div>
    );
  }

  return (
    <div className="product-details-container my-5">
      <div className="back-button" onClick={() => history.goBack()}>
        <i className="fas fa-arrow-left"></i>
      </div>
      {product && (
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                product.images && product.images.length > 0
                  ? product.images[0]
                  : "placeholder-image-url"
              }
              alt={product.name}
              className="img-fluid"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "placeholder-image-url";
              }} // fallback image
            />
          </div>
          <div className="col-md-6">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">${product.price}</p>
            <div className="product-details">
              <p>Size: {product.size}</p>
              <p>Category: {product.category}</p>
              <button className="btn btn-outline-dark btn-lg">
                Add to Cart
              </button>
              <p className="description">{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
