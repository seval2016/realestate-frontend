import React from 'react'

import SectionTitle from '../common/section-title'
import PropertiesCity from '../explore-properties/properties-city'
import { Container } from 'react-bootstrap'




const ExplorePropertiesCity = () => {
  return (
    <Container className=''>
      
           <SectionTitle title="Explore Properties" type="By Cities"/>
          
            <PropertiesCity/>
        
    </Container>
  )
}

export default ExplorePropertiesCity