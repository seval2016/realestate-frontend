import React from 'react'
import properties from "@/helpers/data/explore-properties-city.json";
import { Col, Container, Row } from 'react-bootstrap';
import Cities from './cities';

const PropertiesCity = () => {


  return (
    <Container style={{display:"flex", marginLeft:0, marginRight:0}} >
    <div className="g-5 d-flex justify-content-between w-100">
        {properties.map((item) => (
            <div key={item.id} >
                <Cities {...item}/>
            </div>
            
        ))}
    </div>
</Container>
  )
}

export default PropertiesCity;