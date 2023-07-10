import React from "react";
import Navbar from "../Nav/Navbar";
import Hero from "../Hero/Hero";
import Value from "../Value/Value";
import Mission from '../Mission/Mission';
import Products from '../Products/Products';
import Impacts from "../Impacts/Impacts";
import Footer from '../Footer/Footer';
import Scroll from '../ScrollToTop/ScrolltoTop';
// import Team from '../Team/Team';
import Partners from '../Partners/Partners';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="Home">
        <Hero />
        <Value />
        <Mission />
        <Products />
        <Impacts />
        {/* <Team/> */}
        <Partners/>
      </section>
      <Scroll/>
      <Footer />
    </>
  );
};

export default Home;
