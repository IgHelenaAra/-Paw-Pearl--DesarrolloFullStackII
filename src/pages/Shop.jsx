import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { mockDB } from '../data/mockDatabase';

export const Shop = ({ onSelectDetail }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockDB.getProducts());
  }, []);

  const handleAddToCart = (product) => {
    mockDB.addToCart(product, 1);
  };

  return (
    <div className="container py-4">
      <div className="text-center max-w-2xl mx-auto mb-4">
        <span className="badge bg-teal text-white text-uppercase px-3 py-2 rounded-pill mb-2 fw-bold">Catálogo Completo</span>
        <h1 className="fw-extrabold text-navy display-6">Farmacia &amp; Boutique Canina</h1>
        <p className="text-muted">Medicamentos autorizados, suplementos, alimentos holísticos y accesorios seleccionados para el bienestar de tu mascota.</p>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-lg-4">
            <ProductCard 
              product={product} 
              onSelectDetail={(productOrId) => {
                const id = typeof productOrId === 'object' ? productOrId.id : productOrId;
                onSelectDetail(id);
              }} 
              onAddToCart={handleAddToCart} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};