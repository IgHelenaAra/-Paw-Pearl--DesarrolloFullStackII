import React from 'react';

export const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard General', icon: '📊' },
    { id: 'products', label: 'Gestión de Productos', icon: '📦' },
    { id: 'orders', label: 'Pedidos y Solicitudes', icon: '🛒' },
    { id: 'users', label: 'Usuarios Registrados', icon: '👥' }
  ];

  return (
    <div className="admin-sidebar bg-white rounded-5 shadow-sm border p-3">
      {/* CABECERA SIDEBAR */}
      <div className="d-flex align-items-center gap-3 mb-4 px-2 pt-2 border-bottom pb-3">
        <div className="bg-light p-2.5 rounded-circle text-teal fs-4 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '48px', height: '48px' }}>
          🛡️
        </div>
        <div>
          <h6 className="fw-bold mb-0 text-navy fs-6">Administración</h6>
          <small className="text-muted">Panel de Control</small>
        </div>
      </div>

      {/* LISTA DE PESTAÑAS */}
      <div className="nav flex-column gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`btn d-flex align-items-center gap-3 text-start rounded-4 py-2.5 px-3 fw-bold transition-all ${
              activeTab === item.id 
                ? 'btn-teal text-white shadow-sm' 
                : 'btn-light text-navy border-0'
            }`}
          >
            <span className="fs-5">{item.icon}</span>
            <span className="small">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};