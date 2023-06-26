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
              <IoIosArrowForward className="icon-send"/>
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
              <IoIosArrowForward className="icon-send"/>
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
              <IoIosArrowForward className="icon-send"/>
            </a>
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
