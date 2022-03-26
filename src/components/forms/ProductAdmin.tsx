import React, { useState } from 'react';
import { add, removeProduct, update } from '../../api/product'
import { ProductType } from '../../types/product';
import Add from './Add'

type Props = {
  product: ProductType
}

const ProductAdmin = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
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