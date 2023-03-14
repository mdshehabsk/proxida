import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import TopNavigation from "./components/TopNavigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Signup from "./pages/SignUp";

function App() {
  const {pathname} = useLocation()
  return (
    <>
    {pathname === '/' && <TopNavigation/> }
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
