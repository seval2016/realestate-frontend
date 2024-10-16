"use client";
import React from 'react'
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import TextInput from '../common/form-fields/text-input';
import PasswordInput from '../common/form-fields/password-input';
import { useFormState } from "react-dom";
import { loginAction } from "@/actions/auth-actions";
import { initialResponse } from "@/helpers/form-validation";
import { useRouter } from 'next/navigation';

import "./login-form.scss"
import SubmitButton from '../common/form-fields/submit-button';

const LoginForm = () => {

	const [state, dispatch] = useFormState(loginAction, initialResponse); 
	const router = useRouter(); 

  const handleRegisterRedirect = () => {
    router.push('/register'); 
	};
	
	const handleForgotPasswordRedirect = () => {
		router.push('/forgot-password'); 
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
									label="Email"
								    name="email"
								    type="email"
								  error={state?.errors?.email}
								  defaultValue=""
				
								/>
								<PasswordInput
									name="password"
									className="mb-3 psw-inp"
								    label="Password"
								    error={state?.errors?.password}
									defaultValue=""
							  />
							  
							  <Button
								  className=' forgot-btn d-flex border-0 bg-transparent'
								  onClick={handleForgotPasswordRedirect}
							  >
								  Forgot password?
							  </Button>

							  <SubmitButton title="LOGIN" className="login-btn" />
							  <div>If you don't have an account. 
								  <Button
									  className="border-0 bg-transparent mb-1 text-decoration-underline"
									  onClick={handleRegisterRedirect}>
									  Register Now!
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

export default LoginForm
