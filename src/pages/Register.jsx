import React, { useState } from 'react';

export const Register = ({ setActivePage, setUserRole }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    password: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();
    setUserRole('client');
    alert('¡Cuenta creada con éxito! Bienvenido a Paw&Pearl.');
    setActivePage('home');
  };

  return (
    <div className="container py-5">
      <div className="bg-white p-4 p-md-5 rounded-5 border shadow-sm mx-auto" style={{ maxWidth: '450px' }}>
        <div className="text-center mb-4">
          <span className="fs-1">🐾</span>
          <h2 className="fw-bold text-navy mt-2">Crear Cuenta</h2>
          <p className="text-muted small">Regístrate para comprar y agendar servicios</p>
        </div>

        <form onSubmit={handleRegister} className="d-flex flex-column gap-3">
          <div>
            <label className="form-label fw-bold small text-navy">Nombre Completo *</label>
            <input 
              type="text" 
              required 
              placeholder="Ej: Andrea Soto"
              className="form-control rounded-3 p-2.5" 
              value={formData.nombre} 
              onChange={e => setFormData({...formData, nombre: e.target.value})} 
            />
          </div>

          <div>
            <label className="form-label fw-bold small text-navy">Correo Electrónico *</label>
            <input 
              type="email" 
              required 
              placeholder="correo@ejemplo.cl"
              className="form-control rounded-3 p-2.5" 
              value={formData.correo} 
              onChange={e => setFormData({...formData, correo: e.target.value})} 
            />
          </div>

          <div>
            <label className="form-label fw-bold small text-navy">Contraseña *</label>
            <input 
              type="password" 
              required 
              placeholder="Mínimo 6 caracteres"
              className="form-control rounded-3 p-2.5" 
              value={formData.password} 
              onChange={e => setFormData({...formData, password: e.target.value})} 
            />
          </div>

          <button type="submit" className="btn btn-teal text-navy w-100 rounded-pill py-3 fw-bold shadow-sm mt-2">
            Registrarse
          </button>
        </form>

        <div className="text-center mt-4 pt-3 border-top">
          <p className="small text-muted mb-0">¿Ya tienes cuenta?</p>
          <button 
            onClick={() => setActivePage('login')} 
            className="btn btn-link text-teal text-decoration-none fw-bold p-0 small">
            Ingresa aquí
          </button>
        </div>
      </div>
    </div>
  );
};