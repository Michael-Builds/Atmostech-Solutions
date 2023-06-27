import React, { useState, useEffect } from "react";
import Navbar from "../Nav/Navbar";
import "./home.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaCog, FaLaptop } from "react-icons/fa";

const Home = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const shouldShow = scrollTop > 100;
      setShowScrollToTop(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <section className="banner">
        {/* Slider Start */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <span className="text-uppercase text-sm letter-spacing ">
                  Tech Solutions for Your Business
                </span>
                <h1 class="mb-3 mt-3">Your Reliable Tech Partner</h1>
                <p class="mb-4 pr-5">
                  We offer cutting-edge tech solutions tailored to your business
                  needs, driving growth and success.
                </p>
                <div class="btn-container ">
                  <a
                    href="appoinment.html"
                    target="_blank"
                    class="btn btn-main-2 btn-icon btn-round-full"
                  >
                    Book a Demo{" "}
                    <IoIosArrowForward className="icofont-simple-right ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-products" className="wrapper style2">
        <div className="title">Our Services and Products</div>
        <div className="container">
          <div className="service-card">
            <div className="icon">
              <FaCog />
            </div>
            <h3 className="service-title">Service 1</h3>
            <p className="service-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              dapibus libero vitae fermentum consequat.
            </p>
            <a href="www.htu.com" className="button">
              Learn More
              <IoIosArrowForward className="icon-send" />
            </a>
          </div>

          <div className="service-card">
            <div className="icon">
              <FaLaptop />
            </div>
            <h3 className="service-title">Service 2</h3>
            <p className="service-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              dapibus libero vitae fermentum consequat.
            </p>
            <a href="www.htu.com" className="button">
              Learn More
              <IoIosArrowForward className="icon-send" />
            </a>
          </div>

          <div className="product-card">
            <div className="image">
              <FaCog />

              {/* <img src="product1.jpg" alt="Product 1" /> */}
            </div>
            <h3 className="product-title">Product 1</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              dapibus libero vitae fermentum consequat.
            </p>
            <a href="www.htu.com" className="button">
              Learn More
              <IoIosArrowForward className="icon-send" />
            </a>
          </div>

          <div className="product-card">
            <div className="image">
              <FaCog />

              {/* <img src="product2.jpg" alt="Product 2" /> */}
            </div>
            <h3 className="product-title">Product 2</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              dapibus libero vitae fermentum consequat.
            </p>
            <a href="www.htoc.com" className="button">
              Learn More
              <IoIosArrowForward className="icon-send" />
            </a>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="value-proposition">
        <div className="container">
          <div className="value-proposition-container">
            <div className="value-proposition-left">
              <h2>
                Unlock the Power of Technology with Our Cutting-Edge Solutions
              </h2>
              <p>
                At Atmos Technology, we understand the transformative potential
                of technology in today's digital landscape. Our cutting-edge
                solutions are designed to empower businesses and individuals
                with the tools and capabilities they need to thrive in the
                modern world.
              </p>
              <p>
                Our differentiating factor lies in our dedication to innovation
                and quality. Through leveraging cutting-edge advancements in
                technology, we provide tailored, state-of-the-art solutions to
                meet your specific needs.
              </p>

              <p>
                Embrace the digital revolution and unlock new opportunities with
                our comprehensive range of tech solutions. Join the countless
                businesses and individuals who have experienced the power of our
                cutting-edge technology in driving growth and success.
              </p>
            </div>

            <div className="value-proposition-right">
              <h2>Why Choose Our Tech Solutions?</h2>
              <ul>
                <li>Seamless integration with your existing systems</li>
                <li>Scalable solutions that grow with your business</li>
                <li>Advanced security measures to protect your data</li>
                <li>Intuitive user interfaces for easy adoption</li>
                <li>24/7 technical support and assistance</li>
                <li>Proven track record of successful implementations</li>
              </ul>
            </div>
            <div className="last-line">
              {/* <h2> Come Over</h2>
              <p className="last-line-text">
                Elevate your business to new heights with Atmos Tech Solutions'
                cutting-edge technology offerings. Uncover the transformative
                impact our solutions can have on revolutionizing your operations
                and fueling sustainable growth.
              </p> */}
              {/* <div className="btn-container">
                <a
                  href="appoinment.html"
                  target="_blank"
                  className="btn btn-main"
                >
                  Get in touch <IoIosArrowForward className="btn-icon" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      

      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
};

export default Home;
