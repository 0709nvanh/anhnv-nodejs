import { useState, useEffect } from 'react'
import './App.css'
import type { ProductType } from './types/product'
import axios from 'axios'
import { list, remove, removeProduct, update } from './api/product';
import { Route, Routes, NavLink } from 'react-router-dom';
import Product from './components/Product';
import Home from './components/Home';
import WebsiteLayout from './components/layout/WebsiteLayout';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './components/Dashboard';
import ProductAdmin from './components/admin/product/ProductAdmin';
import Header from './components/pages/Header';
import ProductList from './components/admin/product/List';
import Edit from './components/admin/product/Edit';
import 'antd/dist/antd.css';
import Blog from './components/client/blog/Blog';
import Signup from './components/client/signup/Signup';
import Signin from './components/client/signin/Signup';

function App() {
  
  const [products, setProducts] = useState<ProductType[]>([])
  const onHandleRemove = async (id: number) => {
    await removeProduct(id);
    setProducts(products.filter(item => item.id !== id))
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product)
    setProducts(products.map(product=>product.id == data.id ? data : product))    
  }
   return (
    <div className="App">
      <main>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />}/>
          <Route path="product" element={<Product />} />
          <Route path="blog" element={<Blog />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="signin" element={<Signin />}/>
        </Route>
        {/* <Route path="login" element={<PageSignUp />}/> */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path="product" >
            <Route index element={<ProductList onRemove={onHandleRemove} products={products}/>}/>
            <Route path="add" element={<ProductAdmin />}/>
            <Route path=":id/edit" element={<Edit onUpdate={onHandleUpdate} />}/>
          </Route>
        </Route>
      </Routes>
      </main>
    </div>
  )
}

export default App
