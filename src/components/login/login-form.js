"use client";
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import TextInput from '../common/form-fields/text-input';
import PasswordInput from '../common/form-fields/password-input';

import "./login-form.scss"
import SubmitButton from '../common/form-fields/submit-button';

const LoginForm = () => {
    
  return (
      <Container className=" w-25">
          <Row className=" justify-content-center">
              <Col>
                  <Card className=" border-0">
                      <Card.Body>

							<Form className="login-form">
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
							  
							  <Button className=' forgot-btn d-flex border-0 bg-transparent'>Forgot password?</Button>

							  <SubmitButton title="LOGIN" className="login-btn" />
							  <div>If you don't have an account. 
								  <Button className="border-0 bg-transparent mb-1 text-decoration-underline">Register Now!</Button>
							  </div>
                              </Form>
                      </Card.Body>
                  </Card>
              </Col>
              
          </Row>
      
    </Container>
  )
}

export default LoginForm
