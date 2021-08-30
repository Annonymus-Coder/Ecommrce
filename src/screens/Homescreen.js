import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../product'
function Homescreen() {
    return (
        <div>
            <h1>latest products</h1>
            <Row>
                {products.map(product=>(
                    <Col sm = {12} md={6} lg={4} xl={3}>
                    <Product product = {product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Homescreen
