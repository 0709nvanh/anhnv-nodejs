import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { list, removeProduct } from '../../../api/product'
import type { ProductType } from '../../../types/product'

import { Table, Tag, Space } from 'antd';

type ProductListProps = {
    onRemove: (id: any) => void
    products: ProductType[]
}
interface DataType {
    key: React.Key,
    name: string,
    price: number
}
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>Invite</a>
          <button>Delete</button>
        </Space>
      ),
    },
  ];
const ProductList = (props: ProductListProps) => {
    const [products, setProducts] = useState<ProductType[]>([])
    const dataSource: DataType[] = props.products.map((item, index) => {
        key: index + 1;
        name: item.name;
        price: item.price
    })
  return (
    <div>
        <div>
            <Link to="/admin/product/add">Add</Link>
        </div>
        <Table dataSource={dataSource} columns={columns} />
        {/* <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
        </table> */}
    </div>
  )
}

export default ProductList