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

                <div id='edi-content' className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex justify-center">
                        <img
                            src={background}
                            alt="ATMOS-PIC"
                            className="main-image "
                        />
                    </div>
                    <div id='edi-main-head' className="flex flex-col justify-center mb-10 main-content">
                        <h2 className="text-3xl mb-4 first-headings">
                            Streamlining Business Communication with Electronic Data Interchange (EDI) and ATMOS Technology
                        </h2>
                        <p className="mb-4 mr-5">
                            Revolutionize Your Business Communication with Tailored EDI Solutions from Our Tech Experts.As part of our commitment to innovation and quality, we offer cutting-edge Electronic Data Interchange (EDI) solutions that enable businesses to streamline their communication and data exchange processes.
                        </p>
                        <p className="mb-4 mr-5">
                        Our team of experts can help you integrate EDI into your existing business systems, providing a seamless and efficient way to exchange business documents with your trading partners. With our customized EDI solutions, you can optimize your supply chain management, reduce costs, and improve the accuracy and speed of your business transactions. Let us help you unlock new opportunities for growth and success through the power of EDI and advanced technology.
                        </p>
                    </div>
                </div>
                
                <div id='edi-timeline' className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-10">

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
                    <div id ='edi-options' className="flex justify-center mt-12">
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
