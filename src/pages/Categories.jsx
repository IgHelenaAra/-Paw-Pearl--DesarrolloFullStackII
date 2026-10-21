import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { mockDB } from '../data/mockDatabase';

export const Categories = ({ onSelectDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const products = mockDB.getProducts();

  // Categorías completas asociadas a los productos del sistema
  const categories = ['Todas', 'Nutrición', 'Farmacia', 'Estética', 'Accesorios'];

  const filteredProducts = selectedCategory === 'Todas' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container py-4">
      <div className="text-center max-w-2xl mx-auto mb-4">
        <span className="badge bg-teal text-white text-uppercase px-3 py-2 rounded-pill mb-2 fw-bold">Nube de Categorías</span>
        <h1 className="fw-bold text-navy display-6">Categorías de Productos</h1>
        <p className="text-muted">Selecciona una categoría para filtrar nuestro catálogo especializado para mascotas.</p>
      </div>

      {/* BOTONES DE FILTRO ESTILIZADOS */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`btn rounded-pill px-4 py-2 fw-bold shadow-sm transition-all ${
              selectedCategory === cat 
                ? 'btn-teal text-white shadow-md' 
                : 'btn-white text-navy border hover-bg-light'
            }`}
          >
            {cat} {cat === 'Todas' ? `(${products.length})` : `(${products.filter(p => p.category === cat).length})`}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filteredProducts.map((prod) => (
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