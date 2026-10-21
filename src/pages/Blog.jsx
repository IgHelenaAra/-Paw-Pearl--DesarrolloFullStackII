import React from 'react';

export const BLOG_POSTS = [
  {
    id: 'post1',
    title: 'Calendario de Vacunación Esencial en 2026',
    category: 'SALUD PREVENTIVA',
    date: '22 SEP 2026',
    author: 'Dr. Ricardo Soto - Médico Veterinario',
    image: '/assets/img/1-blog.jpg',
    detailImage: '/assets/img/1-blogDetalle.jpg',
    excerpt: 'Descubre cuáles son las vacunas obligatorias y opcionales para proteger a tu perro según su edad y estilo de vida.',
    actionText: 'Agendar Vacuna',
    actionPage: 'services',
    content: [
      'Mantener al día el esquema de inmunización de tu mascota es el pilar fundamental para prevenir enfermedades infecciosas graves. En Paw&Pearl, diseñamos protocolos adaptados a la edad y exposición de cada cachorro o perro adulto.',
      'Esquema Básico para Cachorros:',
      '• 6 a 8 semanas: Primera dosis de vacuna Séxtuple / Óctuple (Parvovirus, Distemper, Hepatitis, Parainfluenza).',
      '• 10 a 12 semanas: Segunda dosis de refuerzo + vacuna contra la Tos de las Kennels (KC).',
      '• 16 semanas: Tercera dosis de refuerzo y primera dosis de la vacuna Antirrábica.',
      'Refuerzos Anuales en Adultos:',
      'Una vez completado el esquema de cachorro, los perros adultos requieren revacunación anual tanto de la Óctuple como de la Antirrábica para mantener sus anticuerpos activados.'
    ]
  },
  {
    id: 'post2',
    title: 'Cómo elegir el mejor alimento según la raza',
    category: 'NUTRICIÓN',
    date: '18 SEP 2026',
    author: 'Dra. Camila Morales - Nutricionista Animal',
    image: '/assets/img/2-blog.jpg',
    detailImage: '/assets/img/2-blogDetalle.jpg',
    excerpt: 'Aprende a interpretar las etiquetas nutricionales y los requerimientos calóricos según la etapa del desarrollo.',
    actionText: 'Ir a la Tienda',
    actionPage: 'shop',
    content: [
      'Cada raza y tamaño de perro presenta necesidades metabólicas únicas. Una nutrición adecuada influye directamente en el brillo del pelaje, la digestión y la longevidad articular de tu perro.',
      'Puntos clave para leer la etiqueta:',
      '• Primer ingrediente: Asegúrate de que sea proteína de origen animal (pollo, salmón, cordero) y no subproductos ni cereales.',
      '• Tamaño del croquete: Adapta la densidad de la croqueta a la fuerza mandibular para prevenir el sarro dental.',
      '• Glucosamina y Condroitina: Indispensables en razas grandes para proteger sus articulaciones con el paso de los años.'
    ]
  }
];

export const Blog = ({ onSelectPost }) => {
  return (
    <div className="container py-4">
      {/* ENCABEZADO BLOG */}
      <div className="text-center max-w-2xl mx-auto mb-5">
        <h1 className="display-5 fw-extrabold text-navy mb-2">Blog de Cuidados</h1>
        <p className="text-muted fs-6">
          Artículos redactados por nuestros médicos veterinarios sobre salud, vacunación y alimentación canina.
        </p>
      </div>

      {/* GRILLA DE ARTÍCULOS */}
      <div className="row g-4">
        {BLOG_POSTS.map((post) => (
          <div key={post.id} className="col-12 col-md-6">
            <div className="bg-white rounded-5 border shadow-sm h-100 overflow-hidden d-flex flex-column justify-content-between p-0">
              <div>
                <div style={{ height: '260px' }} className="overflow-hidden bg-light">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-100 h-100 object-fit-cover" 
                  />
                </div>
                <div className="p-4 p-md-4">
                  <span className="text-uppercase fw-bold text-teal small d-block mb-2">{post.category}</span>
                  <h3 className="fw-bold text-navy h4 mb-3">{post.title}</h3>
                  <p className="text-muted small leading-relaxed mb-4">{post.excerpt}</p>
                </div>
              </div>

              <div className="px-4 pb-4">
                <button 
                  onClick={() => onSelectPost(post.id)} 
                  className="btn btn-teal text-navy rounded-pill px-4 py-2.5 fw-bold shadow-sm">
                  Leer Artículo Completo &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};