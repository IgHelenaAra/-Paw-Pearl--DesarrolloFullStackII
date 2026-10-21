/* Paw&Pearl - Mock Database & Local Storage Handler */

const DEFAULT_PRODUCTS = [
  {
    id: 'prod1',
    sku: 'NUT001',
    name: 'Alimento Holístico Adulto 3kg',
    category: 'Nutrición',
    species: 'Perro',
    price: 24990,
    stock: 25,
    image: '/assets/img/1-tienda.jpg',
    description: 'Fórmula balanceada rica en omega 3 y proteínas de alta digestibilidad.',
    presentation: 'Bolsa de 3 Kilogramos',
    origin: 'Producto Certificado',
    isOffer: false
  },
  {
    id: 'prod2',
    sku: 'MED001',
    name: 'Antiparasitario NexGard Spectra',
    category: 'Farmacia',
    species: 'Perro / Gato',
    price: 18500,
    discountPrice: 15990,
    stock: 3,
    image: '/assets/img/2-tienda.jpg',
    description: 'Protección mensual completa contra pulgas, garrapatas y parásitos internos.',
    presentation: 'Caja de 1 Comprimido',
    origin: 'Laboratorio Veterinario Autorizado',
    isOffer: true
  },
  {
    id: 'prod3',
    sku: 'EST001',
    name: 'Champú Dermocosmético 500ml',
    category: 'Estética',
    species: 'Perro / Gato',
    price: 12900,
    stock: 12,
    image: '/assets/img/3-tienda.jpg',
    description: 'Especial para pieles sensibles con extracto de avena orgánica.',
    presentation: 'Frasco de 500 ml',
    origin: 'Hipoalergénico Nacional',
    isOffer: false
  },
  {
    id: 'prod4',
    sku: 'JUG001',
    name: 'Set de Juguetes Interactivos & Masticables',
    category: 'Accesorios',
    species: 'Perro',
    price: 14990,
    stock: 15,
    image: '/assets/img/4-tienda.jpg',
    description: 'Variedad de juguetes resistentes fabricados con goma no tóxica.',
    presentation: 'Set de 3 Piezas',
    origin: 'Importado de Alta Resistencia',
    isOffer: false
  },
  {
    id: 'prod5',
    sku: 'JUG002',
    name: 'Plato Interactivo Comedero Lento',
    category: 'Accesorios',
    species: 'Perro / Gato',
    price: 11500,
    discountPrice: 8990,
    stock: 20,
    image: '/assets/img/5-tienda.jpg',
    description: 'Ayuda a prevenir la ansiedad reduciendo la velocidad al comer.',
    presentation: 'Plato Antideslizante 20cm',
    origin: 'Plástico Libre de BPA',
    isOffer: true
  },
  {
    id: 'prod6',
    sku: 'NUT002',
    name: 'Snacks & Premios Crunchy Caninos',
    category: 'Nutrición',
    species: 'Perro',
    price: 6990,
    discountPrice: 4990,
    stock: 30,
    image: '/assets/img/6-tienda.jpg',
    description: 'Galletas crujientes horneadas con carne natural y vegetales.',
    presentation: 'Envase Doypack 250g',
    origin: '100% Natural',
    isOffer: true
  },
  {
    id: 'prod7',
    sku: 'NUT003',
    name: 'Snack Paletas Masticables Funcionales',
    category: 'Nutrición',
    species: 'Perro',
    price: 8990,
    stock: 18,
    image: '/assets/img/7-tienda.jpg',
    description: 'Premios entretenidos en forma de paleta rica en proteínas.',
    presentation: 'Pack x 4 Unidades',
    origin: 'Snack Funcional Premium',
    isOffer: false
  },
  {
    id: 'prod8',
    sku: 'EST002',
    name: 'Cepillo Deslanador Ergonómico Professional',
    category: 'Estética',
    species: 'Perro / Gato',
    price: 15990,
    discountPrice: 12990,
    stock: 10,
    image: '/assets/img/8-tienda.jpg',
    description: 'Remueve hasta un 90% del pelo muerto sin dañar la piel.',
    presentation: 'Hoja de Acero Inoxidable',
    origin: 'Uso Profesional',
    isOffer: true
  },
  {
    id: 'prod9',
    sku: 'MED002',
    name: 'Barra Masticable Dental con Menta Orgánica',
    category: 'Farmacia',
    species: 'Perro',
    price: 7490,
    stock: 22,
    image: '/assets/img/9-tienda.jpg',
    description: 'Limpia el sarro acumulado y combate el mal aliento.',
    presentation: 'Bolsa de 7 Barras',
    origin: 'Cuidado Oral Veterinario',
    isOffer: false
  }
];

const DEFAULT_SERVICES = [
  {
    id: 'serv1',
    name: 'Consulta Veterinaria General',
    category: 'Medicina Preventiva',
    icon: '🩺',
    price: 25000,
    duration: '30-45 Minutos',
    image: '/assets/img/1-inicio.jpg',
    description: 'Chequeo médico integral de rutina, auscultación cardiopulmonar, revisión de mucosas y diagnóstico general.',
    requirements: 'Traer carnet de vacunación anterior si lo posee.',
    recommendation: 'Ideal para controles anuales.'
  },
  {
    id: 'serv2',
    name: 'Peluquería y Spa Canino',
    category: 'Estética & Higiene',
    icon: '✂️',
    price: 22000,
    duration: '1 - 2 Horas',
    image: '/assets/img/1-nosotros.jpg',
    description: 'Servicio completo de baño con cosmética especializada, corte de pelo, deslanado profundo y corte de uñas.',
    requirements: 'Mascota libre de pulgas graves.',
    recommendation: 'Recomendado cada 4 a 6 semanas.'
  },
  {
    id: 'serv3',
    name: 'Vacunación y Desparasitación',
    category: 'Medicina Preventiva',
    icon: '💉',
    price: 18000,
    duration: '20 Minutos',
    image: '/assets/img/2-tienda.jpg',
    description: 'Aplicación de esquemas de inmunización completos y administración de antiparasitarios certificados.',
    requirements: 'El paciente debe encontrarse clínicamente sano.',
    recommendation: 'Fundamental para prevenir enfermedades infectocontagiosas.'
  }
];

const DEFAULT_ORDERS = [
  { id: 'ORD-2026-001', service: 'Consulta Médica General', date: '24/09/2026', status: 'Confirmada' },
  { id: 'ORD-2026-002', service: 'Alimento Holístico Adulto 3kg', date: '22/09/2026', status: 'En Camino' },
  { id: 'ORD-2026-003', service: 'Champú Dermocosmético 500ml', date: '29/10/2026', status: 'Pendiente' }
];

// Inicialización en LocalStorage
localStorage.setItem('paw_products', JSON.stringify(DEFAULT_PRODUCTS));

if (!localStorage.getItem('paw_orders')) {
  localStorage.setItem('paw_orders', JSON.stringify(DEFAULT_ORDERS));
}

export const mockDB = {
  getServices: () => DEFAULT_SERVICES,
  getServiceById: (id) => DEFAULT_SERVICES.find(s => s.id === id) || DEFAULT_SERVICES[0],
  
  getProducts: () => JSON.parse(localStorage.getItem('paw_products')) || [],
  getProductById: (id) => {
    const products = mockDB.getProducts();
    return products.find(p => p.id === id) || null;
  },

  createProduct: (productData) => {
    const products = mockDB.getProducts();
    const newProduct = { 
      ...productData, 
      id: `prod_${Date.now()}`,
      sku: productData.sku || `SKU-${Math.floor(1000 + Math.random() * 9000)}`,
      stock: productData.stock || 10,
      image: productData.image || '/assets/img/1-tienda.jpg'
    };
    products.push(newProduct);
    localStorage.setItem('paw_products', JSON.stringify(products));
    return newProduct;
  },

  updateProduct: (id, updatedFields) => {
    let products = mockDB.getProducts();
    products = products.map(p => p.id === id ? { ...p, ...updatedFields } : p);
    localStorage.setItem('paw_products', JSON.stringify(products));
  },

  deleteProduct: (id) => {
    let products = mockDB.getProducts();
    products = products.filter(p => p.id !== id);
    localStorage.setItem('paw_products', JSON.stringify(products));
  },

  getCart: () => JSON.parse(localStorage.getItem('paw_cart')) || [],

  addToCart: (product, quantity = 1) => {
    let cart = mockDB.getCart();
    const index = cart.findIndex(item => item.id === product.id);
    if (index > -1) {
      cart[index].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem('paw_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  },

  removeFromCart: (index) => {
    let cart = mockDB.getCart();
    cart.splice(index, 1);
    localStorage.setItem('paw_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  },

  clearCart: () => {
    localStorage.setItem('paw_cart', JSON.stringify([]));
    window.dispatchEvent(new Event('cartUpdated'));
  },

  // --- SOLICITUDES Y ÓRDENES ---
  getOrders: () => JSON.parse(localStorage.getItem('paw_orders')) || DEFAULT_ORDERS,

  createOrder: (itemName) => {
    const orders = mockDB.getOrders();
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    
    const newOrder = {
      id: `ORD-2026-${String(orders.length + 1).padStart(3, '0')}`,
      service: itemName,
      date: formattedDate,
      status: 'Pendiente'
    };

    orders.push(newOrder);
    localStorage.setItem('paw_orders', JSON.stringify(orders));
    window.dispatchEvent(new Event('ordersUpdated'));
    return newOrder;
  },

  // --- CANCELAR ORDEN PENDIENTE ---
  cancelOrder: (orderId) => {
    let orders = mockDB.getOrders();
    // Filtramos para eliminar la orden seleccionada por su ID
    orders = orders.filter(ord => ord.id !== orderId);
    localStorage.setItem('paw_orders', JSON.stringify(orders));
    window.dispatchEvent(new Event('ordersUpdated'));
  }
};