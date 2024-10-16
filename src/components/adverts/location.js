"use client"
import React from 'react'
import { Form } from 'react-bootstrap'
import citiesData from '../../helpers/data/cities.json'

const Location = () => {

  const cities = citiesData.cities;
  
  return (
    <div>
      <h6>Location</h6>
      <Form.Select aria-label="Default select example" className="border-dark-subtle">
        <option className="">City</option>
        {cities.map((city) => (
          <option value={city.name} key={city.id}>{city.name}</option>
        ))}
    </Form.Select>
    </div>
  )
}

export default Location
