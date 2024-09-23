
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import AdvertCreateForm from '@/components/dashboard/advert/advert-create-form'
import EditAdvertForm from '@/components/dashboard/advert/edit-advert-form'
import ChangePasswordForm from '@/components/dashboard/change-password/change-password-form'
import MyAdvertList from '@/components/dashboard/my-advert/my-advert-list'
import MyFavorites from '@/components/dashboard/my-advert/my-favorites'
import TourRequestDetailForm from '@/components/dashboard/tour-request/tour-request-detail-form'
import TourRequestList from '@/components/dashboard/tour-request/tour-request-list'
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
      <MyAdvertList />
      <Spacer />
      <EditAdvertForm />
      <Spacer />
      <TourRequestList />
      <Spacer />
      <TourRequestDetailForm />
      <Spacer />
      <AdvertCreateForm/>
      <Spacer />
      <MyFavorites />
      <Spacer />
      <ChangePasswordForm/>
    </>
  )
}

export default Page