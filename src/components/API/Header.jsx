import React from 'react';
import { useInView } from 'react-intersection-observer';
import Main from './Main.png';

const Header = () => {

    const [ref1, inView1] = useInView({
        triggerOnce: true,
    });
    return (
        <section id="contact-section" className="wrapper relative py-8 text-center justify-center contact-section"
            style={{
                backgroundImage: `url(${Main})`,
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
                className="absolute inset-0 bg-black opacity-80 z-10"
            ></div>

            <h1 id='api-head-top' className={`mb-5 contact-header z-10 ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
                }`}
                ref={ref1}>API Integration</h1>
            <h3 id='api-sub-top' className={`mb-4  contact-sub z-10  ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
                }`}>
                Providing innovative IT solutions for businesses.
            </h3>
        </section>
    )
};
export default Header;
