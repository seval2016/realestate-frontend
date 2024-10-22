"use client";
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import TextInput from '../common/form-fields/text-input';
import PasswordInput from '../common/form-fields/password-input';
import SubmitButton from '../common/form-fields/submit-button';
import "./login-form.scss";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Formun varsayılan gönderim davranışını engelle

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Giriş başarısız!'); // Hata durumu
      }

      const data = await response.json();
      // Başarılı giriş sonrası yapılacak işlemler (örneğin, yönlendirme)
      console.log('Giriş başarılı:', data);
    } catch (error) {
      setErrorMessage(error.message); // Hata mesajını state'e ekle
      console.error('Hata:', error);
    }
  };

  return (
    <Container className="w-25">
      <Row className="justify-content-center">
        <Col>
          <Card className="border-0">
            <Card.Body>
              <Form className="login-form" onSubmit={handleLogin}>
                <TextInput
                  className="mb-3 txt-inp"
                  label="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PasswordInput
                  name="password"
                  className="mb-3"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
                {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}

                <Button className='forgot-btn d-flex border-0 bg-transparent'>Forgot password?</Button>
                
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
  );
};

export default LoginForm;