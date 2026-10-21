import React from 'react';

export const Home = ({ setActivePage }) => {
  return (
    <div className="container py-4 space-y-4">
      {/* HERO SECTION */}
      <section className="row align-items-center bg-white p-4 p-md-5 rounded-5 shadow-sm border mb-4">
        <div className="col-md-6 text-center text-md-start">
          <span className="text-uppercase fw-bold text-teal small">Salud y Elegancia</span>
          <h1 className="display-5 fw-extrabold text-navy my-2">El cuidado premium que tu mascota merece.</h1>
          <p className="text-muted mb-4">
            Ofrecemos atención veterinaria de primer nivel, peluquería especializada y productos seleccionados para el bienestar de tu compañero.
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
            <button onClick={() => setActivePage('shop')} className="btn btn-coral rounded-pill px-4 py-2 fw-bold shadow-sm">
              Explorar Tienda
            </button>
            <button onClick={() => setActivePage('services')} className="btn border-teal text-teal rounded-pill px-4 py-2 fw-bold">
              Reservar Cita
            </button>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <img 
            src="/assets/img/1-inicio.jpg" 
            alt="Mascota feliz Paw&Pearl" 
            className="img-fluid rounded-4 shadow-sm border" 
          />
        </div>
      </section>

      {/* VIDEO PROMOCIONAL */}
      <section className="bg-white p-4 p-md-5 rounded-5 shadow-sm border text-center mb-4">
        <h2 className="fw-bold text-navy mb-2">Un día de atención en Paw&amp;Pearl</h2>
        <p className="text-muted mb-4">Mira cómo acompañamos a nuestros pacientes durante su visita al veterinario.</p>
        <div className="mx-auto rounded-4 overflow-hidden shadow-sm" style={{ maxWidth: '360px' }}>
          <video className="w-100 h-auto rounded-4" controls muted autoPlay loop playsInline>
            <source src="/assets/img/video_pawandpearl.mp4" type="video/mp4" />
            Tu navegador no soporta video en HTML5.
          </video>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="mb-4">
        <h2 className="text-center fw-bold text-navy mb-4">Nuestros Servicios Destacados</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-center">
              <span className="fs-1 mb-2">🩺</span>
              <h4 className="fw-bold text-navy">Consulta Médica</h4>
              <p className="text-muted small">Atención veterinaria integral y medicina preventiva con profesionales capacitados.</p>
              <button onClick={() => setActivePage('services')} className="btn btn-link text-coral fw-bold mt-auto text-decoration-none">Saber más &rarr;</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-center">
              <span className="fs-1 mb-2">✂️</span>
              <h4 className="fw-bold text-navy">Peluquería Spa</h4>
              <p className="text-muted small">Baño, corte y tratamientos dermocosméticos para mantener su pelaje radiante.</p>
              <button onClick={() => setActivePage('services')} className="btn btn-link text-coral fw-bold mt-auto text-decoration-none">Saber más &rarr;</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-center">
              <span className="fs-1 mb-2">🛡️</span>
              <h4 className="fw-bold text-navy">Vacunación y Farmacia</h4>
              <p className="text-muted small">Esquemas de vacunación al día y medicamentos de alta calidad para su salud.</p>
              <button onClick={() => setActivePage('services')} className="btn btn-link text-coral fw-bold mt-auto text-decoration-none">Saber más &rarr;</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};