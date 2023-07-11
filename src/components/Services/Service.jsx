import React from 'react';
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const Service = () => {
  return (
    <section className="service section flex justify-center items-center">
      <div className="container mx-auto">
        <div className="row">
          <div className="section-title">
            <h2 className=" service-head text-left ml-10">Services</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 justify-center mb-10">
          <Card className="mt-6 w-96 card">
            <CardBody>
              <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 card">
            <CardBody>
              <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 card">
            <CardBody>
              <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 w-96 card">
            <CardBody>
              <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 card">
            <CardBody>
              <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 w-96 card">
            <CardBody>
              <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                UI/UX Review Check
              </Typography>
              <Typography className="text-center">
                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Service;
