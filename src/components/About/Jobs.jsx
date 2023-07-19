import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../../assets/my.jpg';

const Jobs = () => {
    const [projectsCompleted, setProjectsCompleted] = useState(0);
    const [satisfiedClients, setSatisfiedClients] = useState(0);
    const [partnerships, setPartnerships] = useState(0);
    const [hasAnimated] = useState(false);

    const [projectsCompletedRef, projectsCompletedInView] = useInView({ triggerOnce: true });
    const [satisfiedClientsRef, satisfiedClientsInView] = useInView({ triggerOnce: true });
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
        if (partnershipsInView) {
            setPartnerships(15);
        }
    }, [partnershipsInView]);

    const CounterInline = ({ end }) => {
        return <CountUp start={0} end={end} duration={2.0} separator="," />;
    };

    return (
        <section className="counter relative job-section">
            <div
                className="mx-auto overflow-hidden"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div
                    className="absolute inset-0 bg-black opacity-80"
                >
                </div>
                <div className="container mx-auto py-8 relative z-10">
                    <h2 className="text-3xl font-bold mb-4 heading text-center ">Our Impacts</h2>
                    <p className="text-white text-center mb-8 justify-center jobs">
                        We are dedicated to making a lasting impact in our community and beyond.
                    </p>
                    <div className="flex flex-wrap justify-center gap-10 job-items">
                        <div
                            ref={projectsCompletedRef}
                            className={`counter-item w-48 h-48 p-4 bg-white job-container shadow-lg mx-2 mb-8 flex flex-col justify-center items-center ${hasAnimated && projectsCompletedInView ? 'animate-counter-up' : ''
                                }`}
                        >
                            <span className="text-2xl font-bold mb-2 job-number">
                                <CounterInline end={projectsCompleted} />
                            </span>
                            <span className="text-gray-800 text-center job-name">Projects Completed</span>
                        </div>
                        <div
                            ref={satisfiedClientsRef}
                            className={`counter-item w-48 h-48 p-4 bg-white job-container shadow-lg mx-2 mb-8 flex flex-col justify-center items-center ${hasAnimated && satisfiedClientsInView ? 'animate-counter-up' : ''
                                }`}
                        >
                            <span className="text-2xl font-bold mb-2 job-number">
                                <CounterInline end={satisfiedClients} />
                            </span>
                            <span className="text-gray-800 text-center job-name">Satisfied Clients</span>
                        </div>

                        <div
                            ref={partnershipsRef}
                            className={`counter-item w-48 h-48 p-4 bg-white job-container shadow-lg mx-2 mb-8 flex flex-col justify-center items-center ${hasAnimated && partnershipsInView ? 'animate-counter-up' : ''
                                }`}
                        >
                            <span className="text-2xl font-bold mb-2 job-number">
                                <CounterInline end={partnerships} />
                            </span>
                            <span className="text-gray-800 text-center job-name">Partnerships</span>
                        </div>
                        <div
                            ref={partnershipsRef}
                            className={`counter-item w-48 h-48 p-4 bg-white job-container shadow-lg mx-2 mb-8 flex flex-col justify-center items-center ${hasAnimated && partnershipsInView ? 'animate-counter-up' : ''
                                }`}
                        >
                            <span className="text-2xl font-bold mb-2 job-number">
                                <CounterInline end={partnerships} />
                            </span>
                            <span className="text-gray-800 text-center job-name">Partnerships</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Jobs;