import React from "react";
import background from "./background.png";
import "../../index.css";
import "../../main.css";
// import mob from './mob.jpeg';


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
            </div>

        </section>
    );
};

export default Main;
