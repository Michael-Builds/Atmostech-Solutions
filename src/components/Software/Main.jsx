import React from "react";
import Image from './Software.png';
import "../../index.css";
import "../../main.css";

const Main = () => {
    return (
        <section className="relative w-full h-full mb-0 value-proposition">
            <div className="mx-auto overflow-hidden">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 main-software">
                    <div className="flex justify-center">
                        <img
                            id="software-image"
                            src={Image}
                            alt="ATMOS-PIC"
                        />
                    </div>
                    <div id='software-main-content' className="flex flex-col justify-center mb-10 main-content">
                        <h2 id='software-main-head' className="mb-4 text-3xl first-headings">
                            Revolutionize Your World with ATMOS Technology: Unleashing the Power of Software Development
                        </h2>
                        <p className="mb-4 mr-5" id='soft'>
                            We offer tailored, state-of-the-art tech solutions designed to help businesses and individuals thrive in today's digital landscape. With our expertise in software development, we deliver cutting-edge software solutions that are customized to your specific needs.
                        </p>
                        <p className="mb-4 mr-5" id='soft'>
                            Our team of skilled developers leverage the latest advancements in technology to create bespoke software applications, enterprise systems, and mobile apps that empower you to stay ahead of the curve in the fast-paced digital world. With our innovative approach and commitment to quality, we ensure that every software development project we undertake is of the highest standard, delivering exceptional results that enable you to unlock new opportunities for growth and success.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Main;
