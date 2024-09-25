import PageHeader from '@/components/common/page-header'
import AdvertCreateForm from '@/components/dashboard/advert/advert-create-form'
import React from 'react'

const Page = () => {
  return (
    <>
          <PageHeader title="New Advert" />
          <Spacer />
          <AdvertCreateForm/>
          <Spacer />
          
    </>
  )
}

export default Page
