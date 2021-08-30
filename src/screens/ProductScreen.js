import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../product'
function ProductScreen({match}) {
    const product = products.find((p)=>p._id ==match.params.id)
    return (
        <div>
          <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
          <Row>
              <Col md={6}>
                  <Image src={product.image}/>
              </Col>
              <Col md={3}>
                 <ListGroup>
                     <ListGroup.Item>
                         <h3>{product.name}</h3>
                     </ListGroup.Item>
                 </ListGroup>
              </Col>
              <Col md={3}>
                 
              </Col>
          </Row>
        </div>
    )
}

export default ProductScreen 
