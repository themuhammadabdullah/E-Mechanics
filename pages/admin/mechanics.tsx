// pages/admin/mechanics.tsx
import React from 'react';
import AdminMechanicsList from '../../components/admin/AdminMechanicsList';

const mechanicsData = [
  { id: 1, name: 'John Doe', specialty: 'Engine Repair' },
  { id: 2, name: 'Jane Smith', specialty: 'Brake Service' },
  // Add more mechanics data
];

const AdminMechanicsPage: React.FC = () => {
  return <AdminMechanicsList mechanics={mechanicsData} />;
};

export default AdminMechanicsPage;
