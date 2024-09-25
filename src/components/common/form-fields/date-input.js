
import React from "react";
import { Form } from "react-bootstrap";


const DateInput = ({ label, className, ...rest }) => {
   

    return (
        <Form.Group controlId="formDate" className={className}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type="date" className="custom-input" size="lg" {...rest}/>
        </Form.Group>
    )
}
        
export default DateInput;



   