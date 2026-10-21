import React, { useState, useEffect } from 'react';
import { mockDB } from '../data/mockDatabase';

export const Header = ({ activePage, setActivePage, userRole, setUserRole }) => {
  const [cartCount, setCartCount] = useState(0);

  const syncCartCount = () => {
    const items = mockDB.getCart();
    const total = items.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(total);
  };

  useEffect(() => {
    syncCartCount();
    window.addEventListener('cartUpdated', syncCartCount);
    return () => window.removeEventListener('cartUpdated', syncCartCount);
  }, []);

  const handleLogout = () => {
    setUserRole(null);
    setActivePage('home');
  };

  return (
    <header className="navbar-container bg-white shadow-sm sticky-top border-bottom">
      <div className="container py-3 d-flex align-items-center justify-content-between">
        
        <button onClick={() => setActivePage('home')} className="btn btn-link text-decoration-none d-flex align-items-center gap-2 p-0">
          <span style={{ fontSize: '1.8rem' }}>🐾</span>
          <span className="fw-bold fs-4 text-teal">Paw&amp;Pearl</span>
        </button>

        <nav className="d-none d-lg-flex align-items-center gap-3 text-navy">
          <button onClick={() => setActivePage('home')} className={`btn btn-link text-decoration-none p-0 fw-semibold ${activePage === 'home' ? 'text-teal fw-bold' : 'text-navy'}`}>Inicio</button>
          <button onClick={() => setActivePage('shop')} className={`btn btn-link text-decoration-none p-0 fw-semibold ${activePage === 'shop' ? 'text-teal fw-bold' : 'text-navy'}`}>Tienda</button>
          <button onClick={() => setActivePage('categories')} className={`btn btn-link text-decoration-none p-0 fw-semibold ${activePage === 'categories' ? 'text-teal fw-bold' : 'text-navy'}`}>Categorías</button>
          <button onClick={() => setActivePage('offers')} className={`btn btn-link text-decoration-none p-0 fw-semibold ${activePage === 'offers' ? 'text-teal fw-bold' : 'text-navy'}`}>Ofertas</button>
          <button onClick={() => setActivePage('services')} className={`btn btn-link text-decoration-none p-0 fw-semibold ${activePage === 'services' ? 'text-teal fw-bold' : 'text-navy'}`}>Servicios</button>
          <button onClick={() => setActivePage('about')} className={`btn btn-link text-decoration-none p-0 fw-semibold ${activePage === 'about' ? 'text-teal fw-bold' : 'text-navy'}`}>Nosotros</button>
          <button onClick={() => setActivePage('blog')} className={`btn btn-link text-decoration-none p-0 fw-semibold ${activePage === 'blog' || activePage === 'blog-detail' ? 'text-teal fw-bold' : 'text-navy'}`}>Blog</button>
          <button onClick={() => setActivePage('contact')} className={`btn btn-link text-decoration-none p-0 fw-semibold ${activePage === 'contact' ? 'text-teal fw-bold' : 'text-navy'}`}>Contacto</button>
          <button onClick={() => setActivePage('requests')} className={`btn btn-link text-decoration-none p-0 fw-semibold ${activePage === 'requests' ? 'text-teal fw-bold' : 'text-navy'}`}>Mis Solicitudes</button>
        </nav>

        <div className="d-flex align-items-center gap-2">
          <button onClick={() => setActivePage('cart')} className="btn btn-light border rounded-pill px-3 py-1.5 fw-bold text-navy shadow-sm">
            🛒 Carrito (<span id="cart-item-count">{cartCount}</span>)
          </button>

          {userRole === 'admin' ? (
            <div className="d-flex align-items-center gap-2">
              <button onClick={() => setActivePage('admin')} className="btn btn-teal text-navy rounded-pill px-3 py-1.5 fw-bold shadow-sm">
                ⚙️ Admin
              </button>
              <button onClick={handleLogout} className="btn btn-outline-danger btn-sm rounded-pill px-2">Salir</button>
            </div>
          ) : userRole === 'client' ? (
            <button onClick={handleLogout} className="btn btn-outline-secondary rounded-pill px-3 py-1.5 fw-bold small">
              Cerrar Sesión
            </button>
          ) : (
            <div className="d-flex align-items-center gap-1">
              <button onClick={() => setActivePage('login')} className="btn btn-outline-teal rounded-pill px-3 py-1.5 fw-bold text-teal small">
                Ingresar
              </button>
              <button onClick={() => setActivePage('register')} className="btn btn-teal text-navy rounded-pill px-3 py-1.5 fw-bold small shadow-sm">
                Crear Cuenta
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};