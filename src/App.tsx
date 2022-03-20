import { useState, useEffect } from 'react'
import './App.css'
import type { ProductType } from './types/product'
import axios from 'axios'
import { list, remove } from './api/product';
import { Route, Routes, NavLink } from 'react-router-dom';
import Product from './components/Product';
import Home from './components/Home';
import WebsiteLayout from './components/layout/WebsiteLayout';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './components/Dashboard';
import ProductAdmin from './components/forms/ProductAdmin';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/pages/Header';
import ProductList from './components/forms/ProductList';


function App() {
  
  const [products, setProducts] = useState<ProductType[]>([])
  return (
    <div className="App">
      <main>
      <Header />
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />}/>
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path="product" >
            <Route index element={<ProductList />}/>
            <Route path="add" element={<ProductAdmin />}/>
          </Route>
        </Route>
      </Routes>
      </main>
    </div>
  )
}

export default App
