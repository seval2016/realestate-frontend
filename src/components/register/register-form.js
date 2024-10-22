"use client";
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import TextInput from '../common/form-fields/text-input';
import PasswordInput from '../common/form-fields/password-input';
import SubmitButton from '../common/form-fields/submit-button';

const RegisterForm = () => {
  // Form verilerini tutmak için state
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Hata mesajı tutmak için state
  const [errorMessage, setErrorMessage] = useState('');
  
  // Kullanıcı rolü
  const userRole = 'Admin'; // Kullanıcı rolü burada sabit olarak tanımlandı

  // Form gönderim işlemi
  const handleRegister = async (event) => {
    event.preventDefault(); // Formun varsayılan davranışını engelle

    try {
      const response = await fetch(`http://localhost:8080/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // formData state'ini burada kullanıyoruz
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Kayıt işlemi başarısız!'); // Hata mesajını ayarla
        throw new Error('Kayıt işlemi başarısız!'); // Hata durumu
      }

      const result = await response.json();
      console.log('Kayıt başarılı:', result);
      // Başarılı kayıt durumunda yapılacak işlemler, örneğin kullanıcıyı anasayfaya yönlendirme

    } catch (error) {
      console.error('Hata:', error);
      // Hata durumunda kullanıcıya bilgi verme
    }
  };

  // Form alanlarının değişimini yönetme
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <Container className="w-25">
      <Row className="justify-content-center">
        <Col>
          <Card className="border-0">
            <Card.Body>
              <Form className="login-form" onSubmit={handleRegister}> {/* handleRegister burada tanımlandı */}
                <TextInput
                  className="mb-3 txt-inp"
                  label="First Name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />

                <TextInput
                  className="mb-3 txt-inp"
                  label="Last Name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />

                <TextInput
                  className="mb-3 txt-inp"
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <TextInput
                  className="mb-3 txt-inp"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <TextInput 
                className="mb-3 txt-inp"
                label="Username"
                name ="username"   
                value={formData.username}
                onChange={handleChange}

                   />


                <PasswordInput
                  name="password"
                  className="mb-3"
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <PasswordInput
                  name="confirmPassword"
                  className="mb-3"
                  label="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

                {/* Hata mesajı gösterimi */}
                {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}

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
  );
};

export default RegisterForm;
