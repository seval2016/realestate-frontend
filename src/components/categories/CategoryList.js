"use client";
import React, { useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const initialCategories = [
  { id: 1, name: 'Technology' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Finance' }
];

const CategoryList = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [editingCategory, setEditingCategory] = useState(null);
  const [newCategory, setNewCategory] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  const handleSaveEdit = () => {
    const updatedCategories = categories.map(cat => 
      cat.id === editingCategory.id ? { ...cat, name: editingCategory.name } : cat
    );
    setCategories(updatedCategories);
    setEditingCategory(null);
    logChange(`Category edited: ${editingCategory.name}`);
    setShowEditModal(false);
  };

  const handleDelete = (category) => {
    setCategories(categories.filter(cat => cat.id !== category.id));
    logChange(`Category deleted: ${category.name}`);
  };

  const logChange = (message) => {
    console.log(message); // Burada gerçek loglama işlemi yapılabilir
  };

  return (
    <Container>
      <h1>Categories</h1>
      <Button onClick={() => setShowAddModal(true)}>Add New Category</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <Button variant="warning" onClick={() => { setEditingCategory(category); setShowEditModal(true); }}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(category)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add New Category Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="text" 
            placeholder="Category Name" 
            value={newCategory} 
            onChange={(e) => setNewCategory(e.target.value)} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
          <Button variant="primary" onClick={() => {
            setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
            logChange(`Category added: ${newCategory}`);
            setNewCategory('');
            setShowAddModal(false);
          }}>Add</Button>
        </Modal.Footer>
      </Modal>
      

      {/* Edit Category Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="text" 
            value={editingCategory ? editingCategory.name : ''} 
            onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })} 
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

export default CategoryList;