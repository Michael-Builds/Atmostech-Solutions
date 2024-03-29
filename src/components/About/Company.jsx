import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Nav/Navbar'
import Header from './Header';
import Footer from '../Footer/Footer';
import Company from './About';
import Main from './Main';
import Mission from './Mission';
import NewsLetter from '../NewsLetter/NewsLetter';
import Email from '../Contact/Email';
import Jobs from './Jobs';
import Testimonial from './Testimonial';
import Scroll from '../ScrollToTop/ScrolltoTop';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <section style={{ marginTop: "80px" }}>
        <Header />
        <Main />
        <Company />
        <Mission />
        <Jobs />
        <Testimonial/>
        <NewsLetter/>
        <Email/>
      </section>
      <Footer />
      <Scroll />
    </>
  );
}

export default About