import React from 'react'
import { config } from '@/helpers/config'

const Map = () => {
  return (
      <iframe src={config.contact.map.embed}
          width="100%"
          height="650"
          style={{border:"0" , display: "block" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  )
}

export default Map
