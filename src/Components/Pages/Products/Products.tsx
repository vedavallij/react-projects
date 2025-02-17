import { useState } from "react";
import { products as initialProducts } from "../Data Storage/Data";
import ProductCard from "./ProductCard";
import "./Products.css";

const ProductsPage = ({products, updateStock}) => {
  

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} updateStock={updateStock} />
      ))}
    </div>
  );
};

export default ProductsPage;
