import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FindYourHome from './find-your-home';
import PopularProperties from '../discover-properties/popular-properties';

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);  // Veriyi saklamak için state

  // Backend'den veriyi çekme
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/adverts'); // API URL'i
        const data = await response.json();
        setProperties(data);  // Veriyi state'e kaydet
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };


    fetchProperties();
  }, []); // Sadece component mount edildiğinde çalışır


  return (
    <Container>
      <Row className="g-5">
        <Col xl={3} className="mt-3">
          <FindYourHome />
        </Col>
        <Col xl={9}>
          {/* Veriyi PopularProperties bileşenine props olarak gönderiyoruz */}
          <PopularProperties properties={properties} />
        </Col>
      </Row>
    </Container>
  );
};

export default PropertiesPage;