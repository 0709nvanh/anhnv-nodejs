import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { add } from '../api/product'
import Add from './forms/Add'

type Props = {}

const ProductAdmin = (props: Props) => {
  const [products, setProducts] = useState<{id: string, name: string}[]>([])
  const onHandleAdd = async (product: any) => {
    console.log(product);
    const { data } = await add(product);
    const navigate = useNavigate()
    setProducts([...products, data])
    navigate("/admin");
  }
  return (
    <div>
      <Add onAdd={onHandleAdd}/>
    </div>
  )
}

export default ProductAdmin