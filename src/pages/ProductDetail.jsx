import React from 'react';
import { mockDB } from '../data/mockDatabase';

export const ProductDetail = ({ productId, setActivePage }) => {
  const product = mockDB.getProductById(productId) || mockDB.getProducts()[0];

  const handleAddToCart = () => {
    mockDB.addToCart(product, 1);
  };

  const finalPrice = product.isOffer && product.discountPrice ? product.discountPrice : product.price;

  return (
    <div className="container py-4">
      <button 
        onClick={() => setActivePage('shop')} 
        className="btn btn-outline-secondary rounded-pill px-2 py-1 fw-bold mb-3 shadow-sm">
        &larr; Volver a la Tienda
      </button>

      <div className="bg-white rounded-5 p-4 p-md-5 shadow-sm border row g-4 align-items-center">
        {/* IMAGEN DEL PRODUCTO */}
        <div className="col-md-6">
          <div className="position-relative rounded-4 overflow-hidden shadow-sm border bg-light" style={{ maxHeight: '400px', minHeight: '300px' }}>
            {product.isOffer && (
              <span className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1 m-3 rounded-pill fw-bold small shadow-sm z-1">
                ¡OFERTA!
              </span>
            )}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-100 h-100 object-fit-cover" 
            />
          </div>
        </div>

        {/* DETALLE Y ESPECIFICACIONES */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-teal text-white text-uppercase px-3 py-1.5 rounded-pill fw-bold">{product.category}</span>
              {product.species && <span className="badge bg-light text-navy border rounded-pill px-2.5 py-1 small">{product.species}</span>}
            </div>

            <h1 className="fw-extrabold text-navy h2 mb-2">{product.name}</h1>
            
            <div className="my-3 d-flex align-items-baseline gap-3">
              <span className="fs-2 fw-extrabold text-teal">${finalPrice.toLocaleString('es-CL')}</span>
              {product.isOffer && product.discountPrice && (
                <span className="fs-5 text-muted text-decoration-line-through">${product.price.toLocaleString('es-CL')}</span>
              )}
            </div>

            <p className="text-muted leading-relaxed mb-4 fs-6">{product.description}</p>
            
            {/* FICHA TÉCNICA */}
            <div className="bg-light p-3 rounded-4 border mb-4 text-muted small">
              <p className="mb-1.5"><strong className="text-navy">Presentación:</strong> {product.presentation || 'Empaque Estándar'}</p>
              <p className="mb-1.5"><strong className="text-navy">Origen / Calidad:</strong> {product.origin || 'Producto Certificado'}</p>
              <p className="mb-1.5"><strong className="text-navy">Código SKU:</strong> {product.sku || 'N/A'}</p>
              <p className="mb-1.5"><strong className="text-navy">Disponibilidad:</strong> En Stock ({product.stock || 10} unidades)</p>
              <p className="mb-0"><strong className="text-navy">Despacho:</strong> Envío inmediato a todo Chile 🚚</p>
            </div>
          </div>

          <button 
            onClick={handleAddToCart} 
            className="btn btn-coral text-navy rounded-pill py-3 px-4 fw-bold fs-6 shadow transition-all d-flex align-items-center justify-content-center gap-2">
            <span>🛒</span> Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};