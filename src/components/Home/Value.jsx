import React from "react";
import cutting from "../../assets/tech.png";
import choose1 from "../../assets/solutions.png";
import "../../index.css";
import "../../main.css";
import { useInView } from "react-intersection-observer";

const ValueProposition = () => {
    const [ref1, inView1] = useInView({
        triggerOnce: true, // Only trigger the animation once
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true, // Only trigger the animation once
    });

    return (
        <section className="value-proposition mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl mb-4 first-headings">
                            Unlock the Power of Technology with Our Cutting-Edge Solutions
                        </h2>
                        <p className="mb-4">
                            At Atmos Technology, we understand the transformative potential
                            of technology in today's digital landscape. Our cutting-edge
                            solutions are designed to empower businesses and individuals
                            with the tools and capabilities they need to thrive in the
                            modern world.
                        </p>
                        <p className="mb-4">
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
                    <div className="flex justify-center">
                        <img
                            src={cutting}
                            alt="ATMOS-PIC"
                            className={`w-64 image rotate-animation ${inView1 ? "rotate-animation-active" : ""
                                }`}
                            ref={ref1}
                        />
                    </div>
                </div>
            </div>
            
            <div className="mx-auto overflow-hidden">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex justify-center">
                        <img
                            src={choose1}
                            alt="ATMOS-PIC"
                            className={`w-full md:w-64 images zoom-in-animation ${inView2 ? "zoom-in-animation-active" : ""
                                }`}
                            ref={ref2}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-3 second-heading">
                            Why Choose Our Tech Solutions?
                        </h2>
                        <ul className="pl-6">
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
    );
};

export default ValueProposition;
