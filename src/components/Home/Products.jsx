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
import Website from './Website.png'
import api from '../../assets/api.png';
import { Link } from 'react-router-dom';

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const ServicesProducts = () => {


  return (
    <section id="services-products" className="py-8 bg-gray-200 wrapper"
    >
      <h1  className="mb-6 text-2xl text-center title">Our Services and Products</h1>
      
      <div className="container flex justify-center mx-auto">

        <div className="grid grid-cols-1 gap-14 mb-12 md:grid-cols-2 products-home">

          <Card className="flex-row w-full max-w-[36rem] head zoom-in-1 produce"
          >
            <CardHeader shadow={false} floated={false} className="w-2/5 m-0 rounded-r-none shrink-0 ">
              <img
                src={management}
                alt="first-me"
                className="object-contain w-full h-full product-tent"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" className="mb-4 uppercase title-typo">SchoolSync</Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2 sub">
                Introducing our Advanced School Management System
              </Typography>
              <Typography color="gray" className="mb-8 font-normal sent">
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
            <CardHeader shadow={false} floated={false} className="w-2/5 m-0 rounded-r-none shrink-0">
              <img
                src={mobile}
                alt="first-me"
                className="object-contain w-full h-full product-tent"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue" className="mb-4 uppercase title-typo">Uni-Mart</Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2 sub">
                Elevate Your Ride Experience with our Cross-Platform App
              </Typography>
              <Typography color="gray" className="mb-8 font-normal sent">
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
            <CardHeader shadow={false} floated={false} className="w-2/5 m-0 rounded-r-none shrink-0">
              <img
                src={Website}
                alt="first-me"
                className="object-contain w-full h-full product-tent"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" className="mb-4 uppercase title-typo">Web Development</Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2 sub">
                Lyft launching cross-platform service this week
              </Typography>
              <Typography color="gray" className="mb-8 font-normal sent">
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
            <CardHeader shadow={false} floated={false} className="w-2/5 m-0 rounded-r-none shrink-0">
              <img
                src={api}
                alt="first-me"
                className="object-contain w-full h-full product-tent"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" className="mb-4 uppercase title-typo">Api Integration</Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2 sub">
                Seamless Integration: Power Your Application with our API
              </Typography>
              <Typography color="gray" className="mb-8 font-normal sent">
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
