import React from 'react';
import Vic from './vic.jpeg';
import logo from './logo.png';

export default function Testimonial() {
    return (
        <section className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-green-100 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="max-w-2xl mx-auto lg:max-w-4xl">
                <img className="h-24 mx-auto w-34 testimonial-image" src={logo} alt="" />
                <figure className="mt-10">
                    <blockquote className="mt-2 text-lg font-medium leading-8 text-center text-gray-900 sm:text-1xl sm:leading-9">
                        <p >
                            “Thanks to ATMOSTECH @atmostechsolutions, my energy to execute tasks has skyrocketed! Mr. SESHIE and his team provided me with an incredible IT system that's been a game-changer for my entrepreneurial journey.
                            Their customized system is a must-have for SMEs. Reach out to Chris directly @ranzymore to experience the difference. Afeto, AKPEEEEEE!”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="w-34 mx-auto h-32 bg-gray-500 rounded-lg"
                            src={Vic}
                            alt=""
                        />
                        <div className="flex items-center justify-center mt-4 space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Victoria Sehsie</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO & Founder of Smart Kidz Palace.</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}