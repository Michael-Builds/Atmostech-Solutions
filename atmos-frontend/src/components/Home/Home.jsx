import React, { useState, useEffect } from "react";
import Navbar from "../Nav/Navbar";
import "./home.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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

      {/*  Intro  */}
      <section id="intro" className="wrapper style1">
        <div className="title">The Introduction</div>
        <div className="container">
          <p className="style1">
            So in case you were wondering what this is all about ...
          </p>
          <p className="style2">
            Escape Velocity is a free responsive
            <br className="mobile-hide" />
            site template by{" "}
            <a href="http://html5up.net" className="nobr">
              HTML5 UP
            </a>
          </p>
          <p className="style3">
            It's <strong>responsive</strong>, built on <strong>HTML5</strong>{" "}
            and <strong>CSS3</strong>, and released for free under the{" "}
            <a href="http://html5up.net/license">
              Creative Commons Attribution 3.0 license
            </a>
            , so use it for any of your personal or commercial projects &ndash;
            just be sure to credit us!
          </p>
          <ul className="actions">
            <li>
              <a
                href="http://html5up.net/license"
                className="button style3 large"
              >
                Proceed
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="wrapper style1">
        <div className="title1">The Introduction</div>
        <div className="container">
          <p className="style1">
            So in case you were wondering what this is all about ...
          </p>
          <p className="style2">
            Escape Velocity is a free responsive
            <br className="mobile-hide" />
            site template by{" "}
            <a href="http://html5up.net" className="nobr">
              HTML5 UP
            </a>
          </p>
          <p className="style3">
            It's <strong>responsive</strong>, built on <strong>HTML5</strong>{" "}
            and <strong>CSS3</strong>, and released for free under the{" "}
            <a href="http://html5up.net/license">
              Creative Commons Attribution 3.0 license
            </a>
            , so use it for any of your personal or commercial projects &ndash;
            just be sure to credit us!
          </p>
          <ul className="actions">
            <li>
              <a
                href="http://html5up.net/license"
                className="button style3 large"
              >
                Proceed
              </a>
            </li>
          </ul>
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
