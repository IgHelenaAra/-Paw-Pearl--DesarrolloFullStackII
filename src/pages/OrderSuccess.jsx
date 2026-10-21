import React from 'react';

export const OrderSuccess = ({ setActivePage }) => {
  const orderNum = `#ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="container py-5 text-center">
      <div className="bg-white p-5 rounded-5 border shadow-sm max-w-xl mx-auto">
        <span className="display-1 text-success mb-3 d-block">✅</span>
        <h2 className="fw-bold text-navy mb-2">¡Compra Realizada con Éxito!</h2>
        <p className="text-muted mb-4">Número de Orden: <strong className="text-navy">{orderNum}</strong></p>
        <p className="small text-muted mb-4">Hemos enviado la confirmación y la boleta electrónica a tu correo registrado.</p>

        <div className="d-flex justify-content-center gap-3">
          <button onClick={() => setActivePage('requests')} className="btn btn-teal text-navy rounded-pill px-4 fw-bold">
            Ver Mis Solicitudes
          </button>
          <button onClick={() => setActivePage('shop')} className="btn btn-outline-secondary rounded-pill px-4">
            Volver a la Tienda
          </button>
        </div>
      </div>
    </div>
  );
};