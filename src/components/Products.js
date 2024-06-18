import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import idols from "../assets/idols.jpg";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProduct();
  }, [products, selectedCategory, selectedSizes, priceRange]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.105:4201/api/v1/products"
      );

      setProducts(response.data.data);
      console.log(response.data.data);
      setFilter(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filterProduct = () => {
    let updatedList = products;
    if (selectedCategory !== "all") {
      updatedList = updatedList.filter(
        (product) => product.category === selectedCategory
      );
    }
    if (selectedSizes.length > 0) {
      updatedList = updatedList.filter((product) =>
        selectedSizes.includes(product.size)
      );
    }
    updatedList = updatedList.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilter(updatedList);
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange([
      Math.min(value, priceRange[1]),
      Math.max(value, priceRange[0]),
    ]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const ShowProducts = () => {
    return (
      <div className="product-grid">
        {filter.map((product) => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div className="card h-100 text-center p-4">
              <img
                src={product.images[0]}
                className="card-img-top"
                alt={product.name}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">{product.name}</h5>
                <p className="card-text lead fw-bold">${product.price}</p>
                <NavLink
                  to={{
                    pathname: `/products/${product._id}`,
                    state: { product },
                  }}
                  className="btn btn-outline-dark"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <div className="hero-image-container">
            <img src={idols} alt="Idols" className="hero-image" />
            <div className="hero-text">
              <h1 className="display-6 fw-bolder text-center">Idols</h1>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 category-buttons text-center">
          <button
            className="btn btn-category"
            onClick={() => handleCategoryChange("Accessories")}
          >
            Accessories
          </button>
          <button
            className="btn btn-category"
            onClick={() => handleCategoryChange("Idols")}
          >
            Idols
          </button>
          <button
            className="btn btn-category"
            onClick={() => handleCategoryChange("Background")}
          >
            Background
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="filter-bar">
            <h4>Filter By</h4>
            <div className="checkboxes">
              <div>
                <input
                  type="checkbox"
                  id="12inch"
                  value="12 inch"
                  onChange={() => handleSizeChange("12")}
                />
                <label htmlFor="12inch">12 Inch</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="15inch"
                  value="15 inch"
                  onChange={() => handleSizeChange("15")}
                />
                <label htmlFor="15inch">15 Inch</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="18inch"
                  value="18 inch"
                  onChange={() => handleSizeChange("18")}
                />
                <label htmlFor="18inch">18 Inch</label>
              </div>
              <button
                className="btn btn-outline-dark me-2 mb-2"
                onClick={filterProduct}
              >
                Apply Filters
              </button>
            </div>
            <div className="price-filter">
              <label htmlFor="priceRange">
                Price: {`${priceRange[0]} - ${priceRange[1]}`}
              </label>
              <input
                type="range"
                id="priceRange"
                min="0"
                max="5000"
                value={priceRange[0]}
                onChange={handlePriceChange}
                className="form-range"
              />
              <button
                className="btn btn-outline-dark me-2 mb-2"
                onClick={filterProduct}
              >
                Filter by Price
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};

export default Products;
