import React, { useState, useEffect } from "react";
import Navbar from "../Nav/Navbar";
import "./home.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import CountUp from "react-countup";
import { FaCog, FaLaptop } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// Patners images or logo's
import partner1 from "../../assets/Institute of Engineering.png";
import partner2 from "../../assets/Local Government Service.png";
import partner3 from "../../assets/Ministry of Sanitation.png";
import partner4 from "../../assets/Ministry of Works and Housing.png";
import partner5 from "../../assets/RCD.png";
import partner6 from "../../assets/Tamani.png";

// Blog posts
import cyber from "../../assets/Cyber.jpg";
import blockchain from "../../assets/blockchain.jpg";
import Ai from "../../assets/Ai.jpg";

// Badge
import badge from "../../assets/check.png";

// Team Members
import team1 from "../../assets/team1.png";

// Vision and Mission
import vision from "../../assets/vision.png";
import mission from "../../assets/mission.png";

// Value proposition-images
import cutting from "../../assets/cutting-edge.png";
import choose1 from "../../assets/choose-us1.png";
// import choose2 from '../../assets/choose-us2.png';

const Home = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [counterStart, setCounterStart] = useState(0);

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

  useEffect(() => {
    // Set the counter start value
    setCounterStart(0);
  }, []);

  const CounterInline = ({ end }) => {
    return (
      <CountUp start={counterStart} end={end} duration={2.0} separator="," />
    );
  };

  // Array of industries
  const industryOptions = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Retail",
    "Manufacturing",
    "Hospitality",
    "Automotive",
    "Telecommunications",
    "Media",
    "Energy",
    "Construction",
    "Transportation",
    "Consulting",
    "Government",
  ];

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

      {/* Value proposition */}
      <section className="value-proposition">
        <div className="value-proposition-container">
          <div className="section-value">
            <div className="section-words">
              <h2 className="section-tit">
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
            <div className="section-pic">
              <img src={cutting} alt="ATMOS-PIC" />
            </div>
          </div>
        </div>

        <div className="value-proposition-container">
          <div className="section-value">
            <div className="section-img">
              <img src={choose1} alt="ATMOS-PIC" />
            </div>
            <div className="section-words">
              <h2 className="section-tit">Why Choose Our Tech Solutions?</h2>
              <ul className="section-ul">
                <li>Seamless integration with your existing systems</li>
                <li>Scalable solutions that grow with your business</li>
                <li>Advanced security measures to protect your data</li>
                <li>Intuitive user interfaces for easy adoption</li>
                <li>Proven track record of successful implementations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        <div className="ms-section">
          <div className="section-content">
            <div
              className="section-text fade-in-left "
              style={{ "--fade-delay": "1s" }}
            >
              <h2 className="section-title">Mission</h2>
              <p className="section-description">
                Our mission is to provide reliable and tailored tech solutions
                that meet our clients' unique needs, delivering exceptional
                results and fostering long-term partnerships.
              </p>
            </div>
            <div
              className="section-image fade-in-left"
              style={{ "--fade-delay": "2.5s" }}
            >
              <img src={mission} alt="Vision and Mission" />
            </div>
          </div>
        </div>

        <div className="ms-section">
          <div className="section-content">
            <div
              className="section-text fade-in-left "
              style={{ "--fade-delay": "2.5s" }}
            >
              <h2 className="section-title">Vision</h2>
              <p className="section-description">
                Our vision is to empower businesses with innovative technology
                solutions, revolutionizing the industry and driving growth.
              </p>
            </div>
            <div
              className="section-image fade-in-left"
              style={{ "--fade-delay": "1s" }}
            >
              <img src={vision} alt="Vision and Mission" />
            </div>
          </div>
        </div>
      </section>

      {/* Service and Product Section */}
      <section id="services-products" className="wrapper style2 ">
        <div className="title">Our Services and Products</div>
        <div className="container">
          <div className="service-card zoom-in-fast">
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

          <div className="service-card zoom-in-medium">
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

          <div className="product-card zoom-in-slow">
            <div className="image">
              <FaCog />
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

          <div className="product-card zoom-in-slower">
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

      {/* Counter, our Impacts */}
      <section class="counter">
        <div className="counter-left">
          <h2>Our Impacts</h2>
          <p>
            We are dedicated to making a lasting impact in our community and
            beyond. Through our innovative projects and solutions, <br></br> we
            strive to address pressing challenges and create positive change.
          </p>

          <h3 className="second-h">Our Achievements in Making an Impact</h3>
          <p className="second-p">
            As a company, we are committed to making a lasting impact in our
            community and beyond. By undertaking <br></br> innovative projects
            and providing cutting-edge solutions, we actively work towards
            addressing pressing challenges <br></br> and driving positive
            change. Through our collaborative efforts, we aim to create a better
            future for individuals and <br></br> society as a whole.
          </p>
        </div>
        <div class="counter-right">
          <div class="counter-item">
            <span class="counter-number">
              <CounterInline start={0} end={20} />
            </span>
            <span class="counter-text">Projects Completed</span>
          </div>
          <div class="counter-item">
            <span class="counter-number">
              <CounterInline start={0} end={10} />+
            </span>
            <span class="counter-text">Satisfied Clients</span>
          </div>
          <div class="counter-item">
            <span class="counter-number">
              <CounterInline start={0} end={8} />
            </span>
            <span class="counter-text">Employees</span>
          </div>
          <div class="counter-item">
            <span class="counter-number">
              <CounterInline start={0} end={15} />+
            </span>
            <span class="counter-text">Partnerships</span>
          </div>
        </div>
      </section>

      {/* Our team section */}
      <section className="team-section">
        <div className="team-up">
          <h2>Our Team</h2>
          <p>
            Our team consists of highly skilled and dedicated professionals who
            are passionate about delivering exceptional results.<br></br> We
            work together, leveraging our diverse expertise and shared vision,
            to achieve excellence in everything we do.
          </p>
        </div>
        <div className="team-down">
          <div className="team-container">
            <div className="team-member zoom-in-fast">
              <img src={team1} alt="Team1" className="member-image" />
              <h3 className="member-name">Bernard Tay</h3>
              <div className="member-details">
                <img src={badge} alt="Badge" className="member-badge" />
                <h4 className="member-role">Full Stack Developer</h4>
              </div>
            </div>
            <div className="team-member zoom-in-fast">
              <img src={team1} alt="Team1" className="member-image" />
              <h3 className="member-name">Michael Kabanda</h3>
              <div className="member-details">
                <img src={badge} alt="Badge" className="member-badge" />
                <h4 className="member-role">Full Stack Developer</h4>
              </div>
            </div>
            <div className="team-member zoom-in-fast">
              <img src={team1} alt="Team1" className="member-image" />
              <h3 className="member-name">Eugene Elorm</h3>
              <div className="member-details">
                <img src={badge} alt="Badge" className="member-badge" />
                <h4 className="member-role">Backend Developer</h4>
              </div>
            </div>
            <div className="team-member zoom-in-medium">
              <img src={team1} alt="Team1" className="member-image" />
              <h3 className="member-name">Mr. Chris</h3>
              <div className="member-details">
                <img src={badge} alt="Badge" className="member-badge" />
                <h4 className="member-role">CEO & Co-Founder</h4>
              </div>
            </div>
            <div className="team-member zoom-in-slow">
              <img src={team1} alt="Team1" className="member-image" />
              <h3 className="member-name">Mr. Eli</h3>
              <div className="member-details">
                <img src={badge} alt="Badge" className="member-badge" />
                <h4 className="member-role">Software Engineer</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section class="partners-section">
        <div class="partners-left">
          <h2>Our Trusted Partners</h2>
          <p>
            We are proud to collaborate with industry-leading partners who share
            our <br></br> vision and commitment to excellence.
          </p>
          <h2 className="second-o">Explore Our Collaborations</h2>
          <p className="second-op">
            We are proud to collaborate with industry-leading partners who share
            our vision <br></br> and commitment to excellence in delivering
            exceptional solutions.Together, we <br></br>strive to drive
            innovation, foster growth, and make a positive impact on our clients
            and communities.
          </p>
        </div>
        <div class="partners-right">
          <div className="partner-images">
            <div className="partner-images">
              <img src={partner1} alt="Partner 1" />
              <img src={partner2} alt="Partner 2" />
              <img src={partner3} alt="Partner 3" />
              <img src={partner4} alt="Partner 4" />
              <img src={partner5} alt="Partner 5" />
              <img src={partner6} alt="Partner 6" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section class="blog-section">
        <h2>Latest Blog Posts</h2>
        <div class="blog-posts">
          <div class="blog-post">
            <img src={Ai} alt="Blog Post 1" />
            <h3>
              The Future of Artificial Intelligence <br></br> in Healthcare{" "}
            </h3>
            <p>
              Artificial Intelligence (AI) is revolutionizing the healthcare
              industry, from diagnosis to treatment. This blog post explores the
              potential of AI in improving patient care, accelerating medical
              research, and enhancing disease prediction and prevention.
            </p>
            <a href="blog1.html" class="read-more">
              Read More
            </a>
          </div>
          <div class="blog-post">
            <img src={blockchain} alt="Blog Post 2" />
            <h3>The Rise of Blockchain Technology: Transforming Industries</h3>
            <p>
              Blockchain technology has emerged as a game-changer, disrupting
              various sectors such as finance, supply chain, and healthcare.
              Discover the key features of blockchain, its potential
              applications, and how it can revolutionize data security,
              transparency, and trust in different industries.
            </p>
            <a href="blog2.html" class="read-more">
              Read More
            </a>
          </div>
          <div class="blog-post">
            <img src={cyber} alt="Blog Post 3" />
            <h3>
              The Importance of Cybersecurity in a Digitally Connected World
            </h3>
            <p>
              With the increasing prevalence of cyber threats, organizations and
              individuals need to prioritize cybersecurity. This blog post
              highlights the significance of robust cybersecurity measures,
              common vulnerabilities to watch out for, and best practices to
              safeguard sensitive data and protect against cyber attacks.
            </p>
            <a href="blog3.html" class="read-more">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Get in touch section */}
      <section className="get-in-touch-section">
        <div className="get-in-touch-left">
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! If you have any questions, inquiries, or
            would like to discuss a potential project, please get in touch with
            us using the contact form or the provided contact information below.
          </p>
          <ul>
            <li>
              <strong>Email :</strong> info@atmostechsolution.com
            </li>
            <li>
              <strong>Phone :</strong> +233 (0) 24055 6434
            </li>
            <li>
              <strong>Address :</strong> VH-0004-1348, ECG Volta CU, Agric Ave,
              Ho Mun., Volta, Ghana.
            </li>
          </ul>
        </div>
        <div className="get-in-touch-right">
          <h3>Send us a Message</h3>
          <form>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
              </div>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" required />
              </div>
              <div className="form-field">
                <label htmlFor="industry">Industry:</label>
                <select id="industry" name="industry" required>
                  <option value="">Select Industry</option>
                  {industryOptions.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <label htmlFor="message">Message:</label>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="send">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>
              Our tech company is dedicated to pushing the boundaries of
              innovation, delivering cutting-edge solutions, and empowering
              businesses with advanced technologies.
            </p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Email: info@atmostechsolution.com</p>
            <p>Phone: +233 (0) 24055 6434</p>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li>
                <a href="www.facebook.com" className="fb">
                  Facebook
                  <FaFacebookF className="social-icon-fb" />
                </a>
              </li>
              <li>
                <a href="www.twitter.com" className="tw">
                  {" "}
                  Twitter
                  <FaTwitter className="social-icon-tw" />
                </a>
              </li>
              <li>
                <a href="www.instagram.com" className="in">
                  {" "}
                  Instagram
                  <FaInstagram className="social-icon-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Atmos Technology. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
};

export default Home;
