import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import management from '../../assets/management.jpeg';
import mobile from '../../assets/mobile.png';
import tech from '../../assets/tech.png'
import api from '../../assets/api.png';

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const ServicesProducts = () => {
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      // Add your animation or effect here
      console.log('Card is in view');
    }
  }, [inView]);

    return (
        <section id="services-products" className="wrapper bg-gray-200 py-8"
        >
            <h1 className="title text-2xl  text-center mb-6">Our Services and Products</h1>
            <div className="container mx-auto flex justify-center">
                <div className="grid grid-cols-1 gap-14 md:grid-cols-2 ">
                <Card className="flex-row w-full max-w-[36rem] head  animate-pulse"
                style={{ animationDelay: '0.2s' }}
                >
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none ">
        <img 
          src={management} 
          alt="image" 
          className="w-full h-full object-contain"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4"  className="uppercase mb-4 title-typo">SchoolSync</Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2 sub">
        Introducing our Advanced School Management System
        </Typography>
        <Typography color="gray" className="font-normal mb-8 sent">
        Revolutionize school management with our advanced cross-platform solution launching this week, empowering educational institutions with unparalleled convenience and efficiency.
        </Typography>
        <a href="#" className="inline-block btn">
          <Button variant="text"  className="flex items-center gap-2 btn-text">
            Learn More 
            <ArrowLongRightIcon strokeWidth={2} className="w-3 h-3" />
          </Button>
        </a>
      </CardBody>
    </Card>

    <Card className="flex-row w-full max-w-[36rem] head animate-pulse"
    style={{ animationDelay: '0.4s' }}
    >
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
        <img 
          src={mobile}
          alt="image" 
          className="w-full h-full object-contain"
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
        <a href="#" className="inline-block btn">
          <Button variant="text" className="flex items-center gap-2 btn-text">
            Learn More 
            <ArrowLongRightIcon strokeWidth={2} className="w-3 h-3" />
          </Button>
        </a>
      </CardBody>
    </Card>

    <Card className="flex-row w-full max-w-[36rem] head animate-pulse"
    style={{ animationDelay: '0.6s' }}
    >
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
        <img 
        src={tech}
          alt="image" 
          className="w-full h-full object-contain"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4"  className="uppercase mb-4 title-typo">Web Development</Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2 sub">
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="font-normal mb-8 sent">
          Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
        </Typography>
        <a href="#" className="inline-block btn">
          <Button variant="text" className="flex items-center gap-2 btn-text">
            Learn More 
            <ArrowLongRightIcon strokeWidth={2} className="w-3 h-3" />
          </Button>
        </a>
      </CardBody>
    </Card>

    <Card className="flex-row w-full max-w-[36rem] head animate-pulse"
    style={{ animationDelay: '0.8s' }}
    >
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
        <img 
          src={api}
          alt="image" 
          className="w-full h-full object-contain"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="uppercase mb-4 title-typo">Api Integration</Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2 sub">
        Seamless Integration: Power Your Application with our API
        </Typography>
        <Typography color="gray" className="font-normal mb-8 sent">
        Unlock the full potential of your application with seamless API integration, enabling effortless data exchange, streamlined functionality, and enhanced connectivity with external systems and services.
        </Typography>
        <a href="#" className="inline-block btn">
          <Button variant="text" className="flex items-center gap-2 btn-text">
            Learn More 
            <ArrowLongRightIcon strokeWidth={2} className="w-3 h-3" />
          </Button>
        </a>
      </CardBody>
    </Card>
        </div>
        </div>
        </section>
    );
};

export default ServicesProducts;
