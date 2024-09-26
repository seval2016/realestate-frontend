import React from 'react'
import properties from "@/helpers/data/explore-properties-type.json";
import ExploreCard from './explore-card';
import { Col, Container, Row } from 'react-bootstrap';

const Properties = () => {


  return (
    <Container style={{display:"flex", justifyContent:"center", marginLeft:0}} >
    <div className="g-5 d-flex flex-wrap justify-content-between w-100" >
        {properties.map((item) => (
            <div key={item.id}>
                <ExploreCard {...item} />
            </div>
        ))}
    </div>
</Container>
  )
}

export default Properties;
