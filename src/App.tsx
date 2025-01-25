import './App.css'
import Navbar from './Components/Pages/Navbar/Navbar'
import Login from './Components/Pages/Login/Login'
import Products from './Components/Pages/Products/Products'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Components/Pages/Home/Home'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Purchases from './Components/Pages/Purchases/Purchases'
import PurchaseDetails from './Components/Pages/Purchase Details/Purchase Details'


function App() {
  
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Products/>}/>
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
