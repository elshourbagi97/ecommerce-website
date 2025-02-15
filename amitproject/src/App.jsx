import NavBar from './navBar/navbar';
import Home from './Home/home';
import Products from './products/products';
import Login from './Login/login';
import ItemOne from './item/oneitem';
import CartProduct from './cart/cart';

import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'

function App() {
const location = useLocation()
  return (
 
<Routes>
<Route path="/" element={<Home state1={location.state}/>} />
 <Route path='/products' element={<Products state1={location.state}/>}/>
 <Route path="/ProductDetails" element={<ItemOne state={location.state}/>}/>
 <Route path="/Signin"  element={<Login state={location.state}/>}/>
 <Route path="/cart"    element={<CartProduct state={location.state}/>}/>
</Routes>

   
  )
}

export default App
