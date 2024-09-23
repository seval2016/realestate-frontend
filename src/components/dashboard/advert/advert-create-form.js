"use client";
import React from "react";
import { Container, Form } from "react-bootstrap";
import CommonInformationForm from "./common-information-form";
import AddressInformationForm from "./address-information-form";
import ImageSelector from "./image-selector";
import SubmitButton from "@/components/common/form-fields/submit-button";
import Spacer from "@/components/common/spacer";

const AdvertCreateForm = () => {
  const imageList = [
    "/img/image-selector/select-1.jpg",
    "/img/image-selector/select-2.jpg",
    "/img/image-selector/select-3.jpg",
    "/img/image-selector/select-4.jpg",
  ];

  return (
    <Container className=" w-75">
      <Form>
        <CommonInformationForm showActive={false} />
        <AddressInformationForm showSubmitButton={false} />
        <Spacer />
        <ImageSelector images={imageList} />
        <Spacer />
        <div className="d-flex justify-content-end">
          <SubmitButton title="CREATE" className="w-25" />
        </div>
      </Form>
    </Container>
  );
};

export default AdvertCreateForm;
