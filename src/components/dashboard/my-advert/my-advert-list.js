"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import "./my-advert-list.scss"

const products = [
  { id: 1, name: 'Equestrian Family House', image: '/img/advert-list/family-house.jpg', price: "1400.00", date: '03/04/23', status: 'Pending', rating: 4 },
  { id: 2, name: 'Equestrian Family House', image: '/img/advert-list/family-house.jpg', price: "1400.00", date: '03/04/23', status: 'Pending', rating: 5 },
  { id: 2, name: 'Equestrian Family House', image: '/img/advert-list/family-house.jpg', price: "1400.00", date: '03/04/23', status: 'Pending', rating: 5 }
];



const imageBodyTemplate = (rowData) => {
  return <img src={rowData.image} alt={rowData.name} width="130" style={{ marginRight:"-16px"}}/>;
};

const priceBodyTemplate = (rowData) => {
  return `$${rowData.price}`;
};

const ratingBodyTemplate = (rowData) => {
  const totalStars = 5;  
  const fullStars = rowData.rating; 
  const emptyStars = totalStars - fullStars; 


 
  return (
      <div>
          {[...Array(fullStars)].map((_, i) => (
              <i key={`full-${i}`} className="pi pi-star" style={{ color: 'gold' }}></i>
          ))}
          {[...Array(emptyStars)].map((_, i) => (
              <i key={`empty-${i}`} className="pi pi-star" style={{ color: 'lightgray' }}></i>
          ))}
      </div>
  );
};

const statusBodyTemplate = (rowData) => {
  return <span className=" bg-warning-subtle text-light-emphasis p-2 rounded-3">{rowData.status}</span>;
};

const actionBodyTemplate = (rowData) => {
  return (
      <Button 
          icon="pi pi-pencil" 
          className="p-button border-0 link-warning bg-"
          onClick={() => editProduct(rowData)}  
      />
  );
};


 const editProduct = (product) => {
  console.log('Edit product', product);
};


const rowClassName = (data) => {
  return 'custom-row';  
};

const MyAdvertList = () => {
  return (
    <Container >
      <DataTable value={products} tableStyle={{ minWidth: '60rem' }} className="" rowClassName={rowClassName}>
        
    <Column header="Property" body={imageBodyTemplate} className="img-property"></Column>
    <Column field="name" header="" className=""></Column>
    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
    <Column field="date" header="Date"></Column>
    <Column header="Status" body={statusBodyTemplate}></Column>
    <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
    <Column header="Action" body={actionBodyTemplate}></Column>
        
        
</DataTable>
    </Container>
  )
}

export default MyAdvertList
