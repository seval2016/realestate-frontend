

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      <h2>Randevularım</h2>
      <ul>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <li key={appointment.id}>
              <p>Tarih: {appointment.date}</p>
              <p>Saat: {appointment.time}</p>
              <p>Doktor: {appointment.doctor}</p>
              <p>Konum: {appointment.location}</p>
            </li>
          ))
        ) : (
          <p>Henüz bir randevunuz bulunmamaktadır.</p>
        )}
      </ul>
    </div>
  );
};

export default AppointmentList;
