"use client";
import React from 'react'
import { Container, Form } from 'react-bootstrap'

import CommonInformationForm from './common-information-form';
import AddressInformationForm from './address-information-form';

const AdvertForm = () => {
  return (
      <Container className=" w-75">
          <Form>   
          <CommonInformationForm showActive={true}/>
          <AddressInformationForm showSubmitButton={true} />
          </Form>
       </Container>
  )
}

export default AdvertForm
