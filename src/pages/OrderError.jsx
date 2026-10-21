import React from 'react';

export const OrderError = ({ setActivePage }) => {
  return (
    <div className="container py-5 text-center">
      <div className="bg-white p-5 rounded-5 border shadow-sm max-w-xl mx-auto">
        <span className="display-1 text-danger mb-3 d-block">❌</span>
        <h2 className="fw-bold text-navy mb-2">No se pudo procesar el pago</h2>
        <p className="text-muted mb-4">Tu transacción fue rechazada por la entidad bancaria o el medio de pago.</p>

        <div className="d-flex justify-content-center gap-3">
          <button onClick={() => setActivePage('checkout')} className="btn btn-coral text-white rounded-pill px-4 fw-bold">
            Reintentar Pago
          </button>
          <button onClick={() => setActivePage('cart')} className="btn btn-outline-secondary rounded-pill px-4">
            Volver al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};