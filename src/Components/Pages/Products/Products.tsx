
import "./Products.css";

function Products() {

  return (
    <div className="product-page">
      <h1>Available Fruits</h1>
      <div className="product-grid">
        {/*  Card 1 */}
        <div className="product-card">
          <img src="src\assets\Apples.png" alt="Apple" className="product-image" />
          <h3>Apple</h3>
          <p>Quantity: 1 kg</p>
          <p>Price: ₹150</p>
        </div>
        {/* Card 2 */}
        <div className="product-card">
          <img src="src\assets\Bananas.png" alt="Banana" className="product-image" />
          <h3>Banana</h3>
          <p>Quantity: 12 pcs</p>
          <p>Price: ₹50</p>
        </div>
        {/* Card 3 */}
        <div className="product-card">
          <img src="src\assets\Grapes.png" alt="Grapes" className="product-image" />
          <h3>Grapes</h3>
          <p>Quantity: 500 g</p>
          <p>Price: ₹80</p>
        </div>
        {/* Card 4 */}
        <div className="product-card">
          <img src="src\assets\Oranges.png" alt="Orange" className="product-image" />
          <h3>Orange</h3>
          <p>Quantity: 1 kg</p>
          <p>Price: ₹100</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
