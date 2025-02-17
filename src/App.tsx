import './App.css'
import Navbar from './Components/Pages/Navbar/Navbar'
import Login from './Components/Pages/Login/Login'
import Products from './Components/Pages/Products/Products'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Components/Pages/Home/Home'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Purchases from './Components/Pages/Purchases/Purchases'
import PurchaseDetails from './Components/Pages/Purchase Details/Purchase Details'
import { useState } from 'react'
import { products as initialProducts } from "./Components/Pages/Data Storage/Data";


function App() {
  const [products, setProducts] = useState(initialProducts);

  function updateStock(productId: number, quantity: number) {
    setProducts((productsBefore) =>
      productsBefore.map((product) =>
        product.id === productId
          ? { ...product, stock: product.stock + quantity } : product
      )
    );
  };
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Products products={products} updateStock={updateStock}/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Purchases' element={<Purchases/>}/>
        <Route path='/' element={<Navigate to='/Home' replace/>} />
        <Route path="/" element={<Purchases />} />
        <Route path="/purchase/:id" element={<PurchaseDetails />} />
      </Routes>
    </div>
)
}

export default App
