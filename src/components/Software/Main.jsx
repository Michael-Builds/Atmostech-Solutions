import React from "react";
import Image from './Software.png';
import "../../index.css";
import "../../main.css";

const Main = () => {
    return (
        <section className="value-proposition mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">
                <div  className="grid grid-cols-1 gap-8 md:grid-cols-2 main-software">
                    <div className="flex justify-center">
                        <img
                            id="software-image"
                            src={Image}
                            alt="ATMOS-PIC"
                        />
                    </div>
                    <div id='software-main-content'  className="flex flex-col justify-center mb-10 main-content">
                        <h2 id ='software-main-head'className="text-3xl mb-4 first-headings">
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
                <div className="grid grid-cols-1 gap-8  mb-10 software-timeline ">
                    <div className="flex flex-col justify-center mb-10 software-sentence">
                        <div className="row">
                            <div className="option-title fade-in-left">
                                <h2 className="option-head text-left ml-10">Your Options</h2>
                            </div>
                        </div>
                        <p className="mb-4 mr-5">
                        Through our innovative approach and unwavering commitment to quality, we offer a diverse range of cutting-edge software solutions, meticulously tailored to address your unique needs and challenges. Our extensive selection of software options opens up a world of possibilities, empowering businesses and individuals alike to embrace new opportunities for growth and success.
                        </p>
                        <p className="mb-4 mr-5">
                        Whether you require robust enterprise software to streamline your operations, intuitive web applications to reach a broader audience, or customized desktop applications to enhance productivity, our team of highly skilled developers is equipped with the expertise to deliver exceptional results that surpass your expectations.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Main;
