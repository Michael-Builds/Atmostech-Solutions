import React from 'react'
import Navbar from '../Nav/Navbar'
import Header from './Header';
import Footer from '../Footer/Footer';
import Main from './Main';
import Mission from './Mission';
import Jobs from './Jobs';
import Scroll from '../ScrollToTop/ScrolltoTop';

const About = () => {
  return (
    <>
      <Navbar />
      <section style={{ marginTop: "80px" }}>
        <Header />
        <Main />
        <Mission />
        <Jobs/>
      </section>
      <Footer />
      <Scroll />
    </>
  );
}

export default About