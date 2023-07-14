import React from 'react';
import { useInView } from 'react-intersection-observer';
import productbg from '../../assets/me.jpg';

const Header = () => {

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });


  return (
    <section id="contact-section" className="wrapper relative py-8 text-center justify-center contact-section"
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
      <h1 className={`mb-5 contact-header z-10 ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
        }`}
        ref={ref1}>Talk to us About your Project</h1>
      <h3 className={`mb-4  contact-sub z-10 ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
        }`}>
        We provide you with the best
      </h3>
    </section>
  );
};
export default Header;
