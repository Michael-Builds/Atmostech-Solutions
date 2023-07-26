import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image1 from './Mission.png';
import Image2 from './Vision.png';
import { RiTeamFill } from 'react-icons/ri';
import { FaHandsHelping  } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { GiHeartInside  } from 'react-icons/gi';
import { GiShield  } from 'react-icons/gi';
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
              <h2 className="mt-8 mb-2 ml-12 text-3xl mision-first">
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
                id='vision-image'
                src={Image2}
                alt="ATMOS-PIC"
                className="w-full mb-6 md:w-64"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 id='visions' className="mb-2 text-3xl mision-second">
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
        <div className="flex items-center justify-center mt-12 value-cards">
          <div id='value-items' className="grid grid-cols-3 gap-2 mb-8 value-items">

            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white  w-65 h-75 value-card'>
              <span className="mb-2 text-4xl font-bold">
                <RiTeamFill className='value-icon-team value-icon' />
              </span>
              <span className="text-center text-gray-800 value-head">Team Work</span>
              <p className='text-center value-sentence'>
                We cultivate a collaborative culture that values diverse perspectives, encourages open communication.
              </p>
            </div>
            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white  w-65 h-75 value-card zoom-in-1'>
              <span className="mb-2 text-4xl font-bold">
                <FaHandsHelping  className='value-icon-surround value-icon' />
              </span>
              <span className="text-center text-gray-800 value-head">Unity</span>
              <p className='text-center value-sentence'>
                We take ownership of our actions, decisions, and outcomes, holding ourselves accountable for delivering results.
              </p>
            </div>

            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white  w-65 h-75 value-card zoom-in-2'>
              <span className="mb-2 text-4xl font-bold">
                <FaSmile className='value-icon-power value-icon' />
              </span>
              <span className="text-center text-gray-800 value-head">Enthusiam</span>
              <p className='text-center value-sentence'>
                We are committed to environmental and social sustainability, making responsible choices to protect our planet.
              </p>
            </div>

            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white  w-65 h-75 value-card zoom-in-3'>
              <span className="mb-2 text-4xl font-bold">
                <GiHeartInside  className='value-icon-unity value-icon' />
              </span>
              <span className="text-center text-gray-800 value-head">Passion</span>
              <p className='text-center value-sentence'>
                We are passionate about our work, driven by a shared purpose and enthusiasm to make a difference.</p>
            </div>

            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white  w-65 h-75 value-card zoom-in-4'>
              <span className="mb-2 text-4xl font-bold">
                <GiShield id='shield'  className='value-icon-transparent value-icon' />
              </span>
              <span className="text-center text-gray-800 value-head">Integrity</span>
              <p className='text-center value-sentence'>
                We uphold the highest ethical standards, acting honestly, responsibly, and transparently in all our endeavors.
              </p>
            </div>

            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white  w-65 h-75 value-card zoom-in-5'>
              <span className="mb-2 text-4xl font-bold">
                <GoTrophy id='value-icon' className='value-icon-trophy value-icon' />
              </span>
              <span className="text-center text-gray-800 value-head">Excellence</span>
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