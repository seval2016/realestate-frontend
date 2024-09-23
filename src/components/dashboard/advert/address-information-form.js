import TextInput from '@/components/common/form-fields/text-input'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SelectInp from './select-inp'
import SubmitButton from '@/components/common/form-fields/submit-button'

const AddressInformationForm = ({ showSubmitButton = true }) => {
  const handleSubmit = () => {
    // Form submit işlemleri burada yapılabilir
    console.log("Form submitted!");
  };

  return (
    <Row className="justify-content-center">
      <h3 className="mb-4 mt-4">Address Information</h3>
      
      <Col xl={4}>
        <div>Country</div>
        <SelectInp title="Choose" className="fs-5 mt-2" />
      </Col>
      <Col xl={4}>
        <div>City</div>
        <SelectInp title="Choose" className="fs-5 mt-2" />
      </Col>
      <Col xl={4}>
        <div>Neighbourhood</div>
        <SelectInp title="Choose" className="fs-5 mt-2" />
      </Col>

      <Col xs={12}>
        <TextInput className="mb-3 mt-4" label="Location" name="location" />
      </Col>

      <h3 className="mb-4 mt-4">Properties</h3>
      
      <Col xs={4}>
        <TextInput className="mb-3 txt-inp" label="Floor" name="floor" />
      </Col>
      <Col xl={4}>
        <TextInput className="mb-3 txt-inp" label="Bedroom" name="bedroom" />
      </Col>
      <Col xl={4}>
        <TextInput className="mb-3 txt-inp" label="Bathroom" name="bathroom" />
      </Col>
      <Col xl={4}>
        <TextInput className="mb-3 txt-inp" label="Garage" name="garage" />
      </Col>
      <Col xl={4}>
        <TextInput className="mb-3 txt-inp" label="Year of built" name="year of built" />
      </Col>
      <Col xl={4}>
        <TextInput className="mb-3 txt-inp" label="Size" name="size" />
      </Col>
      
      {/* Submit button, showSubmitButton prop'una göre render edilir */}
      {showSubmitButton && (
        <Col xs={12} className="text-center mt-4">
          <SubmitButton title="UPDATE" className="w-25" onClick={handleSubmit} />
        </Col>
      )}
    </Row>
  );
};

export default AddressInformationForm;
