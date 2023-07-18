import React from "react";
import background from "./background.png";
import "../../index.css";
import "../../main.css";


const Main = () => {
    return (
        <section className="value-proposition mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex justify-center">
                        <img
                            src={background}
                            alt="ATMOS-PIC"
                            className="main-image "
                        />
                    </div>
                    <div className="flex flex-col justify-center mb-10">
                        <h2 className="text-3xl mb-4 first-headings">
                            Revolutionize Your World with ATMOS Technology: Unleashing the Power of Software Development
                        </h2>
                        <p className="mb-4 mr-5">
                            We offer tailored, state-of-the-art tech solutions designed to help businesses and individuals thrive in today's digital landscape. With our expertise in software development, we deliver cutting-edge software solutions that are customized to your specific needs.
                        </p>
                        <p className="mb-4 mr-5">
                            Our team of skilled developers leverage the latest advancements in technology to create bespoke software applications, enterprise systems, and mobile apps that empower you to stay ahead of the curve in the fast-paced digital world. With our innovative approach and commitment to quality, we ensure that every software development project we undertake is of the highest standard, delivering exceptional results that enable you to unlock new opportunities for growth and success.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Main;
