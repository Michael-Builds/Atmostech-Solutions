import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';
import Header from './Header';
import Service from './Service';
import Product from './Product';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <Header />
        <Service />
        <Product />
      </div>
      <Footer />
      <Scroll />
    </>
  );
};

export default Services;
