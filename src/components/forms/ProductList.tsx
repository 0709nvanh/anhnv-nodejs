import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { list, removeProduct } from '../../api/product'
import type { ProductType} from '../../types/product'


type ProductListProps = {
    onRemove: (id: any) => void
    products: ProductType[]
}

const ProductList = (props: ProductListProps) => {
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        const getProduct = async () => {
            const {data} = await list();
            setProducts(data)            
        }
        getProduct()    
      }, []) 
  return (
    <div>
        <div>
            <Link to="/admin/product/add">Add</Link>
        </div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item: ProductType, index: number) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                                <button onClick={() => props.onRemove(item.id)} className="btn btn-outline-primary">Remove</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList