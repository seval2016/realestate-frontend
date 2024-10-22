import React from 'react';

const DashboardStats = ({ totalUsers, totalPosts, totalComments }) => {
  return (
    <div className="stats-panel">
      <h2>Site Genel Durumu</h2>
      <div className="stats">
        <div className="stat-item">
          <h3>Kullanıcı Sayısı</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="stat-item">
          <h3>Gönderi Sayısı</h3>
          <p>{totalPosts}</p>
        </div>
        <div className="stat-item">
          <h3>Yorum Sayısı</h3>
          <p>{totalComments}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;