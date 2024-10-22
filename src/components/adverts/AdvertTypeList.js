"use client";
import React, { useState } from 'react';
import { Container, Button, Table, Modal } from 'react-bootstrap';

const initialAdvertTypes = [
  { id: 1, name: 'Standard' },
  { id: 2, name: 'Premium' },
  { id: 3, name: 'Luxury' }
];

const AdvertTypeList = () => {
  const [advertTypes, setAdvertTypes] = useState(initialAdvertTypes);
  const [editingType, setEditingType] = useState(null);
  const [newType, setNewType] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  const handleSaveEdit = () => {
    const updatedTypes = advertTypes.map(type => 
      type.id === editingType.id ? { ...type, name: editingType.name } : type
    );
    setAdvertTypes(updatedTypes);
    setEditingType(null);
    logChange(`Advert type edited: ${editingType.name}`);
    setShowEditModal(false);
  };

  const handleDelete = (type) => {
    setAdvertTypes(advertTypes.filter(t => t.id !== type.id));
    logChange(`Advert type deleted: ${type.name}`);
  };

  const logChange = (message) => {
    console.log(message); // Burada gerçek loglama işlemi yapılabilir
  };

  return (
    <Container>
      <h1>Advert Types</h1>
      <Button onClick={() => setShowAddModal(true)}>Add New Advert Type</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {advertTypes.map(type => (
            <tr key={type.id}>
              <td>{type.name}</td>
              <td>
                <Button variant="warning" onClick={() => { setEditingType(type); setShowEditModal(true); }}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(type)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add New Advert Type Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Advert Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="text" 
            placeholder="Advert Type Name" 
            value={newType} 
            onChange={(e) => setNewType(e.target.value)} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
          <Button variant="primary" onClick={() => {
            setAdvertTypes([...advertTypes, { id: advertTypes.length + 1, name: newType }]);
            logChange(`Advert type added: ${newType}`);
            setNewType('');
            setShowAddModal(false);
          }}>Add</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Advert Type Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Advert Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="text" 
            value={editingType ? editingType.name : ''} 
            onChange={(e) => setEditingType({ ...editingType, name: e.target.value })} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSaveEdit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdvertTypeList;