import React from 'react'
import DashboardStats from '@/components/dashboard/admin/DashboardStats'
import ManagementShortcuts from '@/components/dashboard/admin/ManagementShortcuts'
import NotificationsPanel from '@/components/dashboard/admin/NotificationsPanel'
import AdvertsList from '@/components/dashboard/advert/AdvertsList';

export const metadata = {
    title: "Login"
  
  }


const page = () => {
  const notifications = [
    { type: 'info', message: 'Sistem güncellemesi yapılacak.', date: '2024-10-15' },
    { type: 'warning', message: 'Sunucu bakımda olacak.', date: '2024-10-20' }
  ];

  return (
    <div>
      <h1>Admin Paneli</h1>
      <DashboardStats totalUsers={120} totalPosts={50} totalComments={300} />
      <ManagementShortcuts />
      <NotificationsPanel notifications={notifications} />
      <AdvertsList/>

    </div>
  );
};

export default page;

