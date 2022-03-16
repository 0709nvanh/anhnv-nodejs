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
import ProductAdmin from './components/ProductAdmin';

function App() {
  
  return (
    <div className="App">
      <header>
        <ul>
          <li><NavLink to="/">Home page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />}/>
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path="product" element={<ProductAdmin />}/>
        </Route>
      </Routes>
      </main>
    </div>
  )
}

export default App
