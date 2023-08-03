import React from "react";
import background from "./Image.png";
import "../../index.css";
import "../../main.css";
import { BiLinkAlt } from 'react-icons/bi';
import { MdSwapHorizontalCircle } from 'react-icons/md';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BiAperture } from 'react-icons/bi';

const features = [
    {
        name: 'Point-to-Point Integration',
        description:
            'We enable seamless communication between two specific applications, allowing data to flow directly between them without any intermediaries.',
        icon: BiLinkAlt,
    },
    {
        name: 'Middleware Integration',
        description:
            'Our middleware solutions act as a bridge between multiple applications, facilitating data exchange and communication among them.',
        icon: MdSwapHorizontalCircle,
    },
    {
        name: 'Cloud-based Integration',
        description:
            'Description: We leverage cloud platforms to connect and integrate various applications and services, ensuring scalability and flexibility.',
        icon: FaCloudDownloadAlt,
    },
    {
        name: 'Hub Integration (API Hub)',
        description:
            'Our API hub serves as a centralized platform that connects multiple applications, enabling efficient data sharing and management.',
        icon: BiAperture,
    },
]


const Main = () => {
    return (
        <section className="value-proposition mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 api-content">
                    <div className="flex justify-center">
                        <img
                            id='API-image'
                            src={background}
                            alt="ATMOS-PIC"
                        />
                    </div>
                    <div className="flex flex-col justify-center mb-10 main-content ">
                        <h2 id='api-main-head' className="text-3xl mb-4 first-headings">
                            Empowering Your Business with Cutting-Edge API Solutions from ATMOS Technology
                        </h2>
                        <p className="mb-4 mr-5" id='aps'>
                            Our API integration solutions include the development of RESTful APIs, SOAP APIs, and custom APIs, as well as the integration of third-party APIs from various providers. We ensure that the APIs we develop are secure, scalable, and robust, with high performance and minimal downtime.
                        </p>
                        <p className="mb-4 mr-5" id='aps'>
                            Our team also provides ongoing support and maintenance for the APIs we develop, ensuring that they remain up-to-date and continue to meet your evolving business needs. With our API integration solutions, you can streamline your business processes, improve communication and collaboration, and unlock new opportunities for growth and success.
                        </p>
                    </div>

                </div>

                {/* Options */}
                <div className="py-24 bg-white sm:py-32">
                    <div className="px-6 mx-auto max-w-7xl lg:px-8">
                        <div className="max-w-2xl mx-auto lg:text-center">
                            <p id='mob-option-head' className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Seamless API Integration Solutions: Empowering Your Digital Ecosystem
                            </p>
                            <p id='mob-option-sent' className="mt-6 text-lg leading-8 text-gray-600">
                            Our API integration services facilitate smooth and efficient connections between various applications and systems, enabling seamless data exchange and enhancing the functionality of your digital ecosystem. Harness the power of automation and streamline processes with our expert API integration solutions.
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
