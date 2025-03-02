import ProductCard from "../../components/productCard/productCard";
import "./products.css";


interface productType {
  id: number;
  name: string;
  stock: number;
  price: number;
  image: string;
}

interface propsType{
  products: productType[];
  updateStock:(productId: number, quantity: number) => void;
}

function ProductsPage({products, updateStock}:propsType){
  

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} updateStock={updateStock} />
      ))}
    </div>
  );
};

export default ProductsPage;
