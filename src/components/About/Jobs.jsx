import React from 'react';
import { RiTeamFill } from 'react-icons/ri';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { MdThumbUp } from 'react-icons/md';
import { GiHeartInside } from 'react-icons/gi';
import { GiShield } from 'react-icons/gi';
import { GoTrophy } from 'react-icons/go';

const Values = () => {
    return (
        <section className="relative counter job-section">
            <div
                className="mx-auto overflow-hidden"
                style={{
                    backgroundImage: `url(${'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div
                    className="absolute inset-0 bg-black opacity-80"
                >
                </div>
                <div className="container relative z-10 py-8 mx-auto">
                    <h2 id='job-heading' className="mb-4 text-3xl font-bold text-center ">Our Values</h2>
                    <p id='job-sub' className="justify-center mb-3 text-center text-white jobs">
                        We firmly believe that values form the bedrock of our organizational journey. They serve as our guiding principles, directing our actions and decisions with unwavering clarity and purpose.
                        Our values are not just words on paper; they are the essence of who we are as a company and the driving force behind everything we do.
                    </p>
                    <div className="z-10 flex items-center justify-center mt-12 value-cards">
                        <div id='value-items' className="grid grid-cols-3 gap-2 mb-8 value-items">

                            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white w-65 h-75 value-card'>
                                <span className="mb-2 text-4xl font-bold">
                                    <RiTeamFill className='value-icon-team value-icon' />
                                </span>
                                <span className="text-center text-gray-800 value-head">Team Work</span>
                                <p className='text-center value-sentence'>
                                    We cultivate a collaborative culture that values diverse perspectives, encourages open communication.
                                </p>
                            </div>
                            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white w-65 h-75 value-card zoom-in-1'>
                                <span className="mb-2 text-4xl font-bold">
                                    <AiOutlineSafetyCertificate className='value-icon-surround value-icon' />
                                </span>
                                <span className="text-center text-gray-800 value-head">Accountability</span>
                                <p className='text-center value-sentence'>
                                    We take ownership of our actions, decisions, and outcomes, holding ourselves accountable for delivering results.
                                </p>
                            </div>

                            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white w-65 h-75 value-card zoom-in-2'>
                                <span className="mb-2 text-4xl font-bold">
                                    <MdThumbUp className='value-icon-power value-icon' />
                                </span>
                                <span className="text-center text-gray-800 value-head">Respect</span>
                                <p className='text-center value-sentence'>
                                    We are committed to environmental and social sustainability, making responsible choices to protect our planet.
                                </p>
                            </div>

                            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white w-65 h-75 value-card zoom-in-3'>
                                <span className="mb-2 text-4xl font-bold">
                                    <GiHeartInside className='value-icon-unity value-icon' />
                                </span>
                                <span className="text-center text-gray-800 value-head">Passion</span>
                                <p className='text-center value-sentence'>
                                    We are passionate about our work, driven by a shared purpose and enthusiasm to make a difference.</p>
                            </div>

                            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white w-65 h-75 value-card zoom-in-4'>
                                <span className="mb-2 text-4xl font-bold">
                                    <GiShield id='shield' className='value-icon-transparent value-icon' />
                                </span>
                                <span className="text-center text-gray-800 value-head">Integrity</span>
                                <p className='text-center value-sentence'>
                                    We uphold the highest ethical standards, acting honestly, responsibly, and transparently in all our endeavors.
                                </p>
                            </div>

                            <div id='value-card' className='flex flex-col items-center justify-center p-4 mx-4 mb-8 bg-white w-65 h-75 value-card zoom-in-5'>
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
            </div>
        </section>
    );
};

export default Values;