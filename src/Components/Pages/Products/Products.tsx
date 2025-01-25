
import "./Products.css";

function Products() {

  return (
    <div className="product-page">
      <h1>Available Fruits</h1>
      <div className="product-grid">
        {/*  Card 1 */}
        <div className="product-card">
          <img src="src\assets\Apples.png" alt="Apple" className="product-image" />
          <h4>Apple</h4>
          <p>Quantity: 1 kg</p>
          <p>Price: ₹100</p>
          <button className="order"> Add to Cart </button>
        </div>
        {/* Card 2 */}
        <div className="product-card">
          <img src="src\assets\Bananas.png" alt="Banana" className="product-image" />
          <h4>Banana</h4>
          <p>Quantity: 12 pcs</p>
          <p>Price: ₹50</p>
          <button className="order"> Add to Cart </button>
        </div>
        {/* Card 3 */}
        <div className="product-card">
          <img src="src\assets\Oranges.png" alt="Oranges" className="product-image" />
          <h4>Oranges</h4>
          <p>Quantity: 1 kg</p>
          <p>Price: ₹120 </p>
          <button className="order"> Add to Cart </button>
        </div>
        {/* Card 4 */}
        <div className="product-card">
          <img src="src\assets\Grapes.png" alt="Grapes" className="product-image" />
          <h4>Grapes</h4>
          <p>Quantity: 1 kg</p>
          <p>Price: ₹50</p>
          <button className="order"> Add to Cart </button>
        </div>
        {/* Card 5 */}
        <div className="product-card">
          <img src="src\assets\Guava.png" alt="Guava" className="product-image" />
          <h4>Guava</h4>
          <p>Quantity: 1 kg</p>
          <p>Price: ₹30</p>
          <button className="order"> Add to Cart </button>
        </div>
        {/* Card 6 */}
        <div className="product-card">
          <img src="src\assets\Mustard Apple.png" alt="Mustard Apple" className="product-image" />
          <h4>Mustard Apple</h4>
          <p>Quantity: 1 kg</p>
          <p>Price: ₹90</p>
          <button className="order"> Add to Cart </button>
        </div>
        {/* Card 7 */}
        <div className="product-card">
          <img src="src\assets\Pomegranate.png" alt="Pomegranate" className="product-image" />
          <h4>Pomegranate</h4>
          <p>Quantity: 1 kg</p>
          <p>Price: ₹100</p>
          <button className="order"> Add to Cart </button>
        </div>
        {/* Card 8 */}
        <div className="product-card">
          <img src="src\assets\Papaya.png" alt="Papaya" className="product-image" />
          <h4>Papaya</h4>
          <p>Quantity: 1 kg</p>
          <p>Price: ₹40</p>
          <button className="order"> Add to Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
