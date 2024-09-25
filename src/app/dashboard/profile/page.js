import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import DeleteProfile from '@/components/dashboard/profile/delete-profile'
import React from 'react'

const Page = () => {
  return (
    <>
          <PageHeader title="MY PROFILE" />
          <Spacer />
          <ProfileForm />
          <Spacer />
          <DeleteProfile />
          <Spacer/>
    </>
  )
}

export default Page
