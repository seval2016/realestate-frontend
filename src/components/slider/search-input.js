import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';
import "./search-input.scss";


const SearchInput = () => {
  return (
    <div className="p-inputgroup" >
      <InputText className='input-text'/>
    <Button icon="pi pi-search" className="p-button" />
</div>
  )
}

export default SearchInput
