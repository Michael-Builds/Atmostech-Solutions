import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Nav/Navbar";
import Hero from "./Hero";
import Value from "./Value";
import Products from './Products';
import Impacts from "./Impacts";
import Patners from './Partners';
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';
import Team from './Team';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <Value />
      <Products />
      <Impacts />
      <Team />
      <Patners />
      <Scroll />
      <Footer />
    </>
  );
};

export default Home;
