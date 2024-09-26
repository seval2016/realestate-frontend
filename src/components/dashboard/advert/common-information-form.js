import TextInput from '@/components/common/form-fields/text-input'
import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import SelectInp from './select-inp'

const CommonInformationForm = ({ showActive }) => { 
  return (
    <Row className="justify-content-center">
      <h3 className="mb-4">Common Information</h3>
      <Col xs={12}>
        <TextInput className="mb-3" label="Title" name="title" />
      </Col>

      <Col xs={12}>
        <TextInput className="mb-3 txt-inp" label="Description" name="description" as="textarea" />
      </Col>

      <Col xl={3}>
        <TextInput className="mb-3 txt-inp" label="Price" name="price" />
      </Col>

      <Col xl={3}>
        <div>Advert Type</div>
        <SelectInp title="For Sale" className="fs-5 mt-2" />
      </Col>

      <Col xl={3}>
        <div>Category</div>
        <SelectInp title="Villa" className="fs-5 mt-2" />
      </Col>

      {/* Active kısmı, showActive prop'u true ise render edilir */}
      {showActive && (
        <Col xl={3}>
          <div className="ms-4">Active</div>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label=""
            className="fs-1 ms-4"
          />
        </Col>
      )}
    </Row>
  );
}

export default CommonInformationForm;
