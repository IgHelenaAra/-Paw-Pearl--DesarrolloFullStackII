import React from 'react';

export const ProductCard = ({ product, onSelectDetail, onAddToCart }) => {
  return (
    <div className="card product-card-container rounded-4 border-0 shadow-sm h-100 p-3">
      <div className="product-image-wrapper rounded-3 overflow-hidden mb-3" style={{ height: '200px' }}>
        <img src={product.image} alt={product.name} className="w-100 h-100 object-fit-cover" />
      </div>
      <div className="card-body p-0 d-flex flex-column justify-content-between">
        <div>
          <span className="badge text-bg-secondary text-uppercase mb-2">{product.category}</span>
          <h5 className="product-title fw-bold text-navy">{product.name}</h5>
          <p className="product-description text-muted small">{product.description}</p>
        </div>
        <div>
          <div className="product-price fs-4 fw-bold text-navy mb-3">
            ${product.price.toLocaleString('es-CL')}
          </div>
          <div className="d-grid gap-2">
            <button 
              onClick={() => onSelectDetail(product)} 
              className="btn btn-detail-action rounded-pill fw-bold">
              Ver Detalle
            </button>
            <button 
              onClick={() => onAddToCart(product)} 
              className="btn btn-add-cart-action rounded-pill fw-bold border-teal text-teal">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};