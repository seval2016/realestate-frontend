
import React from 'react'
import { Form } from 'react-bootstrap'

const RobotCheckButton = () => {
  return (
    
    
          <Form.Group className="m-3 center border p-4 w-50 small rounded-2 bg-body-secondary" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I'm not a robot" />
          </Form.Group>
      
  )
}

export default RobotCheckButton
