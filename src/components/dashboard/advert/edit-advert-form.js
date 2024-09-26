import React from 'react'
import TourRequest from './tour-request'
import AdvertForm from './advert-form'
import "./edit-advert-form.scss"
import Images from './images'
import Spacer from '@/components/common/spacer'

const EditAdvertForm = () => {
  return (
    <div>
      <AdvertForm />
      <Spacer/>
      <Images />
      <Spacer/>
      <TourRequest/>
    </div>
  )
}

export default EditAdvertForm
