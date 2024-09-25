import React from 'react'
import "./talk-expert.scss"
import { Col, Container, Row } from 'react-bootstrap'

const TalkExpert = () => {
  return (

    <div className="contact-div">

      <Container>

    <Row className="g-4">
         
         <Col lg={7} className=" text-center text-lg-start">
             <h2>Need help? Talk to expert.</h2>
             <h4>Talk to experts or Brows through more properties.</h4>
         </Col>
       
          <Col lg={5} className="text-center text-lg-end">
          
            <a href="#" className="btn btn-outline-secondary me-4">
            <i className="pi pi-arrow-up-right"></i> Contact us 
            </a>
   
           <a href="#" className="btn btn-outline-secondary">
           Contact us<i className="pi pi-phone"></i> 
           </a>
   
         </Col>

    </Row>

    </Container>

    </div>
     
  )
}

export default TalkExpert


/*
  <Container className="contact-container">
          <Row className="g-5 align-items-center" >
              <Col md={6} lg={6}>
                  <h3>Need help? Talk to expert.</h3>
                  <h4>Talk to experts or Brows through more properties.</h4>
              </Col>
              <Col md={6}>
               <div >
                 <button>Contact us  
                   <i className="pi pi-arrow-up-right"></i>
                  </button>
                  <button>
                  <i className="pi pi-phone"></i>
                    Contact us
                 </button>
                  </div>
              </Col>
          </Row>
      
    </Container>

*/