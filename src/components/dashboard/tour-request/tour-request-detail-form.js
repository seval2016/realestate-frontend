"use client"
import DateInput from '@/components/common/form-fields/date-input';
import SubmitButton from '@/components/common/form-fields/submit-button';
import TimeInput from '@/components/common/form-fields/time-input';
import Image from 'next/image';
import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

const TourRequestDetailForm = () => {
  return (
    <Container>
          <Form>
           <Row className=" justify-content-center g-5">
           <Col xs={6}>
                      <Image
                          src="/img/advert-list/family-house.jpg"
                          width="600"
                          height="300"
                      />
            </Col> 
                  
             <Col xs={3} >
                      <h2>Equestrian Family House</h2>
                      <h6 className="mb-3">California City,CA,USA</h6>     
                      <DateInput label="Tour Date" className="mt-4" />
            </Col> 

                  <Col xs={3}>
                      <h2 className="mb-3">$1400.00</h2>
                      <TimeInput label="Tour Time" className="mt-5" />  
                      <div className="cancel-update-btn mt-5 ms-2">
                      <SubmitButton title="CANCEL" className="me-3 bg-body-secondary"/>
                      <SubmitButton title="UPDATE"/>
                   </div>
                  </Col>
        
              </Row>
              
                  

              
         </Form>
    </Container>
  );
};

export default TourRequestDetailForm;

