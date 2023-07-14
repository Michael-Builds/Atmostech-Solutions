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
                            Streamlining Business Communication with Electronic Data Interchange (EDI) and ATMOS Technology
                        </h2>
                        <p className="mb-4 mr-5">
                            Revolutionize Your Business Communication with Tailored EDI Solutions from Our Tech Experts.As part of our commitment to innovation and quality, we offer cutting-edge Electronic Data Interchange (EDI) solutions that enable businesses to streamline their communication and data exchange processes.
                        </p>
                        <p className="mb-4 mr-5">
                        Our team of experts can help you integrate EDI into your existing business systems, providing a seamless and efficient way to exchange business documents with your trading partners. With our customized EDI solutions, you can optimize your supply chain management, reduce costs, and improve the accuracy and speed of your business transactions. Let us help you unlock new opportunities for growth and success through the power of EDI and advanced technology.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Main;
