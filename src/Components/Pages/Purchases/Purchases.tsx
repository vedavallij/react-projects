import { products, purchases } from "../Data Storage/Data";
import "./Purchases.css";

function PurchasesPage() {
  return (
    <div className="purchases">
      <h3>Your Purchase History</h3>
      <table className="purchase-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => {
            const product = products.find(p => p.id === purchase.productId);
            return (
              <tr key={purchase.id}>
                <td>{product?.name}</td>
                <td>{purchase.quantity}</td>
                <td>₹{purchase.quantity * (product?.price || 0)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PurchasesPage;
