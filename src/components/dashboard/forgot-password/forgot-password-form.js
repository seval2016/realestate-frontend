import SubmitButton from '@/components/common/form-fields/submit-button'
import TextInput from '@/components/common/form-fields/text-input'
import React from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'

const ForgotPasswordForm = () => {
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

                <SubmitButton title="SEND RESET CODE" className="login-btn mb-5" />
      
                        </Form>
                </Card.Body>
            </Card>
        </Col>
        
    </Row>

</Container>
  )
}

export default ForgotPasswordForm
