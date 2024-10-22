import React, { useState } from 'react';

const AppointmentSearch = ({ appointments, setFilteredAppointments }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = appointments.filter((appointment) =>
      appointment.doctor.toLowerCase().includes(e.target.value.toLowerCase()) ||
      appointment.date.includes(e.target.value)
    );
    setFilteredAppointments(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Randevu ara..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default AppointmentSearch;