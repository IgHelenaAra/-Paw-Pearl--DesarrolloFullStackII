import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ProductCard } from './ProductCard';
import { Header } from './Header';
import { mockDB } from '../data/mockDatabase';

describe('Paw&Pearl Frontend Unit Testing Suite (10 Test Cases)', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    localStorage.clear();

    // Inicializar productos por defecto para las pruebas CRUD
    if (!localStorage.getItem('paw_products')) {
      const DEFAULT_PRODUCTS = [
        { id: 'prod1', sku: 'NUT001', name: 'Alimento Holístico Adulto 3kg', category: 'Nutrición', price: 24990, stock: 25 },
        { id: 'prod2', sku: 'MED001', name: 'Antiparasitario NexGard Spectra', category: 'Farmacia', price: 18500, stock: 3 }
      ];
      localStorage.setItem('paw_products', JSON.stringify(DEFAULT_PRODUCTS));
    }
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  // PRUEBA 1: Renderizado básico del componente
  it('1. Debe renderizar correctamente el título del producto en el DOM', () => {
    const fakeProduct = { id: 'p1', name: 'Alimento Holístico', price: 20000, category: 'Nutrición', description: 'Test desc', image: 'test.jpg' };
    act(() => {
      render(<ProductCard product={fakeProduct} onSelectDetail={() => {}} onAddToCart={() => {}} />, container);
    });
    const titleElement = container.querySelector('.product-title');
    expect(titleElement.textContent).toBe('Alimento Holístico');
  });

  // PRUEBA 2: Formateo de precio en el DOM
  it('2. Debe formatear adecuadamente el precio del producto a pesos chilenos', () => {
    const fakeProduct = { id: 'p1', name: 'Juguete Canino', price: 15000, category: 'Juegos', description: 'Test desc', image: 'test.jpg' };
    act(() => {
      render(<ProductCard product={fakeProduct} onSelectDetail={() => {}} onAddToCart={() => {}} />, container);
    });
    const priceElement = container.querySelector('.product-price');
    expect(priceElement.textContent).toContain('15.000');
  });

  // PRUEBA 3: Disparo de eventos onClick (Agregar al carrito)
  it('3. Debe ejecutar el callback onAddToCart al hacer clic en el botón correspondiente', () => {
    const fakeProduct = { id: 'p2', name: 'NexGard', price: 18000, category: 'Farmacia', image: 'test.jpg' };
    const cartSpy = jasmine.createSpy('onAddToCart');
    act(() => {
      render(<ProductCard product={fakeProduct} onSelectDetail={() => {}} onAddToCart={cartSpy} />, container);
    });
    const btn = container.querySelector('.btn-add-cart-action');
    act(() => {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(cartSpy).toHaveBeenCalledWith(fakeProduct);
  });

  // PRUEBA 4: Disparo de evento para ver detalle
  it('4. Debe ejecutar la función onSelectDetail con el producto correcto', () => {
    const fakeProduct = { id: 'p3', name: 'Champú', price: 12000, category: 'Estética', image: 'test.jpg' };
    const detailSpy = jasmine.createSpy('onSelectDetail');
    act(() => {
      render(<ProductCard product={fakeProduct} onSelectDetail={detailSpy} onAddToCart={() => {}} />, container);
    });
    const btn = container.querySelector('.btn-detail-action');
    act(() => {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(detailSpy).toHaveBeenCalledWith(fakeProduct);
  });

  // PRUEBA 5: Actualización del DOM en el Header
  it('5. Debe reflejar el número total de ítems en el contador del Header', () => {
    mockDB.addToCart({ id: 'p1', name: 'Producto 1', price: 1000 }, 3);
    act(() => {
      render(<Header activePage="home" setActivePage={() => {}} />, container);
    });
    const counterElement = container.querySelector('#cart-item-count');
    expect(counterElement.textContent).toBe('3');
  });

  // PRUEBA 6: Lógica CRUD - Obtención de productos iniciales
  it('6. Debe retornar los productos predeterminados de la base de datos simulada', () => {
    const products = mockDB.getProducts();
    expect(products.length).toBeGreaterThan(0);
  });

  // PRUEBA 7: Lógica CRUD - Creación de un nuevo producto
  it('7. Debe agregar un nuevo producto a la lista almacenada en localStorage', () => {
    const newProd = mockDB.createProduct({ name: 'Cepillo Dental', price: 4500, category: 'Higiene' });
    const products = mockDB.getProducts();
    const found = products.find(p => p.id === newProd.id);
    expect(found).toBeDefined();
    expect(found.name).toBe('Cepillo Dental');
  });

  // PRUEBA 8: Lógica CRUD - Eliminación de productos
  it('8. Debe eliminar correctamente un producto por su ID', () => {
    const productsInitial = mockDB.getProducts();
    const idToDelete = productsInitial[0].id;
    mockDB.deleteProduct(idToDelete);
    const productsAfter = mockDB.getProducts();
    expect(productsAfter.find(p => p.id === idToDelete)).toBeUndefined();
  });

  // PRUEBA 9: Cálculo de Subtotales en el Carrito
  it('9. Debe calcular el total acumulado de compras correctamente', () => {
    mockDB.addToCart({ id: 'p1', price: 10000 }, 2);
    mockDB.addToCart({ id: 'p2', price: 5000 }, 1);
    const cart = mockDB.getCart();
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    expect(total).toBe(25000);
  });

  // PRUEBA 10: Vaciado completo del Carrito
  it('10. Debe limpiar todos los elementos del carrito al llamar a clearCart', () => {
    mockDB.addToCart({ id: 'p1', price: 3000 }, 2);
    expect(mockDB.getCart().length).toBe(1);
    mockDB.clearCart();
    expect(mockDB.getCart().length).toBe(0);
  });
});