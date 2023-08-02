import React from 'react';
import { useInView } from 'react-intersection-observer';
import Data from './Data.jpeg';

const Header = () => {

    const [ref1, inView1] = useInView({
        triggerOnce: true,
    });
    return (
        <section id="contact-section" className="relative justify-center py-8 text-center wrapper contact-section"
            style={{
                backgroundImage: `url(${Data})`,
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
                className="absolute inset-0 z-10 bg-black opacity-70"
            ></div>
            <h1 id='web-main-head' className={`mb-5 contact-header z-10 ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
                }`}
                ref={ref1}>Data Analytics and Visualization</h1>
            <h3 id='web-sub' className={`mb-5  contact-sub z-10 ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
                }`}>
                Providing innovative IT solutions for businesses.
            </h3>
        </section>
    )
};
export default Header;
