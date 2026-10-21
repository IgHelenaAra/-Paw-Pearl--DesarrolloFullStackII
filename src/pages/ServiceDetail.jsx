import React, { useState } from 'react';
import { mockDB } from '../data/mockDatabase';

export const ServiceDetail = ({ serviceId, setActivePage }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Formulario del cuestionario previo
  const [bookingData, setBookingData] = useState({
    nombreDuenio: '',
    nombreMascota: '',
    tipoMascota: 'Perro',
    horarioPref: 'Mañana (09:00 - 13:00)',
    notas: ''
  });

  const service = mockDB.getServiceById ? mockDB.getServiceById(serviceId) : {
    name: 'Consulta Veterinaria General',
    category: 'Medicina Preventiva',
    icon: '🩺',
    price: 25000,
    duration: '30-45 Minutos',
    image: '/assets/img/1-inicio.jpg',
    description: 'Chequeo médico integral de rutina y diagnóstico profesional.',
    requirements: 'Carnet sanitario.',
    recommendation: 'Control anual.'
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    
    // Formatear el detalle completo con la información del cuestionario
    const orderTitle = `${service.name} - Mascota: ${bookingData.nombreMascota} (${bookingData.tipoMascota}) | Dueño: ${bookingData.nombreDuenio} | Horario: ${bookingData.horarioPref}`;
    
    // Guardar en la base de datos simulada
    mockDB.createOrder(orderTitle);
    
    setShowModal(false);
    setShowAlert(true);

    setTimeout(() => {
      setActivePage('requests');
    }, 1800);
  };

  return (
    <div className="container py-4 position-relative">
      <button 
        onClick={() => setActivePage('services')} 
        className="btn btn-outline-secondary rounded-pill px-3 py-1.5 fw-bold mb-4 shadow-sm">
        &larr; Volver a Servicios
      </button>

      {/* NOTIFICACIÓN FLOTANTE */}
      {showAlert && (
        <div className="alert alert-success d-flex align-items-center justify-content-between rounded-4 shadow-sm mb-4" role="alert">
          <div className="d-flex align-items-center gap-2">
            <span className="fs-4">✅</span>
            <div>
              <strong>¡Cita registrada con éxito!</strong> Revisa el detalle en la tabla de solicitudes.
            </div>
          </div>
        </div>
      )}

      {/* FICHA DEL SERVICIO */}
      <div className="bg-white rounded-5 p-4 p-md-5 shadow-sm border row g-4 align-items-center">
        <div className="col-md-6">
          <div className="position-relative rounded-4 overflow-hidden shadow-sm border bg-light" style={{ maxHeight: '420px', minHeight: '300px' }}>
            <img src={service.image} alt={service.name} className="w-100 h-100 object-fit-cover" />
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-teal text-white text-uppercase px-3 py-1.5 rounded-pill fw-bold">{service.category}</span>
              <span className="fs-3">{service.icon}</span>
            </div>

            <h1 className="fw-extrabold text-navy h2 mb-2">{service.name}</h1>
            
            <div className="my-3 d-flex align-items-baseline gap-3">
              <span className="fs-2 fw-extrabold text-teal">Desde ${service.price.toLocaleString('es-CL')}</span>
            </div>

            <p className="text-muted leading-relaxed mb-4 fs-6">{service.description}</p>
            
            <div className="bg-light p-3 rounded-4 border mb-4 text-muted small">
              <p className="mb-1.5"><strong className="text-navy">Duración Estimada:</strong> {service.duration}</p>
              <p className="mb-1.5"><strong className="text-navy">Requisitos:</strong> {service.requirements}</p>
              <p className="mb-1.5"><strong className="text-navy">Recomendación:</strong> {service.recommendation}</p>
              <p className="mb-0"><strong className="text-navy">Dirección:</strong> Av. Vicuña Mackenna 4860, San Joaquín</p>
            </div>
          </div>

          <button 
            onClick={() => setShowModal(true)} 
            disabled={showAlert}
            className="btn btn-teal text-navy rounded-pill py-3 px-4 fw-bold fs-6 shadow transition-all d-flex align-items-center justify-content-center gap-2">
            <span>📅</span> Agendar Cita
          </button>
        </div>
      </div>

      {/* MODAL / CUESTIONARIO DE AGENDAMIENTO */}
      {showModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center z-3 p-3">
          <div className="bg-white rounded-5 p-4 p-md-5 border shadow-lg max-w-lg w-100 animate-fade-in">
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <h4 className="fw-bold text-navy m-0">📋 Cuestionario de Reserva</h4>
              <button onClick={() => setShowModal(false)} className="btn-close"></button>
            </div>

            <p className="text-muted small mb-4">Servicio: <strong>{service.name}</strong></p>

            <form onSubmit={handleConfirmBooking} className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Nombre del Dueño *</label>
                <input type="text" required placeholder="Ej: Juan Pérez" className="form-control rounded-3" value={bookingData.nombreDuenio} onChange={e => setBookingData({...bookingData, nombreDuenio: e.target.value})} />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Nombre de la Mascota *</label>
                <input type="text" required placeholder="Ej: Rocky" className="form-control rounded-3" value={bookingData.nombreMascota} onChange={e => setBookingData({...bookingData, nombreMascota: e.target.value})} />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Especie *</label>
                <select className="form-select rounded-3" value={bookingData.tipoMascota} onChange={e => setBookingData({...bookingData, tipoMascota: e.target.value})}>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Exótico">Exótico / Otro</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Preferencia Horaria *</label>
                <select className="form-select rounded-3" value={bookingData.horarioPref} onChange={e => setBookingData({...bookingData, horarioPref: e.target.value})}>
                  <option value="Mañana (09:00 - 13:00)">Mañana (09:00 - 13:00)</option>
                  <option value="Tarde (14:00 - 18:00)">Tarde (14:00 - 18:00)</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label fw-bold small text-navy">Motivo / Síntomas u Observación</label>
                <textarea rows="2" placeholder="Opcional: Describe brevemente el motivo..." className="form-control rounded-3" value={bookingData.notas} onChange={e => setBookingData({...bookingData, notas: e.target.value})}></textarea>
              </div>

              <div className="col-12 mt-4 d-flex gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-light rounded-pill w-50 fw-bold border">Cancelar</button>
                <button type="submit" className="btn btn-teal text-navy rounded-pill w-50 fw-bold shadow-sm">Confirmar Cita</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};