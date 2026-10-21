import React, { useState, useEffect } from 'react';
import { mockDB } from '../data/mockDatabase';

export const MyRequests = () => {
  const [orders, setOrders] = useState([]);

  const loadOrders = () => {
    setOrders(mockDB.getOrders());
  };

  useEffect(() => {
    loadOrders();
    window.addEventListener('ordersUpdated', loadOrders);
    return () => {
      window.removeEventListener('ordersUpdated', loadOrders);
    };
  }, []);

  const handleCancel = (orderId) => {
    if (window.confirm('¿Estás seguro de que deseas cancelar esta solicitud pendiente?')) {
      mockDB.cancelOrder(orderId);
    }
  };

  return (
    <div className="container py-4">
      <div className="text-center max-w-2xl mx-auto mb-4">
        <h1 className="fw-bold text-navy display-6 mb-2">Estado de tus Citas y Compras</h1>
        <p className="text-muted mb-4">Revisa la actualización en tiempo real de tus reservas médicas y despachos.</p>
      </div>

      <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr className="text-teal small text-uppercase fw-bold border-bottom">
                <th className="p-3">N° Solicitud</th>
                <th className="p-3">Servicio / Producto</th>
                <th className="p-3">Fecha</th>
                <th className="p-3 text-center">Estado</th>
                <th className="p-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">No tienes solicitudes registradas.</td>
                </tr>
              ) : (
                orders.map((ord, idx) => (
                  <tr key={idx} className="border-bottom">
                    <td className="p-3 fw-bold text-navy">{ord.id}</td>
                    <td className="p-3 text-navy fw-semibold">{ord.service}</td>
                    <td className="p-3 text-muted">{ord.date}</td>
                    <td className="p-3 text-center">
                      <span className={`badge rounded-pill px-3 py-2 fw-bold ${
                        ord.status === 'Confirmada' ? 'bg-success text-white' :
                        ord.status === 'En Camino' ? 'bg-warning text-dark' : 'bg-secondary text-white'
                      }`}>
                        {ord.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      {ord.status === 'Pendiente' ? (
                        <button 
                          onClick={() => handleCancel(ord.id)}
                          className="btn btn-outline-danger btn-sm rounded-pill px-3 fw-bold">
                          Cancelar Solicitud
                        </button>
                      ) : (
                        <span className="text-muted small">No disponible</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};