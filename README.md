# TiendaParaMascotas-PawAndPearl--DesarrolloFullStackII

## Descripción
Aplicación web de e-commerce y servicios de atención clínica veterinaria **Paw & Pearl**, desarrollada en React con Bootstrap para la gestión de productos, catálogo, servicios veterinarios, panel de administración y carrito de compras. El proyecto incluye un entorno automatizado de pruebas unitarias implementado con Karma y Jasmine.

## Tecnologías Utilizadas
- **React & JSX**: Biblioteca principal para la creación de la interfaz de usuario basada en componentes dinámicos y reutilizables. JSX combina la sintaxis similar a HTML con la potencia lógica de JavaScript.
- **Bootstrap 5 & CSS3**: Utilizados para garantizar un diseño responsivo, limpio y adaptable a pantallas de escritorios, tablets y dispositivos móviles.
- **Babel**: Transpilador encargado de transformar el código JavaScript moderno (ES6+) y la sintaxis JSX a JavaScript compatible con cualquier navegador.
- **Webpack**: Empaquetador de módulos que procesa componentes, recursos estáticos (assets) y dependencias en un paquete optimizado para ejecución.
- **Jasmine**: Framework de pruebas (Testing Framework) que proporciona la sintaxis (`describe`, `it`, `expect`, `spy`) para estructurar las aserciones y casos de prueba.
- **Karma**: Ejecutador de pruebas (Test Runner) que levanta un entorno en segundo plano (`ChromeHeadless`), procesa las especificaciones de Jasmine y entrega los resultados directamente en la terminal.

# 🐾 Paw & Pearl — Tienda Veterinaria Online

```text
PawAndPearl-TiendaVeterinaria/
┗ 📁 paw-and-pearl/
  ┣ 📁 public/
  ┃ ┣ 📁 assets/
  ┃ ┃ ┣ 📁 css/
  ┃ ┃ ┃ ┗ 📄 style.css
  ┃ ┃ ┗ 📁 img/    
  ┃ ┃    ┗ 📄 ...png                       # Imágenes del sitio, blog y tienda
  ┃ ┣ 📄 favicon.ico
  ┃ ┣ 📄 index.html                     
  ┃ ┣ 📄 logo192.png
  ┃ ┣ 📄 logo512.png
  ┃ ┣ 📄 manifest.json
  ┃ ┗ 📄 robots.txt
  ┣ 📁 src/
  ┃ ┣ 📁 components/                    # Estructura de componentes con Bootstrap
  ┃ ┃ ┣ 📄 AdminSidebar.jsx
  ┃ ┃ ┣ 📄 AppTestingSuite.spec.js      # Suite con las 10 pruebas unitarias
  ┃ ┃ ┣ 📄 Footer.jsx
  ┃ ┃ ┣ 📄 Header.jsx
  ┃ ┃ ┗ 📄 ProductCard.jsx
  ┃ ┣ 📁 data/
  ┃ ┃ ┗ 📄 mockDatabase.js              # Base de datos simulada y persistencia en localStorage
  ┃ ┣ 📁 pages/                         # Páginas y vistas principales de la aplicación
  ┃ ┃ ┣ 📁 admin/
  ┃ ┃ ┃ ┗ 📄 AdminDashboard.jsx
  ┃ ┃ ┣ 📄 About.jsx
  ┃ ┃ ┣ 📄 Blog.jsx
  ┃ ┃ ┣ 📄 BlogDetail.jsx
  ┃ ┃ ┣ 📄 Cart.jsx
  ┃ ┃ ┣ 📄 Categories.jsx
  ┃ ┃ ┣ 📄 Checkout.jsx
  ┃ ┃ ┣ 📄 Contact.jsx
  ┃ ┃ ┣ 📄 Home.jsx
  ┃ ┃ ┣ 📄 Login.jsx
  ┃ ┃ ┣ 📄 MyRequests.jsx
  ┃ ┃ ┣ 📄 Offers.jsx
  ┃ ┃ ┣ 📄 OrderError.jsx
  ┃ ┃ ┣ 📄 OrderSuccess.jsx
  ┃ ┃ ┣ 📄 ProductDetail.jsx
  ┃ ┃ ┣ 📄 Register.jsx
  ┃ ┃ ┣ 📄 ServiceDetail.jsx
  ┃ ┃ ┣ 📄 Services.jsx
  ┃ ┃ ┗ 📄 Shop.jsx
  ┃ ┣ 📄 App.css
  ┃ ┣ 📄 App.js                         # Componente principal de enrutamiento/estado
  ┃ ┣ 📄 App.test.js
  ┃ ┣ 📄 index.css
  ┃ ┣ 📄 index.js                       # Punto de entrada de React
  ┃ ┣ 📄 logo.svg
  ┃ ┣ 📄 reportWebVitals.js
  ┃ ┗ 📄 setupTests.js
  ┣ 📄 .gitignore
  ┣ 📄 karma.conf.js                    # Configuración del ejecutor de pruebas unitarias Karma
  ┣ 📄 package.json                     # Dependencias y scripts del proyecto
  ┗ 📄 package-lock.json
