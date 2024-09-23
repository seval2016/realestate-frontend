"use client"
import PasswordInput from '@/components/common/form-fields/password-input'
import SubmitButton from '@/components/common/form-fields/submit-button'
import React from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'

const ChangePasswordForm = () => {
  return (
    <Container className=" w-25">
    <Row className=" justify-content-center">
        <Col>
            <Card className=" border-0">
                <Card.Body>

                    <Form className="login-form">
                              <PasswordInput
                               className="mb-3 txt-inp"
                               label="Current Password"
                               name="current password"
                              />

                              <PasswordInput
                               className="mb-3 txt-inp"
                               label="New Password"
                               name="new password"
                              />

                              <PasswordInput
                               className="mb-3 txt-inp"
                               label="Retry New Password"
                               name="retry new password"
                              />
                      
                

                <SubmitButton title="UPDATE" className="login-btn mb-5" />
                        </Form>
                </Card.Body>
            </Card>
        </Col>
        
    </Row>

</Container>
  )
}

export default ChangePasswordForm
