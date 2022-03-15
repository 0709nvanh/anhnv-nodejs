import { useState, useEffect } from 'react'
import './App.css'
import type { ProductType } from './types/product'
import axios from 'axios'
import { list, remove } from './api/product';

function App() {
  const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(()=> {
    const getProduct = async () => {
      const { data } = await list()
      setProduct(data)
    }
    getProduct();
  }, [])

  const removeItem = async (id: number) => {
    const { data } = await remove(id);
    data && setProduct(product.filter(item => item.id !== data.id))
  }

  return (
    <div className="App">
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {product.map((item, index) => {
            return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                  </tr>
          })}
          
        </tbody>
      </table>
      
    </div>
  )
}

export default App
