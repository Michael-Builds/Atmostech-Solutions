import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image1 from './Mission.png';
import Image2 from './Vision.png';


const MissionVision = () => {

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="mision-vision statements" >
      <div>

        <div id ='mission-statement' className={`mx-auto overflow-hidden  mt-8 ${inView2 ? 'fade-in-bottom fade-in-bottom-active' : ''
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
          <div id='vision-statement' className="grid grid-cols-1 gap-8 md:grid-cols-2 vision-content ">
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
      </div>
    </section>
  );
};
export default MissionVision;