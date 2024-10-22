
import Spacer from "@/components/common/spacer";
import FindSellingOption from "@/components/about/find-selling-option";
import React from "react";
import TeamMembers from "@/components/about/team-members";
import PageHeader from "@/components/common/page-header";
import ContactExpert from "@/components/home/contact-expert";
import MissionToChange from "@/components/about/mission-to-change";

export const metadata = {
	title: "About Us",
	description: "Learn more about our company, mission, and vision.",
};

const Page = () => {
  return (
    <>
      <PageHeader title="ABOUT" />
      <Spacer />
    
      <MissionToChange />
      <Spacer />
      <FindSellingOption />
      <Spacer />
      <TeamMembers />
      <Spacer />
      <ContactExpert />
      <Spacer />


    </>
  );
};

export default Page;
