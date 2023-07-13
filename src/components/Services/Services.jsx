import React from 'react';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';
import Header from './Header';
import Service from './Service';
import Product from './Product';

const Services = () => {
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
