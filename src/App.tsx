import './App.css'
/* import { useState } from 'react' */
import Navbar from './Components/Pages/Navbar/Navbar'
import Login from './Components/Pages/Login/Login'
import Products from './Components/Pages/Products/Products'
import { Route, Routes } from 'react-router'
import Home from './Components/Pages/Home/Home'


function App() {
  /* const currentpath = location.pathname;
  
  

  if(currentpath === '/Login'){
    currentcomponent= <Login></Login>
  } */
 
/*  const[state,setstate]=useState(false);
 const currentcomponent= <h1>Unknown Path</h1>

 function displaycontent(){
  setstate(true)
 }
 */
  return(
    <div>
      <Navbar />
      {/* <button onClick={displaycontent}> Click </button> */}
      {/* {state?currentcomponent:null} */}
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      {/* <h1>{currentpath}</h1>
      {currentcomponent} */}
     
    </div>
)
}

export default App
