
import React from "react";
import { Form } from "react-bootstrap";


const TimeInput = ({ label, className, ...rest }) => {
    

    return (
        <Form.Group controlId="formTime" className={className}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type="time" className="custom-input" size="lg" {...rest}/>
        </Form.Group>
    )
}
        
export default TimeInput;