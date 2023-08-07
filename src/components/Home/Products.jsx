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
import API from '../API/Image.png';
import { Link } from 'react-router-dom';

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const servicesProductsData = [
  {
    image: management,
    title: "SchoolSync",
    subtitle: "Introducing our Advanced School Management System",
    description: "Revolutionize school management with our advanced cross-platform solution launching this week, empowering educational institutions.",
    path: "/software"
  },

  {
    image: mobile,
    title: "Uni-Mart",
    subtitle: "Elevate Your Ride Experience with our Cross-Platform App",
    description: "Our powerful e-commerce app transforms the way businesses sell products online, delivering seamless shopping experiences and driving exponential growth.",
    path: "/mobile"
  },
  {
    image: Website,
    title: "Web Development",
    subtitle: "Lyft launching cross-platform service this week",
    description: "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",
    path: "/web"
  },
  {
    image: API,
    title: "API Integration",
    subtitle: "Seamless Integration: Power Your Application with our API",
    description: "Unlock the full potential of your application with seamless API integration, enabling effortless data exchange, streamlined functionality.",
    path: "/api"
  },
];

const ServicesProducts = () => {
  return (
    <section id="services-products" className="py-8 bg-gray-200 wrapper">
      <h1 className="mb-6 text-2xl text-center title">Our Services and Products</h1>
      <div className="container flex justify-center mx-auto">
        <div className="grid grid-cols-1 gap-14 mb-12 md:grid-cols-2 products-home">
          {servicesProductsData.map((item, index) => (
            <Card
              key={index}
              className="flex-row w-full max-w-[36rem] head zoom-in-1 produce"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className={`w-2/5 m-0 rounded-r-none shrink-0 ${item.title === "API Integration" ? "api-card" : ""}`}
                style={item.title === "API Integration" ? { marginBottom: "30px" } : {}}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`object-contain w-full h-full product-tent ${item.title === "API Integration" ? "api-image" : ""}`}
                />
              </CardHeader>
              <CardBody>
                <Typography id='title-typo' variant="h4" className="mb-4 uppercase title-typo">{item.title}</Typography>
                <Typography id='title-sub' variant="h6" color="blue-gray" className="mb-2 sub">
                  {item.subtitle}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal sent">
                  {item.description}
                </Typography>
                <CardFooter className='pt-0'>
                  <Link to={item.path} className="inline-block">
                    <Button variant="text" className="flex items-center gap-2 produce-text">
                      Learn More
                      <ArrowLongRightIcon strokeWidth={2} className="w-3 h-3" />
                    </Button>
                  </Link>
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProducts;
