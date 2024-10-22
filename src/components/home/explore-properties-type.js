import React from "react";

import SectionTitle from "../common/section-title";
import Properties from "../explore-properties/properties";
import { Container } from "react-bootstrap";

const ExplorePropertiesType = () => {
  return (
    <Container className="">
      <SectionTitle title="Explore Properties" type="By Types" />

      <Properties />
    </Container>
  );
};

export default ExplorePropertiesType;
