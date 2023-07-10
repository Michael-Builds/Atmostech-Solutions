import React from "react";
import vision from '../../assets/vision.jpg';
import value from '../../assets/value-proposition.jpg';
import mission from '../../assets/mission.jpg';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoGithub } from 'react-icons/bi';
import { Card, CardHeader, CardBody, Typography, Tooltip } from "@material-tailwind/react";

const MissionVision = () => {

  return (
    <section className="mission-vision" style={{ backgroundImage: `url(${value})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>     
          <Card className="w-full max-w-[26rem] shadow-lg mx-8 animate-zoom-in-1" style={{ "--fade-delay": "1s", position: "relative", zIndex: "1" }}>
            <CardHeader floated={false} color="gray">
              <img src={mission} alt="ui/ux review check"/>
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-center">
                <Typography variant="h4" color="green" className="font-medium">
                  Mission
                </Typography>
              </div>
              <Typography color="gray">
                We deliver tailored tech solutions that meet clients' unique needs. We combine expertise and industry best practices to provide exceptional results.
              </Typography>
              <div className="group mt-8 inline-flex flex-wrap justify-center items-center gap-3">
                <Tooltip content="Facebook">
                  <span className="cursor-pointer rounded-full border border-blue-600/5 bg-blue-600/5 p-3 text-blue-600 transition-colors hover:border-blue-600/10 hover:bg-blue-600/10 hover:!opacity-100 group-hover:opacity-70">
                    <BiLogoFacebook className="h-5 w-5" />
                  </span>
                </Tooltip>
                <Tooltip content="Instagram">
                  <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
                    <BiLogoInstagram className="h-5 w-5" />
                  </span>
                </Tooltip>
                <Tooltip content="Twitter">
                  <span className="cursor-pointer rounded-full border border-blue-300/5 bg-blue-300/5 p-3 text-blue-300 transition-colors hover:border-blue-300/10 hover:bg-blue-300/10 hover:!opacity-100 group-hover:opacity-70">
                    <BiLogoTwitter className="h-5 w-5" />
                  </span>
                </Tooltip>
                <Tooltip content="Github">
                  <span className="cursor-pointer rounded-full border border-black-500/5 bg-black-500/5 p-3 text-black-500 transition-colors hover:border-black-500/10 hover:bg-black-500/10 hover:!opacity-100 group-hover:opacity-70">
                    <BiLogoGithub className="h-5 w-5" />
                  </span>
                </Tooltip>
              </div>
            </CardBody>
          </Card>

          <Card className="w-full max-w-[26rem] shadow-lg mx-8 animate-zoom-in-2" style={{ "--fade-delay": "1s", position: "relative", zIndex: "1" }}>
            <CardHeader floated={false} color="gray">
              <img src={vision} alt="ui/ux review check"  />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-center">
                <Typography variant="h4" color="green" className="font-medium">
                  Vision
                </Typography>
              </div>
              <Typography color="gray">
                Our vision is to revolutionize businesses with innovative technology solutions. We strive to drive sustainable success in the digital era.
              </Typography>
              <div className="group mt-8 inline-flex flex-wrap justify-center items-center gap-3">
                <Tooltip content="Facebook">
                  <span className="cursor-pointer rounded-full border border-blue-600/5 bg-blue-600/5 p-3 text-blue-600 transition-colors hover:border-blue-600/10 hover:bg-blue-600/10 hover:!opacity-100 group-hover:opacity-70">
                    <BiLogoFacebook className="h-5 w-5" />
                  </span>
                </Tooltip>
                <Tooltip content="Instagram">
                  <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
                    <BiLogoInstagram className="h-5 w-5" />
                  </span>
                </Tooltip>
                <Tooltip content="Twitter">
                  <span className="cursor-pointer rounded-full border border-blue-300/5 bg-blue-300/5 p-3 text-blue-300 transition-colors hover:border-blue-300/10 hover:bg-blue-300/10 hover:!opacity-100 group-hover:opacity-70">
                    <BiLogoTwitter className="h-5 w-5" />
                  </span>
                </Tooltip>
                <Tooltip content="Github">
                  <span className="cursor-pointer rounded-full border border-black-500/5 bg-black-500/5 p-3 text-black-500 transition-colors hover:border-black-500/10 hover:bg-black-500/10 hover:!opacity-100 group-hover:opacity-70">
                    <BiLogoGithub className="h-5 w-5" />
                  </span>
                </Tooltip>
              </div>
            </CardBody>
          </Card>
 
      <div className="overlay"></div>
    </section>
  );
};

export default MissionVision;
