import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.css"; // Make sure to create this file

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API or state management store
    // This is a placeholder, replace with your actual API call
    const fetchedOrders = [
      {
        id: 8085,
        date: "August 31, 2022",
        status: "Completed",
        total: "₹3,279.00 for 1 item",
      },
      // Add more orders as needed
    ];
    setOrders(fetchedOrders);
  }, []);

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
