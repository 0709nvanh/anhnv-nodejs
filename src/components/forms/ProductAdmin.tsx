import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { add } from '../../api/product'
import Add from './Add'

type Props = {}

const ProductAdmin = (props: Props) => {
  const [products, setProducts] = useState<{id: string, name: string}[]>([])
  const onHandleAdd = async (product: any) => {
    const { data } = await add(product);
    setProducts([...products, data])
  }
  return (
    <div>
      <Add onAdd={onHandleAdd}/>
    </div>
  )
}

export default ProductAdmin