import React from "react";
import CEO from './chris.png';
import Ben from './ben.png';
import Mike from './mike.png';
import Eugene from './eugene.png';
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { HiBadgeCheck } from "react-icons/hi";

const teamData = [
  {
    image: CEO,
    name: "Chris Seshie",
    role: "CEO & Founder",
    bio: "Chris Seshie, an accomplished IT Software Project Manager with several years of experience in the UK, specializes in delivering innovative software solutions for the Automotive manufacturing sector.His expertise lies in streamlining business processes and harnessing technology to enhance operational efficiency, making him a valued asset in the industry.",
  },
  {
    image: Mike,
    name: "Kabanda Michael",
    role: "Marketing Lead & Junior Frontend Developer",
    bio: "I am Michael Kpanti Kabanda, the Marketing Lead at AtmosTech.As a passionate graphic designer with a flair for creativity in design and UI, I'm dedicated to crafting visually stunning and user-centric experiences. With a background in junior frontend development, I'm on a mission to ensure our designs seamlessly meet the needs of our users.Let's create something amazing together!",
  },
  {
    image: Eugene,
    name: "Eugene E. Sewor",
    role: "Frontend Developer",
    bio: "Meet Eugene Sewor, our seasoned React frontend developer with a remarkable two-year journey. Armed with an innate flair for UI/UX design, Eugene crafts captivating user interfaces with precision. With a passion for pixel-perfection, they bring elegance and functionality to our projects, elevating the user experience.",

  },
  {
    image: Ben,
    name: "Bernard K. Tay",
    role: "Lead Developer",
    bio: "Bernard Tay, the Lead Developer at AtmosTech, is a versatile Fullstack Software Developer. With extensive experience across various industries, including Ecommerce, Logistics, and Real Estate, he combines technical prowess with a keen eye for detail. Bernard's client-centric approach ensures timely delivery and customer satisfaction.",
  },
];

const Team = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="team-section relative mb-0 w-full h-full">
      <div className="mx-auto overflow-hidden">
        <div
          className={`justify-center mt-8 align-center relative text-center ${inView1 ? "fade-in-bottom fade-in-bottom-active" : ""
            }`}
          ref={ref1}
        >
          <h1 id="team-header" className="mb-2 team-header fade-in-bottom">
            Our Team
          </h1>
          <h3 className="mb-4 team-sub fade-in-bottom">
            The Strong Pillars behind our Success as an Organization
          </h3>
        </div>
        <div className="flex justify-center mb-12 mt-5">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-24 team-items">
            {teamData.map((teamMember, index) => (
              <Card id='team-cards' key={index} className="w-full max-w-[32rem] main-card">
                <CardHeader className="h-42 bg-gray-200" floated={false} color="blue-gray">
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="team-image object-center object-cover"
                  />
                </CardHeader>
                <CardBody className="mt-4">
                  <div className="mb-3 flex items-center justify-between">
                    <Typography color="blue-gray" className="team-name">
                      {teamMember.name}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="flex items-center gap-1.5 font-normal"
                    >
                      <HiBadgeCheck className="-mt-0.5 h-6 w-6 text-green-600" />
                    </Typography>
                  </div>
                  <div className="text-center mb-4">
                    <Typography color="gray" className="team-role">
                      {teamMember.role}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
