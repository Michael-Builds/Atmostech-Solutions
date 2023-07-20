import React from 'react';
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { CiGlobe } from 'react-icons/ci';
import { VscVmConnect } from 'react-icons/vsc';
import { TbDeviceMobileStar } from 'react-icons/tb';
import { AiOutlineApi } from 'react-icons/ai';
import { AiOutlineCloudSync } from 'react-icons/ai';

const Service = () => {
  return (
    <section className="service section flex justify-center items-center">
      <div className="container mx-auto">
        <div className="row">
          <div className="section-title fade-in-left">
            <h2 id='head' className="service-head text-left ml-10">Services</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 service-cards justify-center mb-10 ml-11">
          <Card className="mt-6 w-96 card zoom-in-1">
            <CardBody>
              <VscVmConnect className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center service-title">
                Software Development
              </Typography>
              <Typography className="text-center service-sentence">
                Our software development service is a catalyst for dreams, inspiring both personal growth and the pursuit of greatness.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to='/software' className="inline-block service-btn">
                <Button size="sm" variant="text" className="flex items-center gap-2 service-card-btn">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 card zoom-in-3">
            <CardBody>
              <CiGlobe className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center service-title">
                Web Development
              </Typography>
              <Typography className="text-center service-sentence">
                Unleash creativity with our web development service, turning aspirations into captivating online experiences that inspires.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to='/web' className="inline-block service-btn">
                <Button size="sm" variant="text" className="flex items-center gap-2 service-card-btn">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 card zoom-in-3">
            <CardBody>
              <TbDeviceMobileStar className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center service-title">
                Mobile App Development
              </Typography>
              <Typography className="text-center service-sentence">
                Empower innovation with our mobile app development service, creating seamless user-centric experiences that amplify engagement.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to='/mobile' className="inline-block service-btn">
                <Button size="sm" variant="text" className="flex items-center gap-2 service-card-btn">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 card zoom-in-4">
            <CardBody>
              <AiOutlineApi className="text-green-500  w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center service-title">
                API Integration
              </Typography>
              <Typography className="text-center service-sentence">
                Unleash the power of interconnected technologies with our API integration service, streamlining operations and fostering collaboration.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to='/api' className="inline-block service-btn">
                <Button size="sm" variant="text" className="flex items-center gap-2 service-card-btn">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-96 card zoom-in-5">
            <CardBody>
              <AiOutlineCloudSync className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center service-title">
                Electronic Data Interchange
              </Typography>
              <Typography className="text-center service-sentence">

                Transform business communication with our EDI service, streamlining data exchange between trading partners.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to='/edi' className="inline-block service-btn">
                <Button size="sm" variant="text" className="flex items-center gap-2 service-card-btn">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 card zoom-in-6">
            <CardBody>
              <RocketLaunchIcon className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center service-title">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center service-sentence">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others through digitalization and transformation.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="www.blog.html" className="inline-block service-btn">
                <Button size="sm" variant="text" className="flex items-center gap-2 service-card-btn">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Service;
