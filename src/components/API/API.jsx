import React from 'react'
import Navbar from '../Nav/Navbar'
import Header from './Header';
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';

const API = () => {
  return (
    <>
      <Navbar />
      <section style={{ marginTop: "80px" }}>
        <Header />
      </section>
      <Footer />
      <Scroll />
    </>
  );
}

export default API