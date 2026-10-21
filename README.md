🐾 Paw and Pearl - Tienda Veterinaria Online

Aplicación web desarrollada en React con Bootstrap para la gestión de productos, catálogo, servicios veterinarios, panel de administración y carrito de compras. El proyecto incluye un entorno automatizado de pruebas unitarias implementado con Karma y Jasmine.

📁 Estructura del Proyecto

PawAndPearl-TiendaVeterinaria/
┗ 📁 paw-and-pearl/
  ┣ 📁 public/
  ┃ ┣ 📁 assets/
  ┃ ┃ ┣ 📁 css/
  ┃ ┃ ┃ ┗ 📄 style.css
  ┃ ┃ ┗ 📁 img/   
  ┃ ┃    ┗ 📄 ...png                # Imágenes del sitio, blog y tienda
  ┃ ┣ 📄 favicon.ico
  ┃ ┣ 📄 index.html                 
  ┃ ┣ 📄 logo192.png
  ┃ ┣ 📄 logo512.png
  ┃ ┣ 📄 manifest.json
  ┃ ┗ 📄 robots.txt
  ┣ 📁 src/
  ┃ ┣ 📁 components/                # Estructura de componentes con Bootstrap
  ┃ ┃ ┣ 📄 AdminSidebar.jsx
  ┃ ┃ ┣ 📄 AppTestingSuite.spec.js  # Suite con las 10 pruebas unitarias
  ┃ ┃ ┣ 📄 Footer.jsx
  ┃ ┃ ┣ 📄 Header.jsx
  ┃ ┃ ┗ 📄 ProductCard.jsx
  ┃ ┣ 📁 data/
  ┃ ┃ ┗ 📄 mockDatabase.js          # Base de datos simulada y persitencia en localStorage(almacenamiento local)
  ┃ ┣ 📁 pages/                     # Páginas y vistas principales de la aplicación
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
  ┃ ┣ 📄 App.js                    # Gestor principal de navegación de la app
  ┃ ┣ 📄 App.test.js
  ┃ ┣ 📄 index.css
  ┃ ┣ 📄 index.js                  # Punto de entrada de React
  ┃ ┣ 📄 logo.svg
  ┃ ┣ 📄 reportWebVitals.js
  ┃ ┗ 📄 setupTests.js
  ┣ 📄 .gitignore
  ┣ 📄 karma.conf.js               # Configuración del ejecutor de pruebas unitarias Karma
  ┣ 📄 package.json                # Dependencias y scripts del proyecto
  ┗ 📄 package-lock.json


🛠️ Tecnologías y Herramientas Utilizadas

React & JSX: Biblioteca principal para la creación de la interfaz de usuario basada en componentes dinámicos y reutilizables. JSX combina la sintaxis similar a HTML con la potencia lógica de JavaScript.

Bootstrap 5 & CSS3: Utilizados para garantizar un diseño responsivo, limpio y adaptable a pantallas de escritorios, tablets y dispositivos móviles.

Babel: Transpilador encargado de transformar el código JavaScript moderno (ES6+) y la sintaxis JSX a JavaScript compatible con cualquier navegador.

Webpack: Empaquetador de módulos que procesa componentes, recursos estáticos (assets) y dependencias en un paquete optimizado para ejecución.

Jasmine: Framework de pruebas (Testing Framework) que proporciona la sintaxis (describe, it, expect, spy) para estructurar las aserciones y casos de prueba.

Karma: Ejecutador de pruebas (Test Runner) que levanta un entorno en segundo plano (ChromeHeadless), procesa las especificaciones de Jasmine y entrega los resultados directamente en la terminal.

⚙️ Desarrollo del Trabajo y Funcionamiento Técnico

1. Arquitectura de Componentes y Vistas

La aplicación sigue el principio de Responsabilidad Única. La lógica global y navegación se coordinan desde App.js, delegando la presentación a componentes modulares (Header, Footer, ProductCard) y vistas específicas dentro de src/pages/ (Tienda, Carrito, Blog, Detalle de Productos, Panel Administrativo, etc.).

2. Lógica CRUD y Persistencia

El archivo src/data/mockDatabase.js centraliza la gestión de datos simulando un backend persistente apoyado en localStorage:

Create: Registro de nuevos productos desde el panel de administración y adición de ítems al carrito.

Read: Consulta e iteración del catálogo de productos, promociones, entradas de blog y servicios.

Update: Modificación de cantidades de productos en el carrito y actualización de inventario.

Delete: Eliminación de productos por ID y vaciado completo de la orden de compra.

3. Validaciones del DOM y Pruebas Unitarias

En src/components/AppTestingSuite.spec.js se implementaron 10 pruebas unitarias aisladas bajo la metodología AAA (Arrange, Act, Assert):

Renderizado en el DOM: Confirmación de que nombres, badges y precios formateados a pesos chilenos se pinten correctamente en la interfaz.

Simulación de Eventos: Disparo de eventos click para validar callbacks de carrito y navegación.

Lógica del Negocio: Verificación de cálculos de subtotales, vaciado del carrito y manipulación del inventario simulado.

🚀 Comandos Disponibles

En la terminal, dentro de la carpeta paw-and-pearl, puedes ejecutar:

npm start

Ejecuta la aplicación en modo de desarrollo.

Abre http://localhost:3000 para verla en el navegador.

npm test

Inicia el ejecutor de pruebas Karma con Jasmine y ejecuta la suite completa de 10 pruebas unitarias:

Chrome Headless: Executed 10 of 10 SUCCESS
TOTAL: 10 SUCCESS


npm run build

Compila y optimiza la aplicación para producción dentro de la carpeta build.