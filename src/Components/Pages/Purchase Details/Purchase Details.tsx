import { useLocation } from 'react-router';
import './Purchase Details.css';

function PurchaseDetails() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <p>No order details available.</p>;
  }  

  return (
    <div className="purchase-details-container">
      <h2>Purchase Details</h2>
      <p><strong>Product:</strong> {order.product}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Price:</strong> ₹{order.price}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Purchase Date:</strong> {order.date}</p>
      <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
      <button className="btn-order">Order Again</button>
    </div>
  );
}

export default PurchaseDetails;
