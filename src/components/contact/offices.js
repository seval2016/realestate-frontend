import Image from 'next/image'
import React from 'react'
import "./offices.scss"


const Offices = (props) => {
    const { icon, city, address } = props;
  return (
    <div className="offices">
      
          <div className="city-icon">
              <Image
              src={`/img/contact/${icon}`}
              alt="My Icon"
              width={120} 
              height={120} 
              className="icon"/>
          </div>
      <div className="text-center">
      <h6>{city}</h6>
      <p className="address">{address}</p>
      </div>
      
    </div>
  )
}

export default Offices
