import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { mockDB } from '../data/mockDatabase';

export const Offers = ({ onSelectDetail }) => {
  const products = mockDB.getProducts();
  const offerProducts = products.filter(p => p.isOffer);

  return (
    <div className="container py-4">
      <div className="text-center max-w-2xl mx-auto mb-4">
        <span className="badge bg-danger text-white text-uppercase px-3 py-2 rounded-pill mb-2 fw-bold">Descuentos Especiales</span>
        <h1 className="fw-bold text-navy display-6">Ofertas de la Semana ({offerProducts.length})</h1>
        <p className="text-muted">Aprovecha precios rebajados en medicamentos, alimentos, estética y accesorios seleccionados.</p>
      </div>

      <div className="row g-4">
        {offerProducts.map((prod) => (
          <div key={prod.id} className="col-12 col-sm-6 col-lg-4">
            <ProductCard 
              product={prod} 
              onSelectDetail={(productOrId) => {
                const id = typeof productOrId === 'object' ? productOrId.id : productOrId;
                onSelectDetail(id);
              }} 
              onAddToCart={(p) => mockDB.addToCart(p, 1)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};