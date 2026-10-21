import React, { useState } from 'react';
import { mockDB } from '../data/mockDatabase';

export const Checkout = ({ setActivePage }) => {
  const cartItems = mockDB.getCart();
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const [paymentMethod, setPaymentMethod] = useState('webpay');
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: '',
    depto: '',
    region: 'Región Metropolitana',
    comuna: 'San Joaquín'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (cartItems.length > 0) {
      // Registra cada producto comprado como una solicitud pendiente en el sistema
      cartItems.forEach(item => {
        mockDB.createOrder(`${item.name} (x${item.quantity})`);
      });

      // Limpia el carrito de compras
      mockDB.clearCart();
      
      // Redirige a la página de éxito
      setActivePage('order-success');
    } else {
      setActivePage('order-error');
    }
  };

  return (
    <div className="container py-4">
      {/* BOTÓN VOLVER */}
      <button 
        onClick={() => setActivePage('cart')} 
        className="btn btn-outline-secondary rounded-pill px-3 py-1.5 fw-bold mb-4 shadow-sm">
        &larr; Volver al Carrito
      </button>

      <div className="text-center max-w-2xl mx-auto mb-5">
        <span className="badge bg-teal text-navy text-uppercase px-3 py-2 rounded-pill mb-2 fw-bold">Pago Seguro SSL 🔒</span>
        <h1 className="fw-extrabold text-navy display-6">Finalizar Compra</h1>
        <p className="text-muted">Ingresa tus datos de envío para completar el pedido de tu mascota.</p>
      </div>

      <div className="row g-4 align-items-start">
        {/* FORMULARIO DE ENVÍO Y PAGO */}
        <div className="col-lg-7">
          <div className="bg-white p-4 p-md-5 rounded-5 border shadow-sm mb-4">
            <h4 className="fw-bold text-navy mb-4 d-flex align-items-center gap-2">
              <span>📍</span> 1. Dirección de Entrega
            </h4>
            
            <form id="checkout-form" onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Nombre *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ej: Laura"
                  className="form-control rounded-3 p-2.5" 
                  value={formData.nombre} 
                  onChange={e => setFormData({...formData, nombre: e.target.value})} 
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Apellido *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ej: Silva"
                  className="form-control rounded-3 p-2.5" 
                  value={formData.apellido} 
                  onChange={e => setFormData({...formData, apellido: e.target.value})} 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Correo Electrónico *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="ejemplo@correo.cl"
                  className="form-control rounded-3 p-2.5" 
                  value={formData.correo} 
                  onChange={e => setFormData({...formData, correo: e.target.value})} 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Teléfono *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+56 9 1234 5678"
                  className="form-control rounded-3 p-2.5" 
                  value={formData.telefono} 
                  onChange={e => setFormData({...formData, telefono: e.target.value})} 
                />
              </div>

              <div className="col-md-8">
                <label className="form-label fw-bold small text-navy">Calle y Número *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Av. Vicuña Mackenna 4860"
                  className="form-control rounded-3 p-2.5" 
                  value={formData.direccion} 
                  onChange={e => setFormData({...formData, direccion: e.target.value})} 
                />
              </div>

              <div className="col-md-4">
                <label className="form-label fw-bold small text-navy">Depto / Casa</label>
                <input 
                  type="text" 
                  placeholder="Depto 402"
                  className="form-control rounded-3 p-2.5" 
                  value={formData.depto} 
                  onChange={e => setFormData({...formData, depto: e.target.value})} 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Región *</label>
                <select className="form-select rounded-3 p-2.5" value={formData.region} onChange={e => setFormData({...formData, region: e.target.value})}>
                  <option value="Región Metropolitana">Región Metropolitana</option>
                  <option value="Valparaíso">Valparaíso</option>
                  <option value="Bío Bío">Bío Bío</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold small text-navy">Comuna *</label>
                <input 
                  type="text" 
                  required 
                  className="form-control rounded-3 p-2.5" 
                  value={formData.comuna} 
                  onChange={e => setFormData({...formData, comuna: e.target.value})} 
                />
              </div>
            </form>
          </div>

          {/* MÉTODO DE PAGO */}
          <div className="bg-white p-4 p-md-5 rounded-5 border shadow-sm">
            <h4 className="fw-bold text-navy mb-4 d-flex align-items-center gap-2">
              <span>💳</span> 2. Medio de Pago
            </h4>

            <div className="d-flex flex-column gap-3 mb-4">
              <label className={`p-3 rounded-4 border d-flex align-items-center justify-content-between cursor-pointer transition-all ${paymentMethod === 'webpay' ? 'border-teal bg-light shadow-sm' : ''}`}>
                <div className="d-flex align-items-center gap-3">
                  <input type="radio" name="payment" checked={paymentMethod === 'webpay'} onChange={() => setPaymentMethod('webpay')} />
                  <div>
                    <strong className="d-block text-navy">Tarjeta de Débito / Crédito (Webpay Plus)</strong>
                    <small className="text-muted">Pago seguro con tarjetas chilenas</small>
                  </div>
                </div>
                <span className="fs-4">💳</span>
              </label>

              <label className={`p-3 rounded-4 border d-flex align-items-center justify-content-between cursor-pointer transition-all ${paymentMethod === 'transfer' ? 'border-teal bg-light shadow-sm' : ''}`}>
                <div className="d-flex align-items-center gap-3">
                  <input type="radio" name="payment" checked={paymentMethod === 'transfer'} onChange={() => setPaymentMethod('transfer')} />
                  <div>
                    <strong className="d-block text-navy">Transferencia Bancaria Directa</strong>
                    <small className="text-muted">Obtén confirmación al adjuntar comprobante</small>
                  </div>
                </div>
                <span className="fs-4">🏦</span>
              </label>
            </div>
          </div>
        </div>

        {/* RESUMEN DE COMPRA STICKY */}
        <div className="col-lg-5">
          <div className="bg-white p-4 p-md-5 rounded-5 border shadow-sm position-sticky" style={{ top: '20px' }}>
            <h4 className="fw-bold text-navy mb-3 border-bottom pb-2">Resumen de la Orden</h4>

            <div className="mb-4 overflow-auto" style={{ maxHeight: '280px' }}>
              {cartItems.length === 0 ? (
                <p className="text-muted small">No hay productos en el carrito.</p>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center justify-content-between py-2 border-bottom">
                    <div className="d-flex align-items-center gap-3">
                      <img src={item.image} alt={item.name} className="rounded-3 object-fit-cover" style={{ width: '50px', height: '50px' }} />
                      <div>
                        <strong className="d-block text-navy small">{item.name}</strong>
                        <small className="text-muted">Cantidad: {item.quantity}</small>
                      </div>
                    </div>
                    <span className="fw-bold text-navy small">${(item.price * item.quantity).toLocaleString('es-CL')}</span>
                  </div>
                ))
              )}
            </div>

            <div className="bg-light p-3 rounded-4 border mb-4">
              <div className="d-flex justify-content-between text-muted mb-2 small">
                <span>Subtotal</span>
                <span>${total.toLocaleString('es-CL')}</span>
              </div>
              <div className="d-flex justify-content-between text-muted mb-2 small">
                <span>Despacho a Domicilio</span>
                <span className="text-success fw-bold">GRATIS</span>
              </div>
              <hr className="my-2" />
              <div className="d-flex justify-content-between text-navy fw-extrabold fs-5">
                <span>Total Final</span>
                <span className="text-teal">${total.toLocaleString('es-CL')}</span>
              </div>
            </div>

            <button 
              type="submit" 
              form="checkout-form"
              disabled={cartItems.length === 0}
              className="btn btn-teal text-navy w-100 rounded-pill py-3 fw-bold fs-5 shadow-sm transition-all d-flex align-items-center justify-content-center gap-2">
              <span>🔒</span> Confirmar y Pagar ${total.toLocaleString('es-CL')}
            </button>

            <p className="text-center text-muted small mt-3 mb-0">
              Al confirmar aceptas nuestros términos de servicio y políticas de entrega.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};