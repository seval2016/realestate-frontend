import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import EditAdvertForm from '@/components/dashboard/advert/edit-advert-form'
import React from 'react'

const Page = () => {
  return (
    <>
          <PageHeader title="Edit Advert" />
          <Spacer />
          <EditAdvertForm />
          <Spacer />
    </>
  )
}

export default Page
