import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import FindYourHome from './find-your-home'
import PopularProperties from '../discover-properties/popular-properties'

const PropertiesPage = () => {
  return (
    <Container>
      <Row className=" g-5">
              <Col xl={3} className="mt-3">
                  
                  <FindYourHome/>
  
              </Col>
              <Col xl={9}>
                  <PopularProperties/>

              </Col>
      </Row>
    </Container>
  )
}

export default PropertiesPage
