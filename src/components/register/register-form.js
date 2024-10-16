"use client";
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import TextInput from '../common/form-fields/text-input';
import PasswordInput from '../common/form-fields/password-input';
import { initialResponse } from "@/helpers/form-validation"
import { useFormState } from "react-dom";
import SubmitButton from '../common/form-fields/submit-button';
import { registerAction } from '@/actions/register-action';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {

	const [state, dispatch] = useFormState(registerAction, initialResponse); 
	const router = useRouter(); 

  const handleLoginRedirect = () => {
    router.push('/login'); 
  };
    
  return (
      <Container className=" w-50">
          <Row className=" justify-content-center">
              <Col md={8} lg={6}>
                  <Card className=" border-0">
					  <Card.Body>
						  
					  {!state?.ok && state?.message ? (
								<Alert>{state?.message}</Alert>
							) : null}

                          <Form action={dispatch} className="login-form">
                                <TextInput
									className="mb-3 txt-inp"
									label="First Name"
								    name="firstname"
								    controlId="formBasicFirstName"
								    error={state?.errors?.name}
                              />
                              <TextInput
									className="mb-3 txt-inp"
									label="Last Name"
								    name="lastname"
									controlId="formBasicLastName"
									error={state?.errors?.lastname}
                              />
                              <TextInput
									className="mb-3 txt-inp"
									label="Phone"
								    name="phone"
									controlId="formBasicPhone"
								    error={state?.errors?.phone}
                              />
                              
								<TextInput
									className="mb-3 txt-inp"
									label="Email"
								    name="email"
								    controlId="formBasicEmail"
									error={state?.errors?.email}
								/>
								<PasswordInput
									name="password"
									className="mb-3 psw-inp"
								    label="Password"
									error={state?.errors?.password}
                              />
                              <PasswordInput
									name="confirmPassword"
									className="mb-3 psw-inp"
								    label="Confirm Password"
								    error={state?.errors?.password}
							  />
							  

							  <SubmitButton title="REGISTER" className="login-btn" />
							  <div>If you already have an account. 
								  <Button
									  className="border-0 bg-transparent mb-1 text-decoration-underline"
									  onClick={handleLoginRedirect}>
									  Login Now!
								  </Button>
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
