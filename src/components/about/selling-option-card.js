import Image from 'next/image'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './selling-option-card.scss' // CSS dosyasını ekliyoruz

const SellingOptionCard = () => {
  return (
    <Container className='sellingContainer'>
    <Row className="g-1 align-items-center ">
      
      <Col sm={6} className="textCol">
        <h3>Let's Find The Right Selling Option For You</h3>
        <div className="icon-option">
        <Image
          src="/img/selling-option/sale-tag.png" 
          alt="My Icon"
          width={40} 
          height={40}
          className='icon'    
        />
        <div>
          <h5>Tech-Driven Marketing</h5>
          <h6>Real estate is embracing technology with virtual tours, 3D models, and blockchain transactions</h6>
        </div>
      </div>
      <div className="icon-option">
        <Image
          src="/img/selling-option/ecology.png" 
          alt="My Icon"
          width={40} 
          height={40}
          className='icon'    
        />
        <div>
          <h5>Sustainability Matters</h5>
          <h6>Green building practices and eco-friendly features are gaining popularity for environmentally conscious buyers</h6>
        </div>
      </div>
      <div className="icon-option">
        <Image
          src="/img/selling-option/remote-control.png" 
          alt="My Icon"
          width={40} 
          height={40}
          className='icon'
        />
        <div>
          <h5>Remote Work Impact</h5>
          <h6>Changing work patterns are reshaping housing preferences, favoring suburban and urban mixed-use developments</h6>
        </div>
      </div>
      </Col>
      
      <Col sm={6} className="text-center">
      <Image
      src="/img/selling-option/couple-dancing.jpg"
      width={500}
      height={350}
      alt="Find Selling Option"
      className="img-fluid"
    />
      </Col>
    </Row>
  </Container>
  )
}

export default SellingOptionCard
