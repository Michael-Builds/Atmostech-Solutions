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

const Service = () => {
  return (
    <section className="service section flex justify-center items-center">
      <div className="container mx-auto">
        <div className="row">
          <div className="section-title fade-in-left">
            <h2 className="service-head text-left ml-10">Services</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-center mb-10 ml-11">
          <Card className="mt-6 w-96 card zoom-in-1">
            <CardBody>
              <RocketLaunchIcon className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
              <CardFooter className="pt-0">
                <a href="www.blog.html" className="inline-block">
                  <Button size="sm" variant="text" className="flex items-center gap-2">
                    Learn More
                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                  </Button>
                </a>
              </CardFooter>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 card zoom-in-2">
            <CardBody>
              <RocketLaunchIcon className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="www.blog.html" className="inline-block">
                <Button size="sm" variant="text" className="flex items-center gap-2">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 card zoom-in-3">
            <CardBody>
              <RocketLaunchIcon className="text-green-500  w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="www.blog.html" className="inline-block">
                <Button size="sm" variant="text" className="flex items-center gap-2">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-96 card zoom-in-4">
            <CardBody>
              <RocketLaunchIcon className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="www.blog.html" className="inline-block">
                <Button size="sm" variant="text" className="flex items-center gap-2">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 card zoom-in-5">
            <CardBody>
              <RocketLaunchIcon className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="www.blog.html" className="inline-block">
                <Button size="sm" variant="text" className="flex items-center gap-2">
                  Learn More
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-96 card zoom-in-6">
            <CardBody>
              <RocketLaunchIcon className="text-green-500 w-12 h-12 mb-4 mx-auto ike" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="www.blog.html" className="inline-block">
                <Button size="sm" variant="text" className="flex items-center gap-2">
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
