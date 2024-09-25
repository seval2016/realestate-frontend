import PageHeader from '@/components/common/page-header'
import TourRequestDetailForm from '@/components/dashboard/tour-request/tour-request-detail-form'
import React from 'react'

const Page = () => {
  return (
    <>
          <PageHeader title="MY TOUR REQUESTS" />
          <Spacer />
          <TourRequestDetailForm />
          <Spacer />
      
          
    </>
  )
}

export default Page
