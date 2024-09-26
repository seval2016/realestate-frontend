"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const products = [
  { id: 1, name: 'Equestrian Family House', image: '/img/advert-list/family-house.jpg', category: "Villa",type: "For Sale" },
  { id: 2, name: 'Equestrian Family House', image: '/img/advert-list/family-house.jpg', category: "Villa",type: "For Sale" }
];

const imageBodyTemplate = (rowData) => {
  return <img src={rowData.image} alt={rowData.name} width="130" style={{ marginRight:"-16px"}}/>;
};


const actionBodyTemplate = (rowData) => {
  return (
    <div className="d-flex">
    <div className="">
    <Button 
        icon="pi pi-pencil" 
        className="p-button border-0 link-warning me-2"
        onClick={() => editProduct(rowData)}
  />
   </div>
   
  </div>
  );
};


 const editProduct = (product) => {
  console.log('Edit product', product);
};

const rowClassName = (data) => {
  return 'custom-row';  
};


const MyFavorites = () => {
  return (
    <Container >
    <DataTable value={products} tableStyle={{ minWidth: '60rem' }} className="" rowClassName={rowClassName}>
      
  <Column header="Property" body={imageBodyTemplate} className="img-property"></Column>
  <Column field="name" header="" className=""></Column>
  <Column field="category" header="Category" ></Column>
  <Column field="type" header="Type"></Column>
   <Column header="Action" body={actionBodyTemplate}></Column>
      
</DataTable>
  </Container>
  )
}

export default MyFavorites
