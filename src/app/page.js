import Spacer from "@/components/common/spacer";
import ContactExpert from "@/components/home/contact-expert";
import DiscoverProperties from "@/components/home/discover-properties";
import DreamHouse from "@/components/home/dream-house";
import ExplorePropertiesCity from "@/components/home/explore-properties-city";

import ExplorePropertiesType from "@/components/home/explore-properties-type";
import FindSellingOption from "@/components/about/find-selling-option";

import Slider from "@/components/home/slider";
import React from "react";

const Page = () => {
  return (
    <div>
      <Spacer />
      <Slider />
      <Spacer />
      <ExplorePropertiesType />
      <Spacer />
      <ExplorePropertiesCity />
      <Spacer />
      <DreamHouse />
      <Spacer />
      <DiscoverProperties />
      <Spacer />
      <FindSellingOption />
      <Spacer />
      <ContactExpert />
      <Spacer />
    </div>
  );
};

export default Page;
