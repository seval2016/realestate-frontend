import React from 'react'
import ImageLoading from './image-loading'
import { Container } from 'react-bootstrap'
import ImageSelector from './image-selector'
import Spacer from '@/components/common/spacer'

const Images = () => {
  const imageList = [
    "/img/image-selector/select-1.jpg",
    "/img/image-selector/select-2.jpg",
    "/img/image-selector/select-3.jpg",
    "/img/image-selector/select-4.jpg"
  ];
  return (
      <Container className="w-75">
      <ImageLoading />
      <Spacer/>
       <ImageSelector images={imageList} />
    </Container>
  )
}

export default Images
