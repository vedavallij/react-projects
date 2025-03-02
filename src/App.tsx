import './app.css'
import { Navigate, Route, Routes } from 'react-router'
import { useState } from 'react'
import { products as initialProducts } from "./dataStorage/data.tsx";
import Navbar from './components/navbar/navbar';
import Login from './pages/login/login';
import Products from './pages/products/products';
import Dashboard from './pages/dashboard/dashboard';
import Purchases from './pages/purchases/purchases';
import Home from './pages/home/home';


function App() {
  const [products, setProducts] = useState(initialProducts);
  const [purchases, setPurchases] = useState<{ productId: number; quantity: number; date: string }[]>([]);


  function updateStock(productId: number, quantity: number) {
    setProducts((productsBefore) =>
      productsBefore.map((product) =>
        product.id === productId
          ? { ...product, stock: product.stock + quantity }
          : product
      )
    );
  
    const date = new Date().toLocaleDateString("en-GB"); 
  
    setPurchases((prevPurchases) => [
      ...prevPurchases,
      { productId, quantity, date },
    ]);
  }
  
  return(
    <div>
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home products={products} />} />
      <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products products={products} updateStock={updateStock}/>}/>
        <Route path="/dashboard" element={<Dashboard products={products} />} />
        <Route path='/purchases' element={<Purchases purchases={purchases} />}/>
        <Route path='/' element={<Navigate to='/home' replace/>} />
      </Routes>
    </div>
)
}

export default App
