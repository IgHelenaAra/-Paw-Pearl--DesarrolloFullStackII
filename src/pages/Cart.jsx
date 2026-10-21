import React, { useState, useEffect } from 'react';
import { mockDB } from '../data/mockDatabase';

export const Cart = ({ setActivePage }) => {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    setCartItems(mockDB.getCart());
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleRemove = (index) => {
    mockDB.removeFromCart(index);
    loadCart();
  };

  const handleClear = () => {
    mockDB.clearCart();
    loadCart();
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="container py-4">
      <h1 className="fw-bold text-navy mb-4">Carrito de Compras</h1>

      <div className="row g-4">
        <div className="col-lg-8">
          {cartItems.length === 0 ? (
            <div className="bg-white p-5 rounded-4 text-center border shadow-sm">
              <p className="text-muted mb-3">Tu carrito de compras está vacío.</p>
              <button onClick={() => setActivePage('shop')} className="btn btn-coral text-white rounded-pill px-4 fw-bold">
                Explorar Tienda
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-4 border shadow-sm d-flex align-items-center justify-content-between gap-3">
                  <img src={item.image} alt={item.name} className="rounded-3" style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
                  <div className="flex-grow-1">
                    <h5 className="fw-bold text-navy mb-1">{item.name}</h5>
                    <p className="text-muted small mb-0">${item.price.toLocaleString('es-CL')} x {item.quantity}</p>
                  </div>
                  <div className="text-end">
                    <p className="fw-bold text-navy mb-1">${(item.price * item.quantity).toLocaleString('es-CL')}</p>
                    <button onClick={() => handleRemove(index)} className="btn btn-link text-danger text-decoration-none p-0 small fw-bold">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="col-lg-4">
          <div className="bg-white p-4 rounded-4 border shadow-sm">
            <h4 className="fw-bold text-navy mb-3">Resumen del Pedido</h4>
            <div className="d-flex justify-content-between text-muted mb-2">
              <span>Subtotal</span>
              <span className="fw-bold">${subtotal.toLocaleString('es-CL')}</span>
            </div>
            <div className="d-flex justify-content-between text-muted mb-3">
              <span>Envío</span>
              <span className="text-success fw-bold">Gratis</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fs-5 fw-bold text-navy mb-4">
              <span>Total</span>
              <span className="text-teal">${subtotal.toLocaleString('es-CL')}</span>
            </div>

            <button 
              disabled={cartItems.length === 0} 
              onClick={() => setActivePage('checkout')} 
              className="btn btn-teal text-navy w-100 rounded-pill py-2.5 fw-bold mb-2">
              Finalizar Compra
            </button>
            <button 
              disabled={cartItems.length === 0} 
              onClick={handleClear} 
              className="btn btn-outline-danger w-100 rounded-pill py-2 small">
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};