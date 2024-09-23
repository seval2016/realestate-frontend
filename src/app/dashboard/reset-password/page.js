import PageHeader from '@/components/common/page-header'
import ChangePasswordForm from '@/components/dashboard/change-password/change-password-form'
import React from 'react'

const Page = () => {
  return (
    <>
          <PageHeader title="RESET PASSWORD" />
          <Spacer />
          <ChangePasswordForm />
    </>
  )
}

export default Page
