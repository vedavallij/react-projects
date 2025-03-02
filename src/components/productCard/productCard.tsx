import { useState } from 'react';
import './productCard.css';

interface productType {
  id: number;
  name: string;
  stock: number;
  price: number;
  image: string;
}

interface propsType{
  product: productType;
  updateStock:(productId: number, quantity: number) => void;
}

function ProductCard({ product, updateStock }: propsType) {
  const [showForm, setShowForm] = useState(false);
  const [stockToAdd, setStockToAdd] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const quantity = parseInt(stockToAdd, 10);

    if (!isNaN(quantity) && quantity > 0) {
      updateStock(product.id, quantity);
      setStockToAdd("");
      setShowForm(false);
    }
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="100" />
      <h4>{product.name}</h4>
      <p>Stock: {product.stock}kg</p>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => setShowForm(true)}> Add to Stock </button>

      {showForm && (
        <div className='stock-form'>
          <h4>Add Stock for {product.name}</h4>
          <form onSubmit={submit}>
            <input type='number' placeholder='Enter quantity' value={stockToAdd} onChange={(e) => setStockToAdd(e.target.value)} required />
            <div className="button-group">
              <button >Update Stock</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};


export default ProductCard;
