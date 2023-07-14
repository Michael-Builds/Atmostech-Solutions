import React from 'react'
import Navbar from '../Nav/Navbar'
import Header from './Header';
import Main from './Main';
import Email from '../Contact/Email';
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';

const Software = () => {
  return (
    <>
      <Navbar />
      <section style={{ marginTop: "80px" }}>
        <Header />
        <Main />
        <Email />
      </section>
      <Footer />
      <Scroll />
    </>
  );
}

export default Software;