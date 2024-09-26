"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';



const products = [
  { id: 1, name: 'John Doe', status: 'Pending', date: '03/04/23', time:'10:30 PM' },
  { id: 2, name: 'John Doe', status: 'Pending', date: '03/04/23', time:'10:30 PM' },
  { id: 3, name: 'John Doe', status: 'Pending', date: '03/04/23', time:'10:30 PM' }
];

const header = <div className="table-header fs-2 mb-4">Tour Requests</div>;

const statusBodyTemplate = (rowData) => {
  return <span className=" bg-warning-subtle text-light-emphasis p-2 rounded-3">{rowData.status}</span>;
};


const actionBodyTemplate = (rowData) => {
  return (
    <div className="d-flex">
      <div className="check-btn">
      <Button 
          icon="pi pi-check" 
          className="p-button border-0 link-warning me-2 "
          onClick={() => chooseProduct(rowData)}  
    />
     </div>
      <div>
      <Button 
          icon="pi pi-times" 
          className="p-button border-0 link-warning link-dark"
          onClick={() => chooseProduct(rowData)}  
      />
    </div>
    </div>
  );
};

const chooseProduct = (product) => {
  console.log('Edit product', product);
};

const rowClassName = (data) => {
  return 'custom-row';  
};


const TourRequest = () => {
  return (
    <Container className="w-75" >
      <DataTable value={products} header={header} tableStyle={{ minWidth: '60rem' }} className=" fs-5" rowClassName={rowClassName}>
        
    
     <Column field="name" header="Guest" ></Column>
     <Column header="Status" body={statusBodyTemplate}></Column>
    <Column field="date" header="Tour Request Date" className=" text-light-emphasis"></Column>
    <Column field="time" header="Tour Request Time" className=" text-light-emphasis"></Column>
    <Column header="Action" body={actionBodyTemplate}></Column>
        
        
</DataTable>
    </Container>
  )
}

export default TourRequest
