import React from 'react'
import "./cities.scss"

const Cities = (props) => {

  const {title, value } = props;

  return (
    <div className="cities">
    <div className="circle">
      <h5 className="title">{title}</h5>
      <h6 className="value">{value}</h6>
    </div>
  </div>
  )
}

export default Cities
