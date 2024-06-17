import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.css"; // Ensure you have this CSS file for styling

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="orders-container">Loading...</div>;
  }

  if (error) {
    return <div className="orders-container">Error: {error}</div>;
  }

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ORDER</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>TOTAL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <Link to={`/order/${order.id}`} className="order-link">
                  #{order.id}
                </Link>
              </td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
              <td>
                <button className="action-button view-invoice-button">
                  View Invoice
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
