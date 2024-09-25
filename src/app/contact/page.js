
import PageHeader from '@/components/common/page-header';
import Spacer from '@/components/common/spacer'
import Contact from '@/components/contact/contact';
import ContactForm from '@/components/contact/contact-form';
import React from 'react'

export const metadata = {
	title: "Contact Us",
	description:
		"Get in touch with us! Find our address, phone number, and email.",
};

const Page = () => {
  return (
    <>
      <PageHeader title="CONTACT US" />
      <Contact />
      <Spacer />
      
    </>
  )
}

export default Page
