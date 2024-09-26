
import React from 'react'

import { Container } from 'react-bootstrap'
import Offices from './offices'
import offices from "@/helpers/data/offices.json";

const VisitOffice = () => {
  return (
    <Container className="visit-office">

      <h3 className="visit text-center">Visit Our Office</h3>
      <p className=" text-center">Realton has more than 9,000 offices off all sizes and all potential of session.</p>
      <div className=" d-flex justify-content-between">
      {offices.map((item) => (
        <div key={item.id}>
        <Offices {...item} />
        </div>
      )) }
      </div>
      
    </Container>
  )
}

export default VisitOffice
