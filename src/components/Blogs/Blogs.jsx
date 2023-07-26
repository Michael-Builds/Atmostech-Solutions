import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Header from './Header';
import Email from '../Contact/Email';
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';

const Software = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <section style={{ marginTop: "80px" }}>
        <Header />
        <Email />
      </section>
      <Footer />
      <Scroll />
    </>
  );
}

export default Software;