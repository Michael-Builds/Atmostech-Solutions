import React from 'react';
import first from '../../assets/Local.png';
import second from '../../assets/Sanitation.png';
import third from '../../assets/Tamani.png';
import fourth from '../../assets/RCD.png';
import fifth from '../../assets/Engineering.png';

const partnerData = [
  { src: first, alt: 'Transistor' },
  { src: second, alt: 'Reform' },
  { src: third, alt: 'Tuple' },
  { src: fourth, alt: 'SavvyCal' },
  { src: fifth, alt: 'SavvyCal' },
];

export default function Partners() {
  return (
    <section id='partners' className="py-24 bg-white sm:py-32">
      <h1 className="mb-5 text-center  team-header fade-in-bottom">Our Partners</h1>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold leading-8 text-center text-gray-900 partner-sub">
          Trusted by the worlds most innovative teams
        </h2>
        <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-12 gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {partnerData.map((partner, index) => (
            <img
              key={index}
              className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
              src={partner.src}
              alt={partner.alt}
              width={170}
              height={80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
