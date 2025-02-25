import './App.css'
import Navbar from './Components/Pages/Navbar/Navbar'
import Login from './Components/Pages/Login/Login'
import Products from './Components/Pages/Products/Products'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Components/Pages/Home/Home'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Purchases from './Components/Pages/Purchases/Purchases'
import { useState } from 'react'
import { products as initialProducts } from "./Components/Pages/dataStorage/Data";


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
      <Route path="/Home" element={<Home products={products} />} />
      <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Products products={products} updateStock={updateStock}/>}/>
        <Route path="/Dashboard" element={<Dashboard products={products} />} />
        <Route path='/Purchases' element={<Purchases purchases={purchases} />}/>
        <Route path='/' element={<Navigate to='/Home' replace/>} />
      </Routes>
    </div>
)
}

export default App
