import React from 'react';

export const Footer = ({ setActivePage }) => {
  return (
    <footer className="bg-navy text-white pt-5 pb-4 mt-auto" style={{ backgroundColor: '#1a2b4c' }}>
      <div className="container">
        <div className="row g-4">
          
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="fs-2">🐾</span>
              <span className="fw-bold fs-3 text-teal">Paw&amp;Pearl</span>
            </div>
            <p className="text-white-50 small pe-lg-4 leading-relaxed">
              Brindamos atención veterinaria integral, servicios de estética de alto nivel y una cuidada selección de productos para el bienestar y la elegancia de tu mascota.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3 text-teal fs-6 text-uppercase">Navegación</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><button onClick={() => setActivePage('home')} className="btn p-0 text-white-50 text-decoration-none btn-link">Inicio</button></li>
              <li><button onClick={() => setActivePage('shop')} className="btn p-0 text-white-50 text-decoration-none btn-link">Tienda</button></li>
              <li><button onClick={() => setActivePage('categories')} className="btn p-0 text-white-50 text-decoration-none btn-link">Categorías</button></li>
              <li><button onClick={() => setActivePage('offers')} className="btn p-0 text-white-50 text-decoration-none btn-link">Ofertas</button></li>
              <li><button onClick={() => setActivePage('services')} className="btn p-0 text-white-50 text-decoration-none btn-link">Servicios</button></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 text-teal fs-6 text-uppercase">Institucional</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><button onClick={() => setActivePage('about')} className="btn p-0 text-white-50 text-decoration-none btn-link">Sobre Nosotros</button></li>
              <li><button onClick={() => setActivePage('blog')} className="btn p-0 text-white-50 text-decoration-none btn-link">Blog de Cuidados</button></li>
              <li><button onClick={() => setActivePage('contact')} className="btn p-0 text-white-50 text-decoration-none btn-link">Contacto y Ayuda</button></li>
              <li><button onClick={() => setActivePage('requests')} className="btn p-0 text-white-50 text-decoration-none btn-link">Mis Solicitudes</button></li>
              <li><button onClick={() => setActivePage('admin')} className="btn p-0 text-white-50 text-decoration-none btn-link">Panel Administrador</button></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 text-teal fs-6 text-uppercase">Contacto</h5>
            <ul className="list-unstyled text-white-50 small d-flex flex-column gap-2">
              <li>📍 Av. Vicuña Mackenna 4860, San Joaquín</li>
              <li>📞 +56 9 1234 5678</li>
              <li>✉️ contacto@pawandpearl.cl</li>
              <li>⏰ Lun - Sáb: 09:00 - 19:00 hrs</li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-white-50 small gap-2">
          <p className="mb-0">&copy; {new Date().getFullYear()} Paw&amp;Pearl Veterinaria. Todos los derechos reservados.</p>
          <p className="mb-0">Evaluación - DSY1104 | Duoc UC</p>
        </div>
      </div>
    </footer>
  );
};