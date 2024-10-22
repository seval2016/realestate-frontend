import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import "./tour-request-list.scss"

const TourRequestList = () => {
  const [requests, setRequests] = useState([]); // API'den gelen tur taleplerini tutan state
  const [editingProduct, setEditingProduct] = useState(null); // Düzenleme yapılan tur talebi
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false); // Silme onay modali
  const [selectedProduct, setSelectedProduct] = useState(null); // Silinecek ürün

  useEffect(() => {
    // API'den verileri çekiyoruz
    fetch('/api/tourRequests')
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);

  // Görüntü için resim şablonu
  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.image} alt={rowData.name} width="130" style={{ marginRight: "-16px" }} />;
  };

  // Durum şablonu (renkli durum göstergesi)
  const statusBodyTemplate = (rowData) => {
    const statusClass = rowData.status === 'Approved' ? 'bg-success-subtle' :
                        rowData.status === 'Rejected' ? 'bg-danger-subtle' :
                        'bg-warning-subtle';
    return <span className={`text-light-emphasis p-2 rounded-3 ${statusClass}`}>{rowData.status}</span>;
  };

  // Düzenleme ve silme butonları
  const actionBodyTemplate = (rowData) => {
    return (
      <div className="d-flex">
        <Button 
          icon="pi pi-pencil" 
          className="p-button border-0 link-warning me-2"
          onClick={() => setEditingProduct(rowData)} // Düzenleme modalı aç
        />
        <Button 
          icon="pi pi-trash" 
          className="p-button border-0 link-warning me-2"
          onClick={() => {
            setDeleteDialogVisible(true);
            setSelectedProduct(rowData);
          }} // Silme modalı aç
        />
      </div>
    );
  };

  // Güncelleme işlemi
  const handleSave = () => {
    const updatedProducts = requests.map(p => p.id === editingProduct.id ? editingProduct : p);
    setRequests(updatedProducts);
    setEditingProduct(null);
  };

  // Silme işlemi
  const deleteProduct = () => {
    const updatedProducts = requests.filter(p => p.id !== selectedProduct.id);
    setRequests(updatedProducts);
    setDeleteDialogVisible(false);
  };

  // Tarih ve saat düzenleme inputları
  const handleDateChange = (e) => {
    setEditingProduct(prev => ({ ...prev, date: e.target.value }));
  };

  const handleTimeChange = (e) => {
    setEditingProduct(prev => ({ ...prev, time: e.target.value }));
  };

  return (
    <Container>
      <h1>Tour Requests</h1>
      <DataTable value={requests} tableStyle={{ minWidth: '60rem' }} rowClassName="custom-row">
        <Column header="Property" body={imageBodyTemplate} className="img-property"></Column>
        <Column field="name" header="Tour Name"></Column>
        <Column field="owner" header="Owner"></Column>
        <Column header="Status" body={statusBodyTemplate}></Column>
        <Column field="date" header="Tour Request Date"></Column>
        <Column field="time" header="Tour Request Time"></Column>
        <Column header="Action" body={actionBodyTemplate}></Column>
      </DataTable>

      {/* Düzenleme Modalı */}
      {editingProduct && (
        <Dialog header="Edit Tour Request" visible={!!editingProduct} onHide={() => setEditingProduct(null)}>
          <div>
            <h5>Tour Request Date</h5>
            <Calendar value={editingProduct.date} onChange={(e) => handleDateChange(e)} />
          </div>
          <div>
            <h5>Tour Request Time</h5>
            <InputText value={editingProduct.time} onChange={(e) => handleTimeChange(e)} />
          </div>
          <Button label="Save" icon="pi pi-check" onClick={handleSave} className="mt-3" />
        </Dialog>
      )}

      {/* Silme Onay Modalı */}
      <Dialog visible={deleteDialogVisible} onHide={() => setDeleteDialogVisible(false)} header="Confirm Delete">
        <p>Are you sure you want to delete this tour request?</p>
        <Button label="Yes" icon="pi pi-check" onClick={deleteProduct} />
        <Button label="No" icon="pi pi-times" onClick={() => setDeleteDialogVisible(false)} className="ml-2" />
      </Dialog>
    </Container>
  );
};


export default TourRequestList;
