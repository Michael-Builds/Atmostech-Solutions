import React from "react";
import Navbar from "../Nav/Navbar";
import "./home.css";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <Navbar />
      {/*Banner Section */}
      <section className="banner">
        <div className="container">
          <div className="slider">
            <div className="slide">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-xl-7">
                  <div className="block">
                    <span
                      className="text-uppercase text-sm letter-spacing fade-in-left slide-in-left"
                      style={{ "--fade-delay": "0.5s" }}
                    >
                      Tech Solutions for Your Business
                    </span>
                    <h1
                      className="mb-3 mt-3 fade-in-left"
                      style={{ "--fade-delay": "1s" }}
                    >
                      Your Reliable Tech Partner
                    </h1>
                    <p
                      className="mb-4 pr-5 fade-in-left"
                      style={{ "--fade-delay": "1.5s" }}
                    >
                      We offer cutting-edge tech solutions tailored to your
                      business needs, driving growth and success.
                    </p>
                    <div
                      className="btn-container fade-in-left"
                      style={{ "--fade-delay": "2.0s" }}
                    >
                      <a
                        href="appoinment.html"
                        target="_blank"
                        className="btn btn-main-2 btn-icon btn-round-full"
                      >
                        Book a Demo{" "}
                        <IoIosArrowForward className="icofont-simple-right ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
