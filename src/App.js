import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ProductList from './pages/productList/ProductList';
import AddProduct from './pages/addProduct/AddProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
