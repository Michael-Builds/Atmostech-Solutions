import React from "react";
import EDI from './EDI.png';
import "../../index.css";
import "../../main.css";

import { GiCardExchange } from 'react-icons/gi';
import { BsFillCloudCheckFill } from 'react-icons/bs';
import { HiShieldCheck } from 'react-icons/hi';
import { RiShieldKeyholeFill } from 'react-icons/ri';

const features = [
    {
        name: 'Direct EDI Integration',
        description:
            'Our experts will implement direct EDI integration solutions, enabling your organization to establish a direct connection between your system and your trading partners systems. This direct link allows for real-time data exchange, reducing processing time and ensuring data accuracy.',
        icon: GiCardExchange,
    },
    {
        name: 'EDI via VAN (Value-Added Network)',
        description:
            ' We provide EDI services through a secure Value-Added Network, acting as an intermediary between your business and your trading partners. Our VAN service ensures reliable and secure data transmission, eliminating the need for direct connections with multiple partners.',
        icon: BsFillCloudCheckFill,
    },
    {
        name: 'AS2 Implementation',
        description:
            'Our team will set up AS2, a specification that facilitates secure data exchange over the internet. By implementing AS2, we ensure that your business can securely exchange EDI documents with partners using digital certificates and HTTP/S protocols.',
        icon: HiShieldCheck,
    },
    {
        name: 'AS4 Integration',
        description:
            'For more advanced EDI requirements, we offer AS4 integration services. AS4 extends the features of AS2, providing enhanced message validation and non-repudiation capabilities. This level of security and validation is ideal for specific business transactions that demand a higher level of assurance.',
        icon: RiShieldKeyholeFill,
    },
]
const Main = () => {
    return (
        <section className="value-proposition mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">

                <div id='edi-content' className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex justify-center">
                        <img
                            id='Edi-image'
                            src={EDI}
                            alt="ATMOS-PIC"
                        />
                    </div>
                    <div id='edi-main-head' className="flex flex-col justify-center mb-10 main-content">
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

                {/* Options */}
                <div className="py-24 bg-white sm:py-32">
                    <div className="px-6 mx-auto max-w-7xl lg:px-8">
                        <div className="max-w-2xl mx-auto lg:text-center">
                            <p id='mob-option-head' className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Streamline Your Business with Seamless EDI Solutions
                            </p>
                            <p id='mob-option-sent' className="mt-6 text-lg leading-8 text-gray-600">
                                Streamline Business with EDI Solutions. Experience efficient and secure data exchange for seamless collaboration and optimized operations.
                            </p>
                        </div>
                        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-16">
                                        <dt id='feature-head' className="text-base font-semibold leading-7 text-gray-900">
                                            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg">
                                                <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd id='feature-desc' className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>



            </div>

        </section>
    );
};

export default Main;
