import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button
} from "@material-tailwind/react";
import management from '../../assets/management.jpeg';
import mobile from '../../assets/mobile.png';
import tech from '../../assets/tech.png'
import api from '../../assets/api.png';
import { Link } from 'react-router-dom';

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const ServicesProducts = () => {


  return (
    <section id="services-products" className="wrapper bg-gray-200 py-8"
    >
      <h1 className="title text-2xl text-center mb-6">Our Services and Products</h1>
      
      <div className="container mx-auto flex justify-center">

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2  products-home">

          <Card className="flex-row w-full max-w-[36rem] head zoom-in-1 produce"
          >
            <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none ">
              <img
                src={management}
                alt="first-me"
                className="w-full h-full object-contain product-tent"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" className="uppercase mb-4 title-typo">SchoolSync</Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2 sub">
                Introducing our Advanced School Management System
              </Typography>
              <Typography color="gray" className="font-normal mb-8 sent">
                Revolutionize school management with our advanced cross-platform solution launching this week, empowering educational institutions.
              </Typography>
              <CardFooter className='pt-0'>
                <Link to='/software' className="inline-block ">
                  <Button variant="text" className="flex items-center gap-2 produce-text ">
                    Learn More
                    <ArrowLongRightIcon strokeWidth={2} className="w-3 h-3" />
                  </Button>
                </Link>
              </CardFooter>
            </CardBody>
          </Card>
          <Card className="flex-row w-full max-w-[36rem] head zoom-in-2 produce"
          >
            <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
              <img
                src={mobile}
                alt="first-me"
                className="w-full h-full object-contain product-tent"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue" className="uppercase mb-4 title-typo">Uni-Mart</Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2 sub">
                Elevate Your Ride Experience with our Cross-Platform App
              </Typography>
              <Typography color="gray" className="font-normal mb-8 sent">
                Our powerful e-commerce app transforms the way businesses sell products online, delivering seamless shopping experiences and driving exponential growth.
              </Typography>
              <Link to='/mobile' className="inline-block">
                <Button variant="text" className="flex items-center gap-2 produce-text ">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-3 h-3" />
                </Button>
              </Link>
            </CardBody>
          </Card>

          <Card className="flex-row w-full max-w-[36rem] head zoom-in-3 produce"
          >
            <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
              <img
                src={tech}
                alt="first-me"
                className="w-full h-full object-contain product-tent"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" className="uppercase mb-4 title-typo">Web Development</Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2 sub">
                Lyft launching cross-platform service this week
              </Typography>
              <Typography color="gray" className="font-normal mb-8 sent">
                Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.
              </Typography>
              <Link to='/web' className="inline-block">
                <Button variant="text" className="flex items-center gap-2 produce-text ">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-3 h-3" />
                </Button>
              </Link>
            </CardBody>
          </Card>

          <Card className="flex-row w-full max-w-[36rem] head zoom-in-4 produce"
          >
            <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
              <img
                src={api}
                alt="first-me"
                className="w-full h-full object-contain product-tent"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" className="uppercase mb-4 title-typo">Api Integration</Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2 sub">
                Seamless Integration: Power Your Application with our API
              </Typography>
              <Typography color="gray" className="font-normal mb-8 sent">
                Unlock the full potential of your application with seamless API integration, enabling effortless data exchange, streamlined functionality.
              </Typography>
              <Link to='/api' className="inline-block">
                <Button variant="text" className="flex items-center gap-2 produce-text">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-3 h-3" />
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesProducts;
