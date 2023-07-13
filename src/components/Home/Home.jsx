import React from "react";
import Navbar from "../Nav/Navbar";
import Hero from "./Hero";
import Value from "./Value";
// import Mission from './Mission';
import Products from './Products';
import Impacts from "./Impacts";
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';
// import Team from './Team';
import Partners from './Partners';
// import Combine from '../Combine/Combine';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Value />
      <Products />
      <Impacts />
      <Partners />
      {/* <Combine/> */}
      <Footer />
      <Scroll />
    </>
  );
};

export default Home;
