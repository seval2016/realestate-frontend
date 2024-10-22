
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import RegisterForm from '@/components/register/register-form'
import React from 'react'


export const metadata = {
  title: "Register"

}


const Page = () => {
  return (
    <>
      <PageHeader title="REGISTER" />
      <RegisterForm />
      <Spacer />
    </>
  )
}

export default Page