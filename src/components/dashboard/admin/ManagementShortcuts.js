import React from 'react';
import Link from 'next/link';

const ManagementShortcuts = () => {
  return (
    <div className="shortcuts-panel">
      <h2>Kısayollar</h2>
      <div className="shortcuts">
        <Link href="/admin/users">
          <a className="shortcut-item">Kullanıcı Yönetimi</a>
        </Link>
        <Link href="/admin/posts">
          <a className="shortcut-item">İçerik Yönetimi</a>
        </Link>
      </div>
    </div>
  );
};

export default ManagementShortcuts;