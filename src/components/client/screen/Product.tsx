import React from 'react'
import { Card, Col, Row } from 'antd';
import { NavLink } from 'react-router-dom'
type Props = {}

const Product = (props: Props) => {
  return (
    <div>
        <div>
          <h2 style={{ margin: 0}}>Our Products</h2>
          <div style={{ paddingBottom: 16, color: 'GrayText'}}><span>Add our products to weekly line up</span></div>
        </div>
         <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={4}>
              <Card cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <NavLink to="/product/detail">Product A</NavLink>
                <p>$82.1</p>
              </Card>
            </Col>
            <Col span={4}>
              <Card cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <NavLink to="/product/detail">Product A</NavLink>
                <p>$82.1</p>
              </Card>
            </Col>
            <Col span={4}>
              <Card cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <NavLink to="/product/detail">Product A</NavLink>
                <p>$82.1</p>
              </Card>
            </Col>
            <Col span={4}>
              <Card cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <NavLink to="/product/detail">Product A</NavLink>
                <p>$82.1</p>
              </Card>
            </Col>
            <Col span={4}>
              <Card cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <NavLink to="/product/detail">Product A</NavLink>
                <p>$82.1</p>
              </Card>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Product