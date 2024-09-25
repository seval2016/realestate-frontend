

import PropertiesPage from '@/components/adverts/properties-page';
import PageHeader from '@/components/common/page-header';
import Spacer from '@/components/common/spacer';
import React from 'react'

export const metadata = {
	title: "Properties",
	description: "Explore the variety of properties.",
};

const Page = () => {
  return (
    <>
      <PageHeader title="PROPERTIES" />
      <Spacer />
      <PropertiesPage/>
      <Spacer/>
      
    </>
  )
}

export default Page
