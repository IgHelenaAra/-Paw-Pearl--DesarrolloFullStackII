import React from 'react';
import { BLOG_POSTS } from './Blog';

export const BlogDetail = ({ postId, setActivePage }) => {
  const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];

  return (
    <div className="container py-4">
      {/* BOTÓN VOLVER */}
      <button 
        onClick={() => setActivePage('blog')} 
        className="btn btn-outline-secondary rounded-pill px-3 py-1.5 fw-bold mb-4 shadow-sm">
        &larr; Volver al Blog
      </button>

      {/* TARJETA PRINCIPAL (Ancho optimizado a 720px para mejor lectura) */}
      <div className="bg-white rounded-5 p-12 p-md-4 border shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
        
        {/* CATEGORÍA Y FECHA */}
        <div className="mb-3">
          <span className="badge bg-teal text-navy text-uppercase px-3 py-1.5 rounded-pill fw-bold">
            {post.category}
          </span>
          <span className="text-muted fw-bold ms-3">{post.date}</span>
        </div>

        {/* TÍTULO */}
        <h1 className="fw-extrabold text-navy h2 mb-4">{post.title}</h1>

        {/* IMAGEN PRINCIPAL (Sin cajas grises y con proporciones estéticas) */}
        <div className="rounded-4 overflow-hidden mb-4 shadow-sm" style={{ height: '360px' }}>
          <img 
            src={post.detailImage || post.image} 
            alt={post.title} 
            className="w-100 h-100 object-fit-cover" 
          />
        </div>

        {/* CONTENIDO DEL ARTÍCULO */}
        <div className="text-dark leading-relaxed mb-5 fs-6" style={{ lineHeight: '1.7' }}>
          {post.content.map((paragraph, idx) => (
            <p 
              key={idx} 
              className={
                paragraph.startsWith('•') 
                  ? 'ps-3 mb-2 text-secondary' 
                  : paragraph.endsWith(':') 
                    ? 'fw-bold text-navy h5 mt-4 mb-2' 
                    : 'mb-3 text-secondary'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* PIE Y ACCIÓN DIRECTA */}
        <div className="border-top pt-4 d-flex flex-wrap align-items-center justify-content-between gap-3">
          <small className="text-navy fw-bold">Escrito por: {post.author}</small>
          <button 
            onClick={() => setActivePage(post.actionPage)} 
            className="btn btn-teal text-white rounded-pill px-4 py-2 fw-bold shadow-sm">
            {post.actionText}
          </button>
        </div>

      </div>
    </div>
  );
};