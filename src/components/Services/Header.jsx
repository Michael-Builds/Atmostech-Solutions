import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Header = () => {
  
    const typingRef = useRef(null);

    useEffect(() => {
      const typed = new Typed(typingRef.current, {
        strings: [
          'Websites',
          'Mobile Apps',
          'API Integration',
          'EDIs',
          'Customized Softwares',
        ],
        typeSpeed: 200,
        backSpeed: 60,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        <section id="services-products" className="wrapper py-8 text-center justify-center bg-gray-100"
        >
           <h1 className=" text-2xl mb-12 underline-green ">Products and Services</h1>
           <h3 className="text-3xl mb-4 type-head">
          We provide you with the best <span className="typing" ref={typingRef}></span>
          </h3>

        </section>
    );
};

export default Header;
