import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button
} from "@material-tailwind/react";

import management from './software.png';
import mobile from '../../assets/mobile.png';
import Website from './website.png'
import API from './api.png';

import { Link } from 'react-router-dom';

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const servicesProductsData = [
  {
    image: management,
    title: "Software Development",
    subtitle: "Innovative Solutions, Efficient Results",
    description: "Our software development crafts tailored solutions that streamline processes with innovation and precision.",
    path: "/software"
  },

  {
    image: mobile,
    title: "Mobile App Development",
    subtitle: "Crafting Seamless Mobile Experiences",
    description: "Empower your business with our comprehensive mobile app development solutions, combining intuitive design and robust functionality.",
    path: "/mobile"
  },
  {
    image: Website,
    title: "Web Development",
    subtitle: "Crafting Innovative Web Solutions Tailored to Your Business Needs",
    description: "Our expert team delivers customized web development services that leverage cutting-edge technologies to meet your unique business requirements and enhance your online presence.",
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
              <CardHeader shadow={false} floated={false} className="w-2/5 m-0 rounded-r-none shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full product-tent"
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