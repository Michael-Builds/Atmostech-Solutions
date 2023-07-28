import React from 'react';
import first from '../../assets/Local.png';
import second from '../../assets/Sanitation.png';
import third from '../../assets/Tamani.png';
import fourth from '../../assets/RCD.png';
import fifth from '../../assets/Engineering.png';
import sixth from '../../assets/Sanitation.png';

export default function Partners() {
    return (
        <section id='partners' className="bg-white py-24 sm:py-32">
            <h1 className=" team-header fade-in-bottom text-center mb-5">Our Partners</h1>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <h2 className="text-center partner-sub text-lg font-semibold leading-8 text-gray-900">
                    Trusted by the world’s most innovative teams
                </h2>
                <div className="mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={first}
                        alt="Transistor"
                        width={170}
                        height={80}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={second}
                        alt="Reform"
                        width={170}
                        height={80}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={third}
                        alt="Tuple"
                        width={170}
                        height={80}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src={fourth}
                        alt="SavvyCal"
                        width={170}
                        height={80}
                    />
                      <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src={fifth}
                        alt="SavvyCal"
                        width={170}
                        height={80}
                    />
                      <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src={sixth}
                        alt="SavvyCal"
                        width={170}
                        height={80}
                    />       
                </div>
            </div>
        </section>
    )
}