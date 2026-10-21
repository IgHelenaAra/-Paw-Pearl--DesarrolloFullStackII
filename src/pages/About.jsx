import React from 'react';

export const About = () => {
  return (
    <div className="container py-4">
      {/* SECCIÓN MISIÓN */}
      <section className="row align-items-center bg-white p-4 p-md-5 rounded-5 shadow-sm border mb-5">
        <div className="col-md-6">
          <span className="text-uppercase fw-bold text-teal small">NUESTRA MISIÓN</span>
          <h1 className="display-5 fw-extrabold text-navy my-3">
            Apasionados por el bienestar animal desde 2018.
          </h1>
          <p className="text-muted leading-relaxed mb-3">
            En <strong>Paw&amp;Pearl</strong> creemos que cada mascota merece una atención médica de máxima calidad combinada con un trato cariñoso y personalizado.
          </p>
          <p className="text-muted leading-relaxed">
            Fundada por médicos veterinarios, nuestra clínica y boutique nació para transformar la experiencia del cuidado animal en Chile, ofreciendo infraestructura de punta y productos libres de componentes nocivos.
          </p>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="rounded-4 overflow-hidden shadow-sm border">
            <img 
              src="/assets/img/1-nosotros.jpg" 
              alt="Cuidado animal Paw&Pearl" 
              className="w-100 h-100 object-fit-cover" 
            />
          </div>
        </div>
      </section>

      {/* NUESTROS PILARES */}
      <section className="bg-white p-4 p-md-5 rounded-5 shadow-sm border text-center mb-4">
        <h2 className="fw-bold text-navy mb-5 display-6">Nuestros Pilares</h2>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-3">
              <div className="d-inline-flex align-items-center justify-content-center bg-light text-teal rounded-circle mb-3 p-3 fs-2 shadow-sm" style={{ width: '70px', height: '70px' }}>
                🩵
              </div>
              <h4 className="fw-bold text-navy h5 mb-2">Empatía y Amor</h4>
              <p className="text-muted small">Tratamos a tu compañero como si fuera parte de nuestra propia familia.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3">
              <div className="d-inline-flex align-items-center justify-content-center bg-light text-teal rounded-circle mb-3 p-3 fs-2 shadow-sm" style={{ width: '70px', height: '70px' }}>
                🩺
              </div>
              <h4 className="fw-bold text-navy h5 mb-2">Excelencia Clínica</h4>
              <p className="text-muted small">Profesionales titulados en constante especialización científica.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3">
              <div className="d-inline-flex align-items-center justify-content-center bg-light text-teal rounded-circle mb-3 p-3 fs-2 shadow-sm" style={{ width: '70px', height: '70px' }}>
                ✨
              </div>
              <h4 className="fw-bold text-navy h5 mb-2">Calidad Premium</h4>
              <p className="text-muted small">Selección exclusiva de insumos, alimentos super premium y vacunas de laboratorio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};