"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import "./tour-request-list.scss"
const products = [
  { id: 1, name: 'Equestrian Family House', image: '/img/advert-list/family-house.jpg', owner: "John Doe",status: 'Pending', date: '03/04/23',  time:'10:30 PM' },
  { id: 2, name: 'Equestrian Family House', image: '/img/advert-list/family-house.jpg', owner: "John Doe",status: 'Pending', date: '03/04/23',  time:'10:30 PM' }
];

const imageBodyTemplate = (rowData) => {
  return <img src={rowData.image} alt={rowData.name} width="130" style={{ marginRight:"-16px"}}/>;
};

const statusBodyTemplate = (rowData) => {
  return <span className=" bg-warning-subtle text-light-emphasis p-2 rounded-3">{rowData.status}</span>;
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
    <div>
    <Button 
        icon="pi pi-trash" 
        className="p-button border-0 link-warning me-2"
        onClick={() => deleteProduct(rowData)}  
    />
  </div>
  </div>
  );
};


 const editProduct = (product) => {
  console.log('Edit product', product);
};
const deleteProduct = (product) => {
  console.log('Delete product', product);
};

const rowClassName = (data) => {
  return 'custom-row';  
};


const TourRequestList = () => {
  return (
    <Container >
    <DataTable value={products} tableStyle={{ minWidth: '60rem' }} className="" rowClassName={rowClassName}>
      
  <Column header="Property" body={imageBodyTemplate} className="img-property"></Column>
  <Column field="name" header="" className=""></Column>
  <Column field="owner" header="Owner" ></Column>
  <Column header="Status" body={statusBodyTemplate}></Column>
  <Column field="date" header="Tour Request Date" className=" text-light-emphasis"></Column>
  <Column field="time" header="Tour Request Time" className=" text-light-emphasis"></Column>
   <Column header="Action" body={actionBodyTemplate}></Column>
      
      
</DataTable>
  </Container>
  )
}

export default TourRequestList
