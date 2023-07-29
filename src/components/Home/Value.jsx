import React from "react";
import choose from './choose.png';
import Prop from './value.png';
import "../../index.css";
import "../../main.css";
import { useInView } from "react-intersection-observer";

const ValueProposition = () => {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
    });

    return (
        <section className="relative w-full h-full mb-0 value-proposition">
            <div className="mx-auto overflow-hidden">
                <div id='value-main-content' className="grid grid-cols-1 gap-8 first-value md:grid-cols-2">

                    <div className="flex flex-col justify-center mb-10 main-content value-main">
                        <h2 id='value' className="mb-4 text-3xl first-headings">
                            Unlock the Power of Technology with Our Cutting-Edge Solutions
                        </h2>
                        <p id='first-sent' className="mb-4">
                            At Atmos Technology, we understand the transformative potential
                            of technology in today's digital landscape. Our cutting-edge
                            solutions are designed to empower businesses and individuals
                            with the tools and capabilities they need to thrive in the
                            modern world.
                        </p>
                        <p id='first-sent' className="mb-4">
                            Our differentiating factor lies in our dedication to innovation
                            and quality. Through leveraging cutting-edge advancements in
                            technology, we provide tailored, state-of-the-art solutions to
                            meet your specific needs.
                        </p>
                        <p id='first-sent' className="mb-4 ">
                            Embrace the digital revolution and unlock new opportunities with
                            our comprehensive range of tech solutions. Join the countless
                            businesses and individuals who have experienced the power of our
                            cutting-edge technology in driving growth and success.
                        </p>
                    </div>
                    <div id='mision-img' className="flex justify-center">
                        <img
                            id='value-one'
                            src={Prop}
                            alt="ATMOS-PIC"
                            className={`zoom-in-animation ${inView1 ? "zoom-in-animation-active" : ""
                                }`}
                            ref={ref1}
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto overflow-hidden">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 value-prop">
                    <div className="flex justify-center">
                        <img
                            id='value-two'
                            src={choose}
                            alt="ATMOS-PIC"
                            className="w-full md:w-64"
                        />
                    </div>
                    <div className="flex flex-col justify-center value-content">
                        <h2 id='value-pop' className="mb-3 text-4xl font-bold second-heading">
                            Why Choose Our Tech Solutions?
                        </h2>
                        <p className="mb-4 ">
                            Embrace the digital revolution and unlock new opportunities with
                            our comprehensive range of tech solutions. Join the countless
                            businesses and individuals who have experienced the power of our
                            cutting-edge technology in driving growth and success.
                        </p>
                        <p className="mb-4 ">
                            Embrace the digital revolution and unlock new opportunities with
                            our comprehensive range of tech solutions. Join the countless
                            businesses and individuals who have experienced the power of our
                            cutting-edge technology in driving growth and success.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
