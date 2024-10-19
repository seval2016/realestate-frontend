import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';  

const ProfileUpdateForm = () => {
    const { user, handleUpdateProfile } = useContext(AuthContext);  //  handleUpdateProfile dosyasini eklemek gerekiyor unutmayalim
    const [formData, setFormData] = useState({
        firstName: user.firstName || '',
        email: user.email || '',
        phone: user.phone || ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleUpdateProfile(formData);  
            setMessage('Profile updated successfully!');
        } catch (error) {
            setMessage('Error updating profile.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <button type="submit">Update Profile</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ProfileUpdateForm;
