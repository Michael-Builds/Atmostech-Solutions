import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';
import Header from './Header';
import Details from './Details';
import Location from './Location';
import Email from './Email';


const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <Header />
        <Details />
        <Location />
        <Email />
      </div>
      <Footer />
      <Scroll />
    </>
  );
};
export default Contact;
