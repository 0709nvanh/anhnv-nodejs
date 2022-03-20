import React, { useState, useEffect } from 'react'
import { list } from '../../api/product'
import type { ProductType} from '../../types/product'


type Props = {}

type ProductAdmin = {
    products: ProductType[];
  }
const ProductList = () => {
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
                                <button type="button" className="btn btn-outline-primary">Delete</button>
                                <button type="button" className="btn btn-outline-warning">Edit</button>
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