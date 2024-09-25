
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Map from './map'
import ContactForm from './contact-form'
import VisitOffice from './visit-office'
import "./contact.scss";


const Contact = () => {
    return (
        <div className="contact">
            <Map className="map"/>
            <Container className=" form-container">
            <Row style={{height:"300px"}}>
                    <Col>
                        <ContactForm />
                    </Col>
                    <Col  className=" w-25 m-5">
                        <h3>We'd Love To Hear From You.</h3>
                        <p>We are here to answer any question you may have.As a partner of corporates,realton has more than 9,000 offices of all sizes ad all potential of session.</p>
                    </Col>
                </Row>
            </Container>
            <VisitOffice style={{ marginTop: '0', paddingTop: '0' }}/>

        </div>
  )
}

export default Contact
