import './Purchases.css';
import { useNavigate } from 'react-router';

function Purchases() {
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      product: 'Apple',
      quantity: '2 Kg',
      price: 200,
      status: 'Delivered',
      date: '2025-01-20',
      paymentMethod: 'UPI',
    },
    {
      id: 2,
      product: 'Bananas',
      quantity: 36,
      price: 150,
      status: 'Shipped',
      date: '2025-01-21',
      paymentMethod: 'Credit Card',
    },
  ];

  const handleProductClick = (order) => {
    navigate(`/purchase/${order.id}`, { state: { order } });
  };

  return (
    <div className="purchases">
      <h2>Your Purchases</h2>
      <table className="purchases-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Purchase Date</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <button
                  className="product-link"
                  onClick={() => handleProductClick(order)}
                >
                  {order.product}
                </button>
              </td>
              <td>{order.quantity}</td>
              <td>₹{order.price}</td>
              <td className={order.status.toLowerCase()}>{order.status}</td>
              <td>{order.date}</td>
              <td>{order.paymentMethod}</td>
              <td>
                <button className="btn-track">Track</button>
                <button className="btn-cancel">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Purchases;
