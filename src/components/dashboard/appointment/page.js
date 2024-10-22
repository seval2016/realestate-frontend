import React, { useState } from 'react';
import AppointmentList from '@/components/dashboard/appointment/AppointmentList';
import AppointmentSearch from '@/components/dashboard/appointment/AppointmentSearch';

// Örnek randevular
const appointmentsData = [
  { id: 1, date: '2024-10-10', time: '10:00', doctor: 'Dr. Ahmet', location: 'İstanbul' },
  { id: 2, date: '2024-10-15', time: '12:00', doctor: 'Dr. Mehmet', location: 'Ankara' },
  { id: 3, date: '2024-10-20', time: '14:00', doctor: 'Dr. Ayşe', location: 'İzmir' }
];

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState(appointmentsData);
  const [filteredAppointments, setFilteredAppointments] = useState(appointmentsData);

  return (
    <div>
      <h1>Randevular</h1>
      <AppointmentSearch appointments={appointments} setFilteredAppointments={setFilteredAppointments} />
      <AppointmentList appointments={filteredAppointments} />
    </div>
  );
};

export default AppointmentPage;