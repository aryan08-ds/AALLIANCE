import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import idols from "../assets/idols.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import "./Products.css";

const Products = () => {
  const products = [
    { id: 1, title: "12 Inch Idol", price: 950, size: "12 inch", image: g1 },
    { id: 2, title: "15 Inch Idol", price: 3500, size: "15 inch", image: g2 },
    { id: 3, title: "18 Inch Idol", price: 4800, size: "18 inch", image: g3 },
  ];

  const [filter, setFilter] = useState(products);
  const [priceRange, setPriceRange] = useState([950, 4800]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const filterProduct = () => {
    let updatedList = products;
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

  const ShowProducts = () => {
    return (
      <div className="product-grid">
        {filter.map((product) => {
          return (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
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
          );
        })}
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
                  onChange={() => handleSizeChange("12 inch")}
                />
                <label htmlFor="12inch">12 Inch</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="15inch"
                  value="15 inch"
                  onChange={() => handleSizeChange("15 inch")}
                />
                <label htmlFor="15inch">15 Inch</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="18inch"
                  value="18 inch"
                  onChange={() => handleSizeChange("18 inch")}
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
                min="950"
                max="4800"
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
