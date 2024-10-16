"use client";
import SubmitButton from '@/components/common/form-fields/submit-button';
import TextInput from '@/components/common/form-fields/text-input';
import React from 'react';
import { Card, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import { useFormState } from 'react-dom';
import { forgotPasswordAction } from '@/actions/forgot-password-action';
import { initialResponse } from '@/helpers/form-validation';

const ForgotPasswordForm = () => {
  const [state, dispatch] = useFormState(forgotPasswordAction, initialResponse);

  return (
    <Container className="w-25">
      <Row className="justify-content-center">
        <Col>
          <Card className="border-0">
            <Card.Body>

              {!state?.ok && state?.message ? (
                <Alert variant="danger">{state?.message}</Alert>
              ) : null}
              {state?.ok && state?.message ? (
                <Alert variant="success">{state?.message}</Alert>
              ) : null}

              <Form action={dispatch} className="login-form">
                <TextInput
                  className="mb-3 txt-inp"
                  label="Email"
                  name="email"
                />

                <SubmitButton title="SEND RESET CODE" className="login-btn mb-5 fs-6" />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordForm;
