import React from 'react'
import PopularPropertiesCard from './popular-properties-card'
import { Col, Container, Row } from 'react-bootstrap'
import properties from "@/helpers/data/discover-properties.json";

const PopularProperties = () => {
  return (
    <Container style={{display:"flex",marginLeft:10
    }} >
        <Row xs={1} md={2} lg={3} className="g-5">
            {properties.map((item) => (
                <Col key={item.id}>
                    <PopularPropertiesCard {...item} />
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default PopularProperties
