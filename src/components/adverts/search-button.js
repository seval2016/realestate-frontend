import React from 'react'
import { Form } from 'react-bootstrap'
import "./search-button.scss"

const SearchButton = () => {
  return (
    <div>
       <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" searchButton text-center p-2"
      />
  
      
    </div>
  )
}

export default SearchButton
