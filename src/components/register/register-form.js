"use client";
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import TextInput from '../common/form-fields/text-input';
import PasswordInput from '../common/form-fields/password-input';

//import "./login-form.scss"
import SubmitButton from '../common/form-fields/submit-button';

const RegisterForm = () => {
    
  return (
      <Container className=" w-25">
          <Row className=" justify-content-center">
              <Col>
                  <Card className=" border-0">
                      <Card.Body>

                          <Form className="login-form">
                                <TextInput
									className="mb-3 txt-inp"
									label="First Name"
									name="firstname"
                              />
                              <TextInput
									className="mb-3 txt-inp"
									label="Last Name"
									name="lastname"
                              />
                              <TextInput
									className="mb-3 txt-inp"
									label="Phone"
									name="phone"
                              />
                              
								<TextInput
									className="mb-3 txt-inp"
									label="Email"
									name="email"
								  
								/>
								<PasswordInput
									name="password psw-inp"
									className="mb-3"
									label="Password"
									
                              />
                              <PasswordInput
									name="password psw-inp"
									className="mb-3"
									label="Confirm Password"
							  />
							  

							  <SubmitButton title="REGISTER" className="login-btn" />
							  <div>If you already have an account. 
								  <Button className="border-0 bg-transparent mb-1 text-decoration-underline">Login Now!</Button>
							  </div>
							 
                              </Form>
                      </Card.Body>
                  </Card>
              </Col>
              
          </Row>
      
    </Container>
  )
}

export default RegisterForm
