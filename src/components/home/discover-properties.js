import React from 'react'
import SectionTitle from '../common/section-title'
import PopularProperties from '../discover-properties/popular-properties'
import { Container } from 'react-bootstrap'

const DiscoverProperties = () => {
  return (
    <Container>
      <SectionTitle title="Discover Popular Properties" type="Featured Properties"></SectionTitle>
      <PopularProperties/>
    </Container>
  )
}

export default DiscoverProperties
