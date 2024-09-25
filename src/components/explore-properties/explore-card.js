'use client';
import React from 'react'
import Card from 'react-bootstrap/Card';
import "./explore-card.scss"
import Image from 'next/image';


const ExploreCard = (props) => {

  const { icon, title, value } = props;

  return (
    
                  
			<Card className="explore-card">
         <Card.Body className="card-body">
        <div className="icon-circle">
        <Image
          src={`/img/explore-properties/${icon}`}
          alt="My Icon"
          width={40} 
          height={40} 
          className="icon"
          />
        </div>
               <div className="properties">
                        <h5>{title}</h5>
                        <h6>{value}</h6>
                    </div>
        </Card.Body>

              </Card>  
              
  )
}

export default ExploreCard;
