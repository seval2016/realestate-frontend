"use client"
import { Card } from "react-bootstrap";
import "./popular-properties-card.scss"
import React from 'react'
import Image from "next/image";

const PopularPropertiesCard = (props) => {
    const { image, title, city, value } = props;
  return (
    <Card className="discover-card" >
        
          <Image src={`/img/discover-properties/${image}`}
                 width={1362}
                 height={388}
                 className=" img img-fluid"
                    alt="Dream House"
                    
          />   
          <i className="pi pi-heart"></i>
          <Card.Body className="cardBody">
          
          <div className="discover-properties">
                   <h5>{title}</h5>
                   <h6>{city}</h6>
          </div>
           <div className="value-price"> {value} </div>
              
   </Card.Body>

               
               
         </Card>  
  )
}

export default PopularPropertiesCard
