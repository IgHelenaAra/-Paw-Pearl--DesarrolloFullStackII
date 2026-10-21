import React from 'react';
import { mockDB } from '../data/mockDatabase';

export const Services = ({ onSelectService }) => {
  const services = mockDB.getServices ? mockDB.getServices() : [
    { id: 'serv1', name: 'Consulta Veterinaria General', category: 'Medicina Preventiva', icon: '🩺', price: 25000, description: 'Chequeo médico integral de rutina y diagnóstico general con veterinarios experimentados.' },
    { id: 'serv2', name: 'Peluquería y Spa Canino', category: 'Estética & Higiene', icon: '✂️', price: 22000, description: 'Baño con cosmética especializada, corte de pelo, deslanado profundo y corte de uñas.' },
    { id: 'serv3', name: 'Vacunación y Desparasitación', category: 'Medicina Preventiva', icon: '💉', price: 18000, description: 'Aplicación de esquemas de inmunización completos y desparasitaciones certificadas.' }
  ];

  return (
    <div className="container py-4">
      <div className="text-center max-w-2xl mx-auto mb-5">
        <span className="badge bg-teal text-white text-uppercase px-3 py-2 rounded-pill mb-2 fw-bold">Clínica &amp; Bienestar</span>
        <h1 className="fw-bold text-navy display-6">Servicios Médicos y Estética</h1>
        <p className="text-muted">Infraestructura moderna y atención dedicada para asegurar el bienestar integral de tu mascota.</p>
      </div>

      <div className="row g-4">
        {services.map((serv) => (
          <div key={serv.id} className="col-md-4">
            <div className="bg-white p-4 rounded-5 shadow-sm border h-100 d-flex flex-column justify-content-between transition-all hover-shadow">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fs-1">{serv.icon}</span>
                  <span className="badge bg-light text-navy border rounded-pill px-3 py-1 fw-bold">${serv.price.toLocaleString('es-CL')}</span>
                </div>
                <span className="badge bg-secondary text-uppercase mb-2 small">{serv.category}</span>
                <h3 className="fw-bold text-navy h4">{serv.name}</h3>
                <p className="text-muted small leading-relaxed">{serv.description}</p>
              </div>

              <div className="d-grid gap-2 mt-4">
                <button 
                  onClick={() => onSelectService(serv.id)} 
                  className="btn btn-outline-secondary rounded-pill fw-bold py-2">
                  Ver Detalle
                </button>
                <button 
                  onClick={() => onSelectService(serv.id)} 
                  className="btn btn-teal text-white rounded-pill fw-bold py-2.5 shadow-sm">
                  Agendar Cita
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};