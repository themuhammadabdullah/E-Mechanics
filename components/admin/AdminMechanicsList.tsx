// components/admin/AdminMechanicsList.tsx
import React from 'react';

interface AdminMechanicsListProps {
  mechanics: { id: number; name: string; specialty: string }[];
}

const AdminMechanicsList: React.FC<AdminMechanicsListProps> = ({ mechanics }) => {
  return (
    <div>
      <h2>Admin Mechanics List</h2>
      <ul>
        {mechanics.map((mechanic) => (
          <li key={mechanic.id}>
            {mechanic.name} - {mechanic.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMechanicsList;
