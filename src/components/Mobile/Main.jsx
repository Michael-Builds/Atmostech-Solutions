import React from "react";
import background from "./background.png";
import "../../index.css";
import "../../main.css";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    Typography,
    TimelineBody,
} from "@material-tailwind/react";
import {
    HomeIcon,
    BellIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const Main = () => {
    return (
        <section className="value-proposition mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex justify-center">
                        <img
                            src={background}
                            alt="ATMOS-PIC"
                            className="main-image "
                        />
                    </div>
                    <div className="flex flex-col justify-center mb-10">
                        <h2 className="text-3xl mb-4 first-headings">
                            Unlocking the Full Potential of Mobile App Development with ATMOS Technology
                        </h2>
                        <p className="mb-4 mr-5">
                            Through our innovative approach and unwavering commitment to quality, we deliver cutting-edge mobile app solutions that are tailored to your unique needs, helping you unlock new opportunities for growth and success. Whether you need a native iOS or Android app, a hybrid app, or a mobile web app, our team of skilled developers has the expertise to deliver exceptional results that exceed your expectations
                        </p>
                        <p className="mb-4 mr-5">
                            Our mobile app development company specializes in crafting customized, state-of-the-art mobile solutions that enable businesses and individuals to thrive in the rapidly-evolving digital landscape.
                            With our mobile app development solutions, you can stay connected with your customers and drive engagement on the go.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                    <div className="flex flex-col justify-center mb-10">
                        <div className="row">
                            <div className="option-title fade-in-left">
                                <h2 className="option-head text-left ml-10">Your Options</h2>
                            </div>
                        </div>
                        <p className="mb-4 mr-5">
                            Through our innovative approach and unwavering commitment to quality, we deliver cutting-edge mobile app solutions that are tailored to your unique needs, helping you unlock new opportunities for growth and success. Whether you need a native iOS or Android app, a hybrid app, or a mobile web app, our team of skilled developers has the expertise to deliver exceptional results that exceed your expectations
                        </p>
                        <p className="mb-4 mr-5">
                            Our mobile app development company specializes in crafting customized, state-of-the-art mobile solutions that enable businesses and individuals to thrive in the rapidly-evolving digital landscape.
                            With our mobile app development solutions, you can stay connected with your customers and drive engagement on the go.
                        </p>
                    </div>
                    <div className="flex justify-center mt-12">
                        <div className="w-[32rem]">
                            <Timeline>
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2">
                                            <HomeIcon className="h-4 w-4" />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            Timeline Title Here.
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody>
                                        <Typography color="gary" className="font-normal text-gray-600">
                                            The key to more success is to have a lot of pillows.
                                        </Typography>
                                    </TimelineBody>

                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2">
                                            <BellIcon className="h-4 w-4" />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            Timeline Title Here.
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody>
                                        <Typography color="gary" className="font-normal text-gray-600">
                                            The key to more success is to have a lot of pillows.
                                        </Typography>
                                    </TimelineBody>

                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2">
                                            <CurrencyDollarIcon className="h-4 w-4" />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            Timeline Title Here.
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody>
                                        <Typography color="gary" className="font-normal text-gray-600">
                                            The key to more success is to have a lot of pillows.
                                        </Typography>
                                    </TimelineBody>

                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Main;
