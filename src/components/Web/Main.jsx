import React from "react";
import Image from './Website.png';
import "../../index.css";
import "../../main.css";

import { FaShoppingCart, FaGraduationCap, FaUser, FaGamepad } from 'react-icons/fa';

const features = [
    {
        name: 'E-commerce Websites',
        description:
            'Our services cover the entire development process of educational websites, starting from the initial concept and design to coding, testing, and deployment for seamless user access and engagement.',
        icon: FaShoppingCart,
    },
    {
        name: 'Educational Websites',
        description:
            'Our approach to educational website development encompasses the entire process, beginning with ideation and concept design, and continuing through coding, testing, and deployment for a successful launch.',
        icon: FaGraduationCap,
    },
    {
        name: 'Entertainment Websites',
        description:
            'Our teams expertise in developing entertainment websites spans the entire process, starting from conceptualization and design, followed by coding, testing, and deployment, ensuring an engaging and captivating user experience',
        icon: FaGamepad,
    },
    {
        name: 'Personal Websites',
        description:
            'Our team specializes in crafting personal websites, guiding you through the entire process, from concept and design to coding, testing, and deployment, ensuring an impactful and personalized user experience.',
        icon: FaUser,
    },
]

const Main = () => {
    return (
        <section className="value-proposition mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 web-page">
                    <div className="flex justify-center">
                        <img
                            id='Website-image'
                            src={Image}
                            alt="ATMOS-PIC"
                        />
                    </div>
                    <div className="flex flex-col justify-center mb-10 main-content">
                        <h2 id='website-header' className="text-3xl mb-4 first-headings">
                            Web Development Wizardry: Unleashing the Magic of the Digital Realm
                        </h2>
                        <p className="mb-4 mr-5" id='web'>
                            Our expertise in web development allows us to craft customized websites, web applications, and e-commerce platforms that are tailored to your specific needs. With our innovative approach and commitment to quality, we deliver cutting-edge web development solutions that enable you to unlock new opportunities for growth and success online. Whether you need a simple website or a complex web application, we have the skills and knowledge to bring your digital vision to life.
                        </p>
                        <p className="mb-4 mr-5" id='web'>
                            We leverage the latest advancements in web development technology to deliver bespoke, state-of-the-art websites, web applications, and e-commerce platforms that are tailored to your specific needs.
                        </p >
                        <p className="mb-4 mr-5" id='web'>
                            Our team of skilled developers are dedicated to crafting cutting-edge solutions that empower you to stay ahead of the curve in the fast-paced digital landscape. With our unwavering commitment to quality, we ensure that every web development project we undertake is of the highest standard, delivering exceptional results that exceed your expectations
                        </p>

                    </div>

                </div>
                {/* Options */}
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <p id='mob-option-head' className="mt-2 text-3xl font-bold  tracking-tight text-gray-900 sm:text-4xl">
                                Discover Your Web Development Possibilities: Custom Solutions to Suit Every Requirement
                            </p>
                            <p id='mob-option-sent' className="mt-6 text-lg leading-8 text-gray-600">
                                Explore Web Development Choices: Responsive custom web apps, versatile hybrid solutions. At Atmos Technology, we enhance your online presence with personalized services.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-16">
                                        <dt id='feature-head' className="text-base font-semibold leading-7 text-gray-900">
                                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
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
