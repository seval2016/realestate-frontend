import React from 'react';
import PopularPropertiesCard from './popular-properties-card';
import { Col, Container, Row } from 'react-bootstrap';

const PopularProperties = ({ properties }) => {
  return (
    <Container style={{ display: "flex", marginLeft: 10 }}>
      <Row xs={1} md={2} lg={3} className="g-5">
        {properties && properties.length > 0 ? (
          properties.map((item) => (
            <Col key={item.id}>
              <PopularPropertiesCard {...item} />
            </Col>
          ))
        ) : (
          <p>Loading properties...</p>
        )}
      </Row>
    </Container>
  );
};

export default PopularProperties;