import React from 'react';
import { useInView } from 'react-intersection-observer';
import cutting from "../../assets/tech.png";
import choose1 from "../../assets/solutions.png";

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

      <div className={`justify-center align-center text-center mision-head ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
        }`}
        ref={ref1}>
        <h1 className="mision-title">
          Mission and Vision
        </h1>
        <h3 className="mision-sub">
          We provide you with the best
        </h3>
      </div>

      <div className={`mx-auto overflow-hidden mt-8 ${inView2 ? 'fade-in-bottom fade-in-bottom-active' : ''
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

    </section>
  );
};
export default MissionVision;