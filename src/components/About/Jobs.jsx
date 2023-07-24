import React from 'react';
import backgroundImage from '../../assets/my.jpg';

const Jobs = () => {
    const stats = [
        { id: 1, name: 'Contracts every Months', value: '10+' },
        { id: 2, name: 'Assets under holding', value: '$10 thousand' },
        { id: 3, name: 'New users annually', value: '50+' },
    ]

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
                    <h2 id='job-heading' className="text-3xl font-bold mb-4 text-center ">Our Impacts</h2>
                    <p id='job-sub' className="text-white text-center mb-3 justify-center jobs">
                        We are dedicated to making a lasting impact in our community and beyond.
                        Through a combination of innovative solutions, responsible practices, and meaningful collaborations, we strive to leave a lasting and meaningful legacy that enriches the lives of individuals, businesses, and society as a whole.
                    </p>
                    <div className=" py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                                {stats.map((stat) => (
                                    <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                        <dt className="text-base leading-7 text-white">{stat.name}</dt>
                                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                            {stat.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Jobs;