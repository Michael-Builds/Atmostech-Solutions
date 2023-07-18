import React from 'react';
import { useInView } from 'react-intersection-observer';
import cutting from "../../assets/tech.png";
import choose1 from "../../assets/solutions.png";
import { RiTeamFill } from 'react-icons/ri';
import { FaStreetView } from 'react-icons/fa';
import { ImPower } from 'react-icons/im';
import { SiUnity } from 'react-icons/si';
import { HiCubeTransparent } from 'react-icons/hi';
import { GoTrophy } from 'react-icons/go';


const MissionVision = () => {

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="mision-vision" >
      <div>

        <div className={`mx-auto overflow-hidden  mt-8 ${inView2 ? 'fade-in-bottom fade-in-bottom-active' : ''
          }`}
          ref={ref2}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl mb-4 ml-12 mision-first mt-8">
                Mission Statement
              </h2>
              <p className="mb-4 ml-12">
                At Atmos Technology, we understand the transformative potential
                of technology in today's digital landscape. Our cutting-edge
                solutions are designed to empower businesses and individuals
                with the tools and capabilities they need to thrive in the
                modern world.
              </p>

            </div>
            <div className="flex justify-center">
              <img
                src={cutting}
                alt="ATMOS-PIC"
                className="w-64 image "
              />
            </div>
          </div>
        </div>
        <div className={`mx-auto overflow-hidden mt-5 ${inView3 ? 'fade-in-bottom fade-in-bottom-active' : ''
          }`}
          ref={ref3}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src={choose1}
                alt="ATMOS-PIC"
                className="w-full md:w-64 images mb-6"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl mb-3 mision-second">
                Vision Statement
              </h2>
              <p className="mb-8 mr-10">
                Our differentiating factor lies in our dedication to innovation
                and quality. Through leveraging cutting-edge advancements in
                technology, we provide tailored, state-of-the-art solutions to
                meet your specific needs.
              </p>
            </div>
          </div>
        </div>


        <div className={`justify-center align-center text-center mision-head ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
          }`}
          ref={ref1}>
          <h1 className="mision-title">
            Our Values
          </h1>
          <h3 className="mision-sub">
            Values define, guide, and inspire our organizational journey.
          </h3>
        </div>

        <div className="flex justify-center items-center mt-12 value-cards">
          <div className="grid grid-cols-3 gap-2 mb-8">
            <div className='counter-item w-64 h-64 p-4 value-card bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <RiTeamFill className='value-icon-team' />
              </span>
              <span className="text-gray-800 text-center value-head">Team Work</span>
              <p className='text-center'>
                We cultivate a collaborative culture that values diverse perspectives, encourages open communication, and promotes teamwork.
              </p>
            </div>

            <div className='counter-item w-64 h-64 p-4 value-card zoom-in-1 bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <FaStreetView className='value-icon-surround' />
              </span>
              <span className="text-gray-800 text-center value-head">Unity</span>
            </div>

            <div className='counter-item w-64 h-64 p-4 value-card zoom-in-2 bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <ImPower className='value-icon-power' />
              </span>
              <span className="text-gray-800 text-center value-head">Enthusiam</span>
            </div>

            <div className='counter-item w-64 h-64 p-4 value-card zoom-in-3 bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <SiUnity className='value-icon-unity' />
              </span>
              <span className="text-gray-800 text-center value-head">Passion</span>
            </div>

            <div className='counter-item w-64 h-64 p-4 value-card zoom-in-4 bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <HiCubeTransparent className='value-icon-transparent' />
              </span>
              <span className="text-gray-800 text-center value-head">Integrity</span>
            </div>

            <div className='counter-item w-64 h-64 p-4 value-card zoom-in-5 bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <GoTrophy className='value-icon-trophy' />
              </span>
              <span className="text-gray-800 text-center value-head">Excellence</span>
              <p className='text-center'>
                We relentlessly pursue excellence, striving for quality, innovation, and continuous improvement in all our endeavors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MissionVision;