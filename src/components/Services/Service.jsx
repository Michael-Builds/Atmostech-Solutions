import React from 'react';
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { CiGlobe } from 'react-icons/ci';
import { VscVmConnect } from 'react-icons/vsc';
import { TbDeviceMobileStar } from 'react-icons/tb';
import { AiOutlineApi } from 'react-icons/ai';
import { AiOutlineCloudSync } from 'react-icons/ai';
import { BsBarChartFill } from 'react-icons/bs';

const Service = () => {
  
  // Array of service data
  const services = [
    {
      id: 1,
      icon: <VscVmConnect className="w-12 h-12 mx-auto mb-4 text-green-500 ike" />,
      title: "Software Development",
      description: "Our software development service is a catalyst for dreams, inspiring both personal growth and the pursuit of greatness.",
      link: '/software',
    },
    {
      id: 2,
      icon: <CiGlobe className="w-12 h-12 mx-auto mb-4 text-green-500 ike" />,
      title: "Web Development",
      description: "Unleash creativity with our web development service, turning aspirations into captivating online experiences that inspire.",
      link: '/web',
    },
    {
      id: 3,
      icon: <TbDeviceMobileStar className="w-12 h-12 mx-auto mb-4 text-green-500 ike" />,
      title: "Mobile App Development",
      description: "Empower innovation with our mobile app development service, creating seamless user-centric experiences that amplify engagement.",
      link: '/mobile',
    },
    {
      id: 4,
      icon: <AiOutlineApi className="w-12 h-12 mx-auto mb-4 text-green-500 ike" />,
      title: "API Integration",
      description: "Unleash the power of interconnected technologies with our API integration service, streamlining operations and fostering collaboration.",
      link: '/api',
    },
    {
      id: 5,
      icon: <AiOutlineCloudSync className="w-12 h-12 mx-auto mb-4 text-green-500 ike" />,
      title: "Electronic Data Interchange",
      description: "Transform business communication with our EDI service, streamlining data exchange between trading partners.",
      link: '/edi',
    },
    {
      id: 6,
      icon: <BsBarChartFill className="w-12 h-12 mx-auto mb-4 text-green-500 ike" />,
      title: "Data Analytics and Visualization",
      description: "Unlock actionable insights and data-driven decisions with our IT company's Data Analytics and Visualization services.",
      link: '/analytics',
    },
  ];

  return (
    <section className="flex items-center justify-center service section">
      <div className="container mx-auto">
        <div className="row">
          <div className="section-title fade-in-left">
            <h2 id='head' className="ml-10 text-left service-head">Services</h2>
          </div>
        </div>
        <div id='service-cart' className="grid justify-center grid-cols-3 mb-10 service-cards ml-11">
          {services.map((service) => (
            <Card key={service.id} id="service-card" className={`mt-6 w-96 card zoom-in-${service.id}`}>
              <CardBody >
              {service.icon}
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center service-title">
                  {service.title}
                </Typography>
                <Typography className="text-center service-sentence">
                  {service.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to={service.link} className="inline-block service-btn">
                  <Button size="sm" variant="text" className="flex items-center gap-2 service-card-btn">
                    Learn More
                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
