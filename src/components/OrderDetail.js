import React from "react";
import { useParams } from "react-router-dom";
import "./OrderDetail.css"; // Ensure this file exists in the same directory

const OrderDetail = () => {
  const { orderId } = useParams();

  // This is a placeholder for the actual order details
  // Replace with your actual data fetching logic
  const orderDetails = {
    id: orderId,
    date: "August 31, 2022",
    status: "Completed",
    items: [
      {
        name: "My Eco Murti - Shadu Maati Ganesh Murti - BQ (1.5ft)",
        quantity: 1,
        price: "₹3,400.00",
      },
    ],
    subtotal: "₹3,400.00",
    discount: "-₹121.00",
    total: "₹3,279.00",
    billingAddress: {
      name: "Saumil Shah",
      address: "Powai, Mumbai 400087",
      method: "Local Pickup",
      phone: "8000932880",
      email: "Saumil4444@yahoo.com",
    },
  };

  return (
    <div className="order-detail-container">
      <h2>Order #{orderDetails.id}</h2>
      <p>
        Order <span className="highlight">#{orderDetails.id}</span> was placed
        on <span className="highlight">{orderDetails.date}</span> and is
        currently <span className="highlight">{orderDetails.status}</span>.
      </p>
      <h3>Order details</h3>
      <table className="order-detail-table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.items.map((item, index) => (
            <tr key={index}>
              <td>
                {item.name} &times; {item.quantity}
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
          <tr>
            <td>Subtotal:</td>
            <td>{orderDetails.subtotal}</td>
          </tr>
          <tr>
            <td>Discount:</td>
            <td>{orderDetails.discount}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{orderDetails.total}</td>
          </tr>
        </tbody>
      </table>
      <h3>Billing address</h3>
      <div className="billing-address">
        <p>{orderDetails.billingAddress.name}</p>
        <p>{orderDetails.billingAddress.address}</p>
        <p>{orderDetails.billingAddress.method}</p>
        <p>
          <i className="fas fa-phone"></i> {orderDetails.billingAddress.phone}
        </p>
        <p>
          <i className="fas fa-envelope"></i>{" "}
          {orderDetails.billingAddress.email}
        </p>
      </div>
    </div>
  );
};

export default OrderDetail;
