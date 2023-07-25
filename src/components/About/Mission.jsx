import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image1 from './Mission.png';
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
    <section className="mision-vision statements" >
      <div>

        <div className={`mx-auto overflow-hidden  mt-8 ${inView2 ? 'fade-in-bottom fade-in-bottom-active' : ''
          }`}
          ref={ref2}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mision-statement">
            <div className="flex flex-col justify-center mission">
              <h2 className="text-3xl mb-2 ml-12 mision-first mt-8">
                Mission Statement
              </h2>
              <p className="mb-4 ml-12">
                At Atmos Technology, we understand the transformative potential
                of technology in today's digital landscape. Our cutting-edge
                solutions are designed to empower businesses and individuals
                with the tools and capabilities they need to thrive in the
                modern world.
              </p>
              <p className="mb-4 ml-12">
                With a keen understanding of its transformative potential, our mission is to provide cutting-edge solutions that empower both businesses and individuals alike. By equipping them with advanced tools and capabilities, we enable them to not only survive but thrive in the modern world.
              </p>

            </div>
            <div className="flex justify-center">
              <img
               id='mission-image'
                src={Image1}
                alt="ATMOS-PIC"
                className="w-64"
              />
            </div>
          </div>
        </div>
        <div className={`mx-auto vision overflow-hidden mt-5 ${inView3 ? 'fade-in-bottom fade-in-bottom-active' : ''
          }`}
          ref={ref3}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 vision-content ">
            <div className="flex justify-center">
              <img
                src={choose1}
                alt="ATMOS-PIC"
                className="w-full md:w-64 images mb-6"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 id='visions' className="text-3xl mb-2 mision-second">
                Vision Statement
              </h2>
              <p className="mb-3 mr-10 mission-sent">
                Our differentiating factor lies in our dedication to innovation
                and quality.Through leveraging cutting-edge advancements in
                technology, we provide tailored, state-of-the-art solutions to
                meet your specific needs.
              </p>
              <p className='mb-8 mr-10 mission-sent'>
                Inspired by a commitment to innovation and uncompromising quality, our vision at Atmos Technology is to become a leading force in the digital landscape. By harnessing cutting-edge advancements in technology, we envision a future where businesses and individuals thrive through tailored, state-of-the-art solutions that exceed expectations
              </p>
            </div>
          </div>
        </div>

        <div className={`justify-center align-center text-center mision-head ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
          }`}
          ref={ref1}>
          <h1 id='values' className=" mision-title">
            Our Values
          </h1>
          <p id='values-sub' className="mision-sub">
            We firmly believe that values form the bedrock of our organizational journey. They serve as our guiding principles, directing our actions and decisions with unwavering clarity and purpose.
            Our values are not just words on paper; they are the essence of who we are as a company and the driving force behind everything we do.
          </p>
        </div>
        <div className="flex justify-center items-center mt-12 value-cards">
          <div id='value-items' className="grid grid-cols-3 gap-2 mb-8 value-items">

            <div id='value-card' className=' w-65 h-75 p-4 value-card bg-white mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <RiTeamFill className='value-icon-team value-icon' />
              </span>
              <span className="text-gray-800 text-center value-head">Team Work</span>
              <p className='text-center value-sentence'>
                We cultivate a collaborative culture that values diverse perspectives, encourages open communication.
              </p>
            </div>
            <div id='value-card' className=' w-65 h-75 p-4 value-card zoom-in-1 bg-white mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <FaStreetView className='value-icon-surround value-icon' />
              </span>
              <span className="text-gray-800 text-center value-head">Unity</span>
              <p className='text-center value-sentence'>
                We take ownership of our actions, decisions, and outcomes, holding ourselves accountable for delivering results.
              </p>
            </div>

            <div id='value-card' className=' w-65 h-75 p-4 value-card zoom-in-2 bg-white mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <ImPower className='value-icon-power value-icon' />
              </span>
              <span className="text-gray-800 text-center value-head">Enthusiam</span>
              <p className='text-center value-sentence'>
                We are committed to environmental and social sustainability, making responsible choices to protect our planet.
              </p>
            </div>

            <div id='value-card' className=' w-65 h-75 p-4 value-card zoom-in-3 bg-white mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <SiUnity className='value-icon-unity value-icon' />
              </span>
              <span className="text-gray-800 text-center value-head">Passion</span>
              <p className='text-center value-sentence'>
                We are passionate about our work, driven by a shared purpose and enthusiasm to make a difference.</p>
            </div>

            <div id='value-card' className=' w-65 h-75 p-4 value-card zoom-in-4 bg-white mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <HiCubeTransparent className='value-icon-transparent value-icon' />
              </span>
              <span className="text-gray-800 text-center value-head">Integrity</span>
              <p className='text-center value-sentence'>
                We uphold the highest ethical standards, acting honestly, responsibly, and transparently in all our endeavors.
              </p>
            </div>

            <div id='value-card' className=' w-65 h-75 p-4 value-card zoom-in-5 bg-white mx-4 mb-8 flex flex-col justify-center items-center'>
              <span className="text-4xl font-bold mb-2">
                <GoTrophy id='value-icon' className='value-icon-trophy value-icon' />
              </span>
              <span className="text-gray-800 text-center value-head">Excellence</span>
              <p className='text-center value-sentence'>
                We relentlessly pursue excellence, striving for quality, innovation, and continuous improvement in all our endeavors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MissionVision;