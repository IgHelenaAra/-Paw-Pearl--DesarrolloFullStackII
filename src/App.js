import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Categories } from './pages/Categories';
import { Offers } from './pages/Offers';
import { ProductDetail } from './pages/ProductDetail';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { OrderError } from './pages/OrderError';
import { MyRequests } from './pages/MyRequests';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [userRole, setUserRole] = useState(null); // 'admin' | 'client' | null
  const [selectedProductId, setSelectedProductId] = useState('prod1');
  const [selectedServiceId, setSelectedServiceId] = useState('serv1');
  const [selectedPostId, setSelectedPostId] = useState('post1');

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
    setActivePage('product-detail');
  };

  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setActivePage('service-detail');
  };

  const handleSelectPost = (postId) => {
    setSelectedPostId(postId);
    setActivePage('blog-detail');
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'shop':
        return <Shop onSelectDetail={handleSelectProduct} />;
      case 'categories':
        return <Categories onSelectDetail={handleSelectProduct} />;
      case 'offers':
        return <Offers onSelectDetail={handleSelectProduct} />;
      case 'product-detail':
        return <ProductDetail productId={selectedProductId} setActivePage={setActivePage} />;
      case 'services':
        return <Services onSelectService={handleSelectService} setActivePage={setActivePage} />;
      case 'service-detail':
        return <ServiceDetail serviceId={selectedServiceId} setActivePage={setActivePage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog onSelectPost={handleSelectPost} />;
      case 'blog-detail':
        return <BlogDetail postId={selectedPostId} setActivePage={setActivePage} />;
      case 'login':
        return <Login setActivePage={setActivePage} setUserRole={setUserRole} />;
      case 'register':
        return <Register setActivePage={setActivePage} setUserRole={setUserRole} />;
      case 'cart':
        return <Cart setActivePage={setActivePage} />;
      case 'checkout':
        return <Checkout setActivePage={setActivePage} />;
      case 'order-success':
        return <OrderSuccess setActivePage={setActivePage} />;
      case 'order-error':
        return <OrderError setActivePage={setActivePage} />;
      case 'requests':
        return <MyRequests />;
      case 'admin':
        return userRole === 'admin' ? <AdminDashboard /> : <Login setActivePage={setActivePage} setUserRole={setUserRole} />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header activePage={activePage} setActivePage={setActivePage} userRole={userRole} setUserRole={setUserRole} />
      <main className="flex-grow-1">
        {renderCurrentPage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;