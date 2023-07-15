import React from "react";
import {
  Carousel,
  Typography,
  Button,
} from "@material-tailwind/react";
import "../../main.css";
import 'animate.css';
import backgroundImage from '../../assets/my.jpg';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate('/contact');
  };
  
  return (
    <section className="flex items-center justify-center h-screen">
      <Carousel className="rounded-none">
        <div className="relative h-full w-full">
          <img
            src={backgroundImage}
            alt="Atmos-Tech"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl fade-in-left"
                style={{ "--fade-delay": "0.5s" }}
              >
                Your Reliable Tech Partner
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 slider-sentence fade-in-left"
                style={{ "--fade-delay": "1.5s" }}
              >
                We provide highly customized cutting-edge tech solutions that cater to your business needs, driving exceptional growth and success.
              </Typography>
              <div className="flex justify-center gap-2">
                <div
                  className="fade-in-left mt-6"
                  style={{ "--fade-delay": "2.5s" }}

                >
                  <Button onClick={handleOpen} size="lg" color="white">
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="Atmos-Tech"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 second-slider"
              style={{ marginLeft: "70px" }}
            >
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl "
              >
                Innovating with Technology
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 "

              >
                Embracing Technological Innovation to Drive Transformation and Success. Unleashing the Power of Technology to Propel Your Business Forward.
              </Typography>
              <React.Fragment className="flex justify-center gap-2 first-button">
                <Button onClick={handleOpen} size="lg" color="white">
                  Innovate
                </Button>
              </React.Fragment>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="Atmos-Tech"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 third-slider"
              style={{ marginLeft: "70px" }}
            >
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Driving Digital Transformation
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Empowering businesses through digital transformation, revolutionizing processes, and unlocking new opportunities for growth
              </Typography>
              <React.Fragment className="flex justify-center gap-2 first-button">
                <Button onClick={handleOpen} size="lg" color="white">
                  Transform
                </Button>
              </React.Fragment>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}