import React from "react";
import background from "./background.png";
import "../../index.css";
import "../../main.css";

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
                            Web Development Wizardry: Unleashing the Magic of the Digital Realm
                        </h2>
                        <p className="mb-4 mr-5">
                            Our expertise in web development allows us to craft customized websites, web applications, and e-commerce platforms that are tailored to your specific needs. With our innovative approach and commitment to quality, we deliver cutting-edge web development solutions that enable you to unlock new opportunities for growth and success online. Whether you need a simple website or a complex web application, we have the skills and knowledge to bring your digital vision to life.
                        </p>
                        <p className="mb-4 mr-5">
                            We leverage the latest advancements in web development technology to deliver bespoke, state-of-the-art websites, web applications, and e-commerce platforms that are tailored to your specific needs.
                        </p >
                        <p className="mb-4 mr-5">
                            Our team of skilled developers are dedicated to crafting cutting-edge solutions that empower you to stay ahead of the curve in the fast-paced digital landscape. With our unwavering commitment to quality, we ensure that every web development project we undertake is of the highest standard, delivering exceptional results that exceed your expectations
                        </p>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Main;
