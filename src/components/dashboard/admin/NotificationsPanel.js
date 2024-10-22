import React from 'react';

const NotificationsPanel = ({ notifications }) => {
  return (
    <div className="notifications-panel">
      <h2>Bildirimler</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className={`notification ${notification.type}`}>
            <p>{notification.message}</p>
            <small>{notification.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default NotificationsPanel;