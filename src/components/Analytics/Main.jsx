import React from "react";
import Image from './Main.png';
import "../../index.css";
import "../../main.css";
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaFlask, FaMedal } from 'react-icons/fa';
import { RiLineChartFill } from 'react-icons/ri';

const features = [
    {
        name: 'Descriptive Analytics',
        description:
            'Our software company offers descriptive analytics to provide clients with clear and visually engaging data summaries, enabling them to understand historical trends and make data-driven decisions.',
        icon: BsFillBarChartFill,
    },
    {
        name: 'Diagnostic Analytics',
        description:
            'Through diagnostic analytics, we help clients identify the root causes and factors behind past events, offering deeper insights into their data and supporting problem-solving efforts.',
        icon: FaFlask,
    },
    {
        name: 'Predictive Analytics',
        description:
            'Using predictive analytics, we empower clients to forecast future outcomes, enabling them to anticipate trends, make proactive decisions, and gain a competitive edge in their industry.',
        icon: RiLineChartFill,
    },
    {
        name: 'Prescriptive Analytics',
        description:
            'Our prescriptive analytics service recommends optimal actions based on data analysis, guiding clients in making informed choices to achieve specific goals and maximize desired results.',
        icon: FaMedal,
    },
]

const Main = () => {
    return (
        <section className="relative w-full h-full mb-0 value-proposition">
            <div className="mx-auto overflow-hidden">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 web-page">
                    <div className="flex justify-center">
                        <img
                            id='Analytics-image'
                            src={Image}
                            alt="ATMOS-PIC"
                        />
                    </div>
                    <div className="flex flex-col justify-center mb-10 main-content">
                        <h2 id='website-header' className="mb-4 text-3xl first-headings">
                            Unleashing the Magic of Data Analytics and Visualization
                        </h2>
                        <p className="mb-4 mr-5" id='web'>
                            At Atmos Technology, we are masters of Data Analytics Wizardry, harnessing the magic of the digital realm. With expertise in four fundamental types of data analytics – Descriptive, Diagnostic, Predictive, and Prescriptive – we conjure actionable insights from raw data. Our seasoned experts illuminate your data landscape, providing detailed Descriptive analytics to visualize and summarize historical information.
                        </p>
                        <p className="mb-4 mr-5" id='web'>
                            Through Diagnostic analytics, we dive deep into data patterns and correlations, uncovering hidden secrets and root causes behind trends and events. Our Predictive analytics unveils the future as we forecast outcomes based on meticulous historical data analysis. Taking it a step further, our Prescriptive analytics offers enchanted recommendations, optimizing processes and guiding you towards your desired outcomes.
                        </p >
                        <p className="mb-4 mr-5" id='web'>
                            With our unrivaled skills and a touch of magic, we weave together bespoke solutions and versatile approaches that elevate your online presence and empower you in today's data-driven world.
                        </p>
                    </div>
                </div>
                
                {/* Options */}
                <div className="py-24 bg-white sm:py-32">
                    <div className="px-6 mx-auto max-w-7xl lg:px-8">
                        <div className="max-w-2xl mx-auto lg:text-center">
                            <p id='mob-option-head' className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Data Analytics & Visualization: Unleashing Insights - Tailored Solutions for You.
                            </p>
                            <p id='mob-option-sent' className="mt-6 text-lg leading-8 text-gray-600">
                                Unleash Data Insights with Analytics & Visualization: Descriptive, Diagnostic, Predictive, and Prescriptive Services for an Enhanced Online Presence.
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
