import React from 'react'
import Banner from './client/banner/Banner'
import Product from './client/screen/Product';
type Props = {}
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = (props: Props) => {

  
  return (
    <div>
      <Banner />
      <div className="product" style={{ padding: 40}}>
        <Product />
      </div>
    </div>
  )
}

export default Home
