import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import MyAdvertList from '@/components/dashboard/my-advert/my-advert-list'
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
