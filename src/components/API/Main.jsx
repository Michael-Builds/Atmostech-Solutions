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
                            Empowering Your Business with Cutting-Edge API Solutions from ATMOS Technology
                        </h2>
                        <p className="mb-4 mr-5">
                            Our API integration solutions include the development of RESTful APIs, SOAP APIs, and custom APIs, as well as the integration of third-party APIs from various providers. We ensure that the APIs we develop are secure, scalable, and robust, with high performance and minimal downtime.
                        </p>
                        <p className="mb-4 mr-5">
                            Our team also provides ongoing support and maintenance for the APIs we develop, ensuring that they remain up-to-date and continue to meet your evolving business needs. With our API integration solutions, you can streamline your business processes, improve communication and collaboration, and unlock new opportunities for growth and success.
                        </p>
                    </div>

                </div>


                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                    <div className="flex flex-col justify-center mb-10">
                        <div className="row">
                            <div className="option-title fade-in-left">
                                <h2 className="option-head text-left ml-10">Your Options</h2>
                            </div>
                        </div>
                        <p className="mb-4 mr-5">
                            Through our innovative approach and unwavering commitment to quality, we deliver cutting-edge mobile app solutions that are tailored to your unique needs, helping you unlock new opportunities for growth and success. Whether you need a native iOS or Android app, a hybrid app, or a mobile web app, our team of skilled developers has the expertise to deliver exceptional results that exceed your expectations
                        </p>
                        <p className="mb-4 mr-5">
                            Our mobile app development company specializes in crafting customized, state-of-the-art mobile solutions that enable businesses and individuals to thrive in the rapidly-evolving digital landscape.
                            With our mobile app development solutions, you can stay connected with your customers and drive engagement on the go.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={background}
                            alt="ATMOS-PIC"
                            className="main-image "
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Main;
