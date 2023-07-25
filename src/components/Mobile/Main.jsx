import React from "react";
import Image from './Mobile.png';
import "../../index.css";
import "../../main.css";
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { BsAndroid, BsApple, BsWindows } from 'react-icons/bs';


const features = [
    {
        name: 'Android Applications',
        description:
            'Our services encompass the entire app development lifecycle, from initial concept and design to coding, testing, and deployment on the Google Play Store.',
        icon: BsAndroid,
    },
    {
        name: 'IOS Applications',
        description:
            'Our iOS app development service covers the entire app development process, starting from ideation and concept design to coding, testing, and deployment on the Apple App Store.',
        icon: BsApple,
    },
    {
        name: 'Hybrid Apps',
        description:
            'We offer expertise in building hybrid apps as part of our mobile app development services. Hybrid app development is a valuable aspect of our offerings, allowing us to provide clients with cross-platform solutions.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Windows Mobile',
        description:
            'We also offer expertise in building Windows Mobile apps. Windows Mobile was an operating system developed by Microsoft for smartphones and other mobile devices.',
        icon: BsWindows,
    },
]

const Main = () => {
    return (
        <section className="value-proposition mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">

                <div id='mobile' className="grid grid-cols-1 gap-8 md:grid-cols-2  ">
                    <div className="flex justify-center">
                        <img
                            id='mobile-image'
                            src={Image}
                            alt="ATMOS-PIC"
                        />
                    </div>
                    <div className="flex flex-col justify-center mb-10 main-content">
                        <h2 id='mobile-main-head' className="text-3xl mb-4 first-headings">
                            Unlocking the Full Potential of Mobile App Development with ATMOS Technology
                        </h2>
                        <p className="mb-4 mr-5" id='mob'>
                            Through our innovative approach and unwavering commitment to quality, we deliver cutting-edge mobile app solutions that are tailored to your unique needs, helping you unlock new opportunities for growth and success. Whether you need a native iOS or Android app, a hybrid app, or a mobile web app, our team of skilled developers has the expertise to deliver exceptional results that exceed your expectations
                        </p>
                        <p className="mb-4 mr-5" id='mob'>
                            Our mobile app development company specializes in crafting customized, state-of-the-art mobile solutions that enable businesses and individuals to thrive in the rapidly-evolving digital landscape.
                            With our mobile app development solutions, you can stay connected with your customers and drive engagement on the go.
                        </p>
                    </div>
                </div>
                {/* Options */}
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <p id='mob-option-head' className="mt-2 text-3xl font-bold  tracking-tight text-gray-900 sm:text-4xl">
                                Explore Your Mobile App Options: Tailored Solutions for Every Need
                            </p>
                            <p id='mob-option-sent' className="mt-6 text-lg leading-8 text-gray-600">
                                Explore Diverse Mobile App Options: From native apps delivering seamless user experiences to cross-platform versatility with hybrid apps. At Atmos Technology, we provide tailored solutions to empower your digital presence and cater to a wide range of user preferences.
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
