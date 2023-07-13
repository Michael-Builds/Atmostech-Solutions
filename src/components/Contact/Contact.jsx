import React from "react";
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';
import Header from './Header';
import Details from './Details';
import Location from './Location';
import Email from './Email';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <Header />
        <Details />
        <Location />
        <Email />
      </div>
      <Scroll />
      <Footer />
    </>
  );
};

export default Contact;
