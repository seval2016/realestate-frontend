import Image from 'next/image'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./mission-card.scss"

const MissionCard = () => {
  return (
    <Container className='missionContainer'>
     <Row className="g-1 align-items-center ">
              
      <Col sm={6} className="img text-center">
      <Image
      src="/img/about/home-decoration.jpg"
      width={600}
      height={450}
      alt="Find Selling Option"
      className="img-fluid"
    />
      </Col>      
      
      <Col sm={6} className="textCol">
        <h3>We're on a Mission to Change View of Real Estate Field</h3>
          <h5>At the heart of our vision lies a resolute commitment to transform the landscape of the real estate industry. We're not just a company; we're on a mission to change the very essence of how real estate is perceived and experienced. Our journey is defined by innovation, transparency, and a relentless pursuit of excellence. With a bold and forward-thinking approach, we seek to revolutionize the traditional norms of the real estate field, making it more accessible, efficient, and customer-centric. Our aspiration is to shape a future where buying, selling, or investing in real estate is a seamless and empowering experience for all. Join US on this transformative journey as we rewrite the narrative of real estate.</h5>
          <div className="divCircle">
          <div className="circle">
            <p className="architect">Modern Architect</p>
          </div>
          <div className="circle">
            <p>Green Building</p>
          </div>
          </div>

      </Col>
      
      
    </Row>
  </Container>
  )
}

export default MissionCard
