"use client"
import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import "./contact-form.scss";
import RobotCheckButton from './robot-check-button';

const ContactForm = () => {
    return (
        <div className="contact-form border">
            <Form>
            
                <h5 className=" mb-4">Have a question? Get in touch!</h5>
  
                <Form.Group controlId="formFirstName">
                   <h6>First Name</h6>
                   <Form.Control
                   name="name"
                   placeholder=""
                   aria-label="Name"
                   aria-describedby="name"
                />
                </Form.Group>

               <Form.Group controlId="formLastName">
                   <h6>Last Name</h6>
                   <Form.Control
                   name="lastName"
                   placeholder=""
                   aria-label="LastName"
                   aria-describedby="lastName"
                />
                </Form.Group>

               <Form.Group controlId="formEmail">
                   <h6>Email</h6>
                   <Form.Control
                   name="email"
                   placeholder=""
                   aria-label="Email"
                   aria-describedby="email"
                />
                </Form.Group>

               <Form.Group controlId="formMessage">
                   <h6>Message</h6>
                   <Form.Control
                   name="message"
                   as="textarea"
                   placeholder=""
                   aria-label="Message"
                   aria-describedby="message"
                />
               </Form.Group>
               
                <RobotCheckButton/>

                <Button
					size="lg"
					type="submit"
					variant="outline-primary"
					className="mt-3 text-light bg-primary w-100"
				>
				Send
				</Button>
                
                
           </Form>
      </div>
  )
}

export default ContactForm
