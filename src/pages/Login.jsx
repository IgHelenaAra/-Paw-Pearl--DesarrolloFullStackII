import React, { useState } from 'react';

export const Login = ({ setActivePage, setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validación para Admin
    if (username.trim() === 'Admin' && password === '12345') {
      setUserRole('admin');
      setActivePage('admin');
    } else if (username.trim() !== '' && password.trim() !== '') {
      // Cualquier otro usuario ingresa como cliente
      setUserRole('client');
      setActivePage('home');
    } else {
      setError('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="container py-5">
      <div className="bg-white p-4 p-md-5 rounded-5 border shadow-sm mx-auto" style={{ maxWidth: '450px' }}>
        <div className="text-center mb-4">
          <span className="fs-1">🔐</span>
          <h2 className="fw-bold text-navy mt-2">Ingresar</h2>
          <p className="text-muted small">Inicia sesión en Paw&amp;Pearl</p>
        </div>

        {error && <div className="alert alert-danger small py-2">{error}</div>}

        <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
          <div>
            <label className="form-label fw-bold small text-navy">Usuario *</label>
            <input 
              type="text" 
              required 
              placeholder="Ej: Admin o tu usuario"
              className="form-control rounded-3 p-2.5" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
            />
          </div>

          <div>
            <label className="form-label fw-bold small text-navy">Contraseña *</label>
            <input 
              type="password" 
              required 
              placeholder="•••••"
              className="form-control rounded-3 p-2.5" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>

          <button type="submit" className="btn btn-teal text-navy w-100 rounded-pill py-3 fw-bold shadow-sm mt-2">
            Iniciar Sesión
          </button>
        </form>

        <div className="text-center mt-4 pt-3 border-top">
          <p className="small text-muted mb-0">¿No tienes cuenta?</p>
          <button 
            onClick={() => setActivePage('register')} 
            className="btn btn-link text-teal text-decoration-none fw-bold p-0 small">
            Crear cuenta nueva
          </button>
        </div>
      </div>
    </div>
  );
};