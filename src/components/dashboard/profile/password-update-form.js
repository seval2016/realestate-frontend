import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';  //  handlePasswordUpdate 'i gozden gecirelim

const PasswordUpdateForm = () => {
    const { handlePasswordUpdate } = useContext(AuthContext);  
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match!');
            return;
        }
        if (!validatePassword(newPassword)) {
            setMessage('Password must contain uppercase, lowercase, number, and special character.');
            return;
        }

        try {
            await handlePasswordUpdate({ currentPassword, newPassword });
            setMessage('Password updated successfully!');
        } catch (error) {
            setMessage('Error updating password.');
        }
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return passwordRegex.test(password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Current Password</label>
                <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
            </div>
            <div>
                <label>New Password</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            </div>
            <div>
                <label>Confirm New Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <button type="submit">Update Password</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default PasswordUpdateForm;
