import React, { useState, useEffect } from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { mockDB } from '../../data/mockDatabase';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  
  // Formulario nuevo producto
  const [newProd, setNewProd] = useState({ name: '', price: '', category: 'Nutrición', sku: '' });

  const loadData = () => {
    setProducts(mockDB.getProducts());
    setOrders(mockDB.getOrders());
  };

  useEffect(() => {
    loadData();
    window.addEventListener('ordersUpdated', loadData);
    return () => window.removeEventListener('ordersUpdated', loadData);
  }, []);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!newProd.name || !newProd.price) return;

    mockDB.createProduct({
      name: newProd.name,
      price: Number(newProd.price),
      category: newProd.category,
      sku: newProd.sku || `SKU-${Math.floor(1000 + Math.random() * 9000)}`,
      description: 'Producto registrado desde el panel de control',
      image: '/assets/img/1-tienda.jpg'
    });

    setNewProd({ name: '', price: '', category: 'Nutrición', sku: '' });
    loadData();
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      mockDB.deleteProduct(id);
      loadData();
    }
  };

  const handleCancelOrder = (id) => {
    if (window.confirm('¿Cancelar esta solicitud?')) {
      mockDB.cancelOrder(id);
      loadData();
    }
  };

  // USUARIOS FICTICIOS PARA MOSTRAR EN LA TAB DE USUARIOS
  const mockUsers = [
    { id: 'usr1', name: 'Admin Principal', email: 'admin@pawandpearl.cl', role: 'Administrador', date: '01/01/2026' },
    { id: 'usr2', name: 'Camila Soto', email: 'camila@correo.cl', role: 'Cliente', date: '14/03/2026' },
    { id: 'usr3', name: 'Ricardo Silva', email: 'ricardo@correo.cl', role: 'Cliente', date: '28/05/2026' },
    { id: 'usr4', name: 'Sofía Valdés', email: 'sofia@correo.cl', role: 'Cliente', date: '10/09/2026' }
  ];

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* MENÚ LATERAL */}
        <div className="col-lg-3">
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* CONTENIDO PRINCIPAL SEGÚN LA PESTAÑA SELECCIONADA */}
        <div className="col-lg-9">
          
          {/* TAB 1: DASHBOARD GENERAL */}
          {activeTab === 'dashboard' && (
            <div>
              <h3 className="fw-extrabold text-navy mb-4">📊 Dashboard General</h3>

              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="bg-navy text-white p-4 rounded-4 border shadow-sm">
                    <span className="small text-teal fw-bold text-uppercase d-block mb-1">Total Pedidos</span>
                    <h2 className="display-6 fw-extrabold m-0">{orders.length}</h2>
                    <small className="text-white-50">Solicitudes procesadas</small>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-teal text-navy p-4 rounded-4 border shadow-sm">
                    <span className="small text-navy fw-bold text-uppercase d-block mb-1">Inventario Activo</span>
                    <h2 className="display-6 fw-extrabold m-0">{products.length}</h2>
                    <small className="text-navy-50">Productos en catálogo</small>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-white text-navy p-4 rounded-4 border shadow-sm">
                    <span className="small text-teal fw-bold text-uppercase d-block mb-1">Usuarios Activos</span>
                    <h2 className="display-6 fw-extrabold m-0">{mockUsers.length}</h2>
                    <small className="text-muted">Clientes registrados</small>
                  </div>
                </div>
              </div>

              {/* RESUMEN RÁPIDO */}
              <div className="bg-white p-4 rounded-5 border shadow-sm">
                <h5 className="fw-bold text-navy mb-3">Últimas Solicitudes Ingresadas</h5>
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead className="table-light">
                      <tr className="small text-muted text-uppercase">
                        <th>N° Orden</th>
                        <th>Detalle</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.slice(0, 4).map((ord, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold text-navy">{ord.id}</td>
                          <td className="small fw-semibold">{ord.service}</td>
                          <td className="small text-muted">{ord.date}</td>
                          <td>
                            <span className={`badge rounded-pill px-3 py-1.5 fw-bold ${ord.status === 'Confirmada' ? 'bg-success text-white' : 'bg-warning text-dark'}`}>
                              {ord.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GESTIÓN DE PRODUCTOS */}
          {activeTab === 'products' && (
            <div>
              <h3 className="fw-extrabold text-navy mb-4">📦 Gestión de Productos</h3>

              <div className="row g-4">
                <div className="col-md-5">
                  <div className="bg-white p-4 rounded-5 border shadow-sm">
                    <h5 className="fw-bold text-navy mb-3">Agregar Nuevo Producto</h5>
                    <form onSubmit={handleCreateProduct} className="d-flex flex-column gap-3">
                      <div>
                        <label className="form-label fw-bold small text-navy">Nombre *</label>
                        <input type="text" required placeholder="Ej: Cepillo Canino" className="form-control rounded-3" value={newProd.name} onChange={e => setNewProd({...newProd, name: e.target.value})} />
                      </div>

                      <div>
                        <label className="form-label fw-bold small text-navy">Precio ($CLP) *</label>
                        <input type="number" required placeholder="15000" className="form-control rounded-3" value={newProd.price} onChange={e => setNewProd({...newProd, price: e.target.value})} />
                      </div>

                      <div>
                        <label className="form-label fw-bold small text-navy">Categoría</label>
                        <select className="form-select rounded-3" value={newProd.category} onChange={e => setNewProd({...newProd, category: e.target.value})}>
                          <option value="Nutrición">Nutrición</option>
                          <option value="Farmacia">Farmacia</option>
                          <option value="Estética">Estética</option>
                          <option value="Accesorios">Accesorios</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-teal text-navy rounded-pill py-2.5 fw-bold shadow-sm mt-2">
                        Guardar Producto
                      </button>
                    </form>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="bg-white p-4 rounded-5 border shadow-sm">
                    <h5 className="fw-bold text-navy mb-3">Catálogo Actual ({products.length})</h5>
                    <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                      <table className="table align-middle">
                        <thead className="table-light">
                          <tr className="small text-muted">
                            <th>Producto</th>
                            <th>Precio</th>
                            <th className="text-end">Acción</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((p) => (
                            <tr key={p.id}>
                              <td>
                                <strong className="d-block text-navy small">{p.name}</strong>
                                <small className="text-muted">{p.category}</small>
                              </td>
                              <td className="fw-bold text-navy small">${p.price.toLocaleString('es-CL')}</td>
                              <td className="text-end">
                                <button onClick={() => handleDeleteProduct(p.id)} className="btn btn-outline-danger btn-sm rounded-pill px-3">
                                  Eliminar
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PEDIDOS Y SOLICITUDES */}
          {activeTab === 'orders' && (
            <div>
              <h3 className="fw-extrabold text-navy mb-4">🛒 Pedidos y Solicitudes</h3>

              <div className="bg-white p-4 rounded-5 border shadow-sm">
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead className="table-light">
                      <tr className="small text-teal text-uppercase fw-bold">
                        <th>N° Solicitud</th>
                        <th>Detalle Cita / Producto</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th className="text-center">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((ord, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold text-navy">{ord.id}</td>
                          <td className="fw-semibold text-navy small">{ord.service}</td>
                          <td className="text-muted small">{ord.date}</td>
                          <td>
                            <span className={`badge rounded-pill px-3 py-1.5 fw-bold ${ord.status === 'Confirmada' ? 'bg-success text-white' : 'bg-warning text-dark'}`}>
                              {ord.status}
                            </span>
                          </td>
                          <td className="text-center">
                            {ord.status === 'Pendiente' ? (
                              <button onClick={() => handleCancelOrder(ord.id)} className="btn btn-outline-danger btn-sm rounded-pill px-3">
                                Cancelar
                              </button>
                            ) : (
                              <span className="text-muted small">Completada</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: USUARIOS REGISTRADOS */}
          {activeTab === 'users' && (
            <div>
              <h3 className="fw-extrabold text-navy mb-4">👥 Usuarios Registrados</h3>

              <div className="bg-white p-4 rounded-5 border shadow-sm">
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead className="table-light">
                      <tr className="small text-teal text-uppercase fw-bold">
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Fecha Registro</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockUsers.map((u) => (
                        <tr key={u.id}>
                          <td className="fw-bold text-navy">{u.name}</td>
                          <td className="text-muted small">{u.email}</td>
                          <td>
                            <span className={`badge rounded-pill px-3 py-1.5 fw-bold ${u.role === 'Administrador' ? 'bg-teal text-white' : 'bg-light text-navy border'}`}>
                              {u.role}
                            </span>
                          </td>
                          <td className="text-muted small">{u.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};