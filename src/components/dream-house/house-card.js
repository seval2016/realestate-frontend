"use client"
import React from 'react'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'
import "./house-card.scss"

const HouseCard = () => {
  return (
    <div className="house-card d-flex justify-content-between">
      <Row className="align-items-center">
        <Col lg={6} md={12} className="text-center text-lg-start">
          <div className='title'>
            <h2>Get your dream house</h2>
            <h6>Turn your aspirations into reality with 'Get Your Dream House'- where your perfect home becomes a possibility.</h6>
            <button>Register Now
              <i className="pi pi-arrow-up-right"></i>
            </button>
          </div>
        </Col>
        <Col lg={6} md={12} className="text-center">
          <Image
            src={"/img/dream-house/dream-house.png"}
            width={800}
            height={388}
            className="img-fluid"
            alt="Dream House"
          />
        </Col>
      </Row>
    </div>
  )
}

export default HouseCard

/*
<div className="house-card d-flex justify-content-between align-items-center">
      
        <div className='title'>
          <h2>Get your dream house</h2>
          <h6>Turn your aspirations into reality with 'Get Your Dream House'- where your perfect home becomes a possibility.</h6>
          <button>Register Now
            <i className="pi pi-arrow-up-right"></i>
          </button>
        </div>
        
        <Image
        src={"/img/dream-house/dream-house.png"}
        width={800}
        height={388}
        className="img-fluid"
        alt="Dream House"
        />
        
      </div>
*/