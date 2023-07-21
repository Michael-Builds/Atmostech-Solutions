import React from "react";
import cutting from "../../assets/tech.png";
import "../../index.css";
import "../../main.css";


const Main = () => {
    return (
        <section className="value-proposition mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">

                <div id='about-main' className="grid grid-cols-1 gap-8 md:grid-cols-2 about-content-1">
                    <div className="flex justify-center">
                        <img
                            src={cutting}
                            alt="ATMOS-PIC"
                            className="main-image "
                        />
                    </div>
                    <div className="flex flex-col justify-center mb-10 main-content ">
                        <h2 className="text-3xl mb-4 first-headings">
                            Unleashing the Power of Technology through ATMOS
                        </h2>
                        <p className="mb-4 mr-5">
                            We specialize in providing tailored, state-of-the-art tech solutions to help businesses and individuals thrive in today's digital landscape. Our innovative approach and commitment to quality ensure that our cutting-edge solutions meet your specific needs, empowering you to unlock new opportunities for growth and success
                        </p>
                        <p className="mb-4 mr-5">
                            Atmos Technology stands out for our commitment to innovation and quality. By harnessing the latest advancements in technology, we deliver customized, state-of-the-art solutions that precisely meet your unique needs
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
