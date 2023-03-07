import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Cart,
  Details,
  ProductList,
  Error
} from './pages';

import Navbar from './components/Navbar';
import Modal from './components/Modal';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList/>}/>
        <Route  path="/details" element={<Details/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="*" element={<Error/>}/>
      </Routes>
      <Modal/>
    </>
  )
}

export default App
