import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import productbg from '../../assets/me.jpg';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  const typingRef = useRef(null);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

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
    <section
      id="services-products"
      className="wrapper py-8 relative"
      style={{
        backgroundImage: `url(${productbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-70 z-10"
      ></div>
      <h1 
        className={`text-2xl mb-12 underline-green z-10 ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
          }`}
        ref={ref1}
      >
        Products and Services
      </h1>
      <h3
        className={`text-3xl mb-4 type-head z-10 ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
          }`}
      >
        We provide you with the best{' '}
        <span className="typing" ref={typingRef}></span>
      </h3>
    </section>
  );
};
export default Header;
