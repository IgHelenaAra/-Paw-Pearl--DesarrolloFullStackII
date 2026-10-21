import React, { useState } from 'react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: 'Consulta General',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-4">
      <div className="text-center max-w-2xl mx-auto mb-5">
        <span className="badge bg-teal text-white text-uppercase px-3 py-2 rounded-pill mb-2 fw-bold">Estamos para Ayudarte</span>
        <h1 className="fw-extrabold text-navy display-6">Contáctanos</h1>
        <p className="text-muted">¿Tienes dudas sobre algún servicio o producto? Envíanos un mensaje y te responderemos a la brevedad.</p>
      </div>

      <div className="row g-4 align-items-stretch">
        {/* FORMULARIO */}
        <div className="col-lg-7">
          <div className="bg-white p-4 p-md-5 rounded-5 border shadow-sm h-100">
            {submitted ? (
              <div className="alert alert-success p-4 rounded-4 text-center my-auto">
                <span className="fs-1 d-block mb-2">📩</span>
                <h4 className="fw-bold">¡Mensaje Enviado con Éxito!</h4>
                <p className="small mb-0">Gracias por comunicarte con Paw&amp;Pearl. Nuestro equipo veterinario revisará tu duda y te responderá por correo electrónico.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-teal text-white rounded-pill px-4 mt-3 fw-bold">Enviar otra consulta</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold small text-navy">Nombre Completo *</label>
                  <input type="text" required placeholder="Ej: Camila Soto" className="form-control rounded-3 p-2.5" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold small text-navy">Correo Electrónico *</label>
                  <input type="email" required placeholder="ejemplo@correo.cl" className="form-control rounded-3 p-2.5" value={formData.correo} onChange={e => setFormData({...formData, correo: e.target.value})} />
                </div>

                <div className="col-12">
                  <label className="form-label fw-bold small text-navy">Asunto *</label>
                  <select className="form-select rounded-3 p-2.5" value={formData.asunto} onChange={e => setFormData({...formData, asunto: e.target.value})}>
                    <option value="Consulta General">Consulta General</option>
                    <option value="Duda sobre Medicamento / Producto">Duda sobre Medicamento / Producto</option>
                    <option value="Servicios Clínicos o Citas">Servicios Clínicos o Citas</option>
                    <option value="Sugerencia o Reclamo">Sugerencia o Reclamo</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fw-bold small text-navy">Mensaje o Consulta *</label>
                  <textarea required rows="4" placeholder="Escribe aquí los detalles de tu consulta..." className="form-control rounded-3 p-2.5" value={formData.mensaje} onChange={e => setFormData({...formData, mensaje: e.target.value})}></textarea>
                </div>

                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-teal text-navy w-100 rounded-pill py-3 fw-bold fs-5 shadow-sm">
                    Enviar Mensaje 🚀
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* INFORMACIÓN DE CONTACTO */}
        <div className="col-lg-5">
          <div className="bg-navy text-white p-4 p-md-5 rounded-5 border shadow-sm h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#1a2b4c' }}>
            <div>
              <h3 className="fw-bold mb-4 text-teal">Ubicación y Atención</h3>
              <div className="d-flex flex-column gap-3 fs-6">
                <p className="mb-0">📍 <strong>Dirección:</strong> Av. Vicuña Mackenna 4860, San Joaquín, Santiago.</p>
                <p className="mb-0">📞 <strong>Teléfono:</strong> +56 9 1234 5678</p>
                <p className="mb-0">✉️ <strong>Correo:</strong> contacto@pawandpearl.cl</p>
                <p className="mb-0">⏰ <strong>Horario:</strong> Lunes a Sábado de 09:00 a 19:00 hrs.</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-top border-secondary">
              <span className="small text-teal fw-bold d-block mb-1">🏥 Urgencias Veterinarias</span>
              <p className="small text-white-50 mb-0">Para emergencias médicas fuera de horario habitual, por favor comunícate directamente al número de guardia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};