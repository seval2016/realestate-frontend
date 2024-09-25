import React from 'react'
import { Container, Form } from 'react-bootstrap'
import"./find-your-home.scss"
import Location from './location'
import SearchButton from './search-button'

const FindYourHome = () => {
  return (
    <Container className='findHomeContainer'>
                 <div className="findHome">
                  <h6>Find Your Home</h6>
                  <Form.Control
                  type="text"
                  placeholder="What are you looking for?"
                  className=" text-center w-75 p-2 border-dark-subtle"
            />
                  </div>
                  
                  <div className="propertyStatus">
        <h6>Property Status</h6>
                      <Form.Check label="All" />
                      <Form.Check label="Rent" />
                      <Form.Check label="Sale" />
                  </div>

                  <div className="propertyType">
                      <h6>Property Type</h6>
                      <Form.Check type="radio" label="All" />
                      <Form.Check type="radio" label="Houses" />
                      <Form.Check type="radio" label="Apartments" />
                      <Form.Check type="radio" label="Offices" />
                      <Form.Check type="radio" label="Villas" />

                  </div>

                  <div className="priceRange">
                      <h6>Price Range</h6>
                     <div className="minMaxRange">
                       <Form.Control
                         type="text"
                         placeholder="min"
                         className="text-center me-4 border-dark-subtle"
                      />
                      <Form.Control
                          type="text"
                          placeholder="max"
                          className="text-center border-dark-subtle"
            />
                     </div>
                      
                    </div>
                   
                    <div className="location">
                      <Location/>
                    </div>
          
                     <div>
                        <SearchButton/>
                     </div>

          

    </Container>
  )
}

export default FindYourHome
