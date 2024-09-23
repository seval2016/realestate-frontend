import PageHeader from '@/components/common/page-header'
import MyAdvertList from '@/components/dashboard/advert/my-advert-list'
import React from 'react'

const Page = () => {
  return (
    <>
      <PageHeader title="MY ADVERTS" />
      <Spacer />
      <MyAdvertList />
      <Spacer />


    </>
  )
}

export default Page
