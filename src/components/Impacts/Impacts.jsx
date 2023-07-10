import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import impact from '../../assets/Impact.mp4';

const Counter = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [partnerships, setPartnerships] = useState(0);
  const [hasAnimated] = useState(false);

  const [projectsCompletedRef, projectsCompletedInView] = useInView({ triggerOnce: true });
  const [satisfiedClientsRef, satisfiedClientsInView] = useInView({ triggerOnce: true });
  const [employeesRef, employeesInView] = useInView({ triggerOnce: true });
  const [partnershipsRef, partnershipsInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (projectsCompletedInView) {
      setProjectsCompleted(20);
    }
  }, [projectsCompletedInView]);

  useEffect(() => {
    if (satisfiedClientsInView) {
      setSatisfiedClients(10);
    }
  }, [satisfiedClientsInView]);

  useEffect(() => {
    if (employeesInView) {
      setEmployees(8);
    }
  }, [employeesInView]);

  useEffect(() => {
    if (partnershipsInView) {
      setPartnerships(15);
    }
  }, [partnershipsInView]);

  const CounterInline = ({ end }) => {
    return <CountUp start={0} end={end} duration={2.0} separator="," />;
  };

  return (
    <section className="counter relative">
      <video className="absolute inset-0 w-full h-full object-cover z-0" src={impact} autoPlay loop muted />
      <div className="container mx-auto py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="text-center md:w-1/2 md:mr-10">
            <h2 className="text-3xl font-bold mb-4 heading">Our Impacts</h2>
            <p className="text-white">
              We are dedicated to making a lasting impact in our community and beyond. Through our innovative projects
              and solutions, we strive to address pressing challenges and create positive change.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 heading2">Our Achievements in Making an Impact</h3>
            <p className="text-white">
              As a company, we are committed to making a lasting impact in our community and beyond. By undertaking
              innovative projects and providing cutting-edge solutions, we actively work towards addressing pressing
              challenges and driving positive change. Through our collaborative efforts, we aim to create a better future
              for individuals and society as a whole.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:w-1/2 mt-8 md:mt-0">
            <div
              ref={projectsCompletedRef}
              className={`counter-item w-64 h-64 p-4 bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center ${
                hasAnimated && projectsCompletedInView ? 'animate-counter-up' : ''
              }`}
            >
              <span className="text-4xl font-bold mb-2">
                <CounterInline end={projectsCompleted} />
              </span>
              <span className="text-gray-800 text-center">Projects Completed</span>
            </div>
            <div
              ref={satisfiedClientsRef}
              className={`counter-item w-64 h-64 p-4 bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center ${
                hasAnimated && satisfiedClientsInView ? 'animate-counter-up' : ''
              }`}
            >
              <span className="text-4xl font-bold mb-2">
                <CounterInline end={satisfiedClients} />
              </span>
              <span className="text-gray-800 text-center">Satisfied Clients</span>
            </div>
            <div
              ref={employeesRef}
              className={`counter-item w-64 h-64 p-4 bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center ${
                hasAnimated && employeesInView ? 'animate-counter-up' : ''
              }`}
            >
              <span className="text-4xl font-bold mb-2">
                <CounterInline end={employees} />
              </span>
              <span className="text-gray-800 text-center">Employees</span>
            </div>
            <div
              ref={partnershipsRef}
              className={`counter-item w-64 h-64 p-4 bg-white shadow-lg mx-4 mb-8 flex flex-col justify-center items-center ${
                hasAnimated && partnershipsInView ? 'animate-counter-up' : ''
              }`}
            >
              <span className="text-4xl font-bold mb-2">
                <CounterInline end={partnerships} />
              </span>
              <span className="text-gray-800 text-center">Partnerships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;