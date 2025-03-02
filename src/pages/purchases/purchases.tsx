import { products } from "../../dataStorage/data";
import "./Purchases.css";

interface purchasesType {
  id?: number;
  date: string;
  productId: number;
  quantity: number;
}

function PurchasesPage({ purchases }: { purchases: purchasesType[] }) {
  return (
    <div className="purchases">
      <h3>Your Purchase History</h3>
      <table className="purchase-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => {
            const product = products.find((p) => p.id === purchase.productId);
            return (
              <tr key={purchase.id}>
                <td>{purchase.date}</td>
                <td>{product ? product.name : "Unknown Product"}</td>
                <td>{purchase.quantity}Kg</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PurchasesPage;
