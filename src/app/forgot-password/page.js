import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import ForgotPasswordForm from '@/components/forgot-password/forgot-password-form'

import React from 'react'

export const metadata = {
  title: "Login"

}

const Page = () => {
  return (
    <>
      <PageHeader title="FORGOT PASSWORD" />
      <ForgotPasswordForm />
      <Spacer/>
      
    </>
  )
}

export default Page