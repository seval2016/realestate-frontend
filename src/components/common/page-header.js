import React from 'react'
import "./page-header.scss";
import Image from 'next/image';

const PageHeader = ({title}) => {
  return (
    <div className="page-header">
      <Image src="/img/background/background.jpg"
        alt="My Image"
        width={1800}
        height={300}
         />
      <h1 className="page-header">{title}</h1>
    </div>
  )
}

export default PageHeader