import React from 'react';
import "../../index.css";
import "../../main.css";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

const Email = () => {

  return (
    <section className="mb-0 relative w-full h-full">
      <div className="mx-auto overflow-hidden">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="row contact-me">
              <div className="section-title">
                <h2 className="service-head text-left ml-10">Get in Touch</h2>
              </div>
            </div>
            <p className="mb-4 ml-10">
              We'd love to hear from you! If you have any questions, inquiries, or
              would like to discuss a potential project, please get in touch with
              us using the contact form or the provided contact information below.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blueGray" className="text-center mt-8">
                Email us
              </Typography>
              <form className="mt-8 mb-1 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <Input label="Email" containerProps={{ className: "min-w-[72px]" }} />
                  <div className="my-2 flex items-center gap-3">
                    <Input label="Name" containerProps={{ className: "min-w-[72px]" }} />
                    <Input label="Phone Number" containerProps={{ className: "min-w-[72px]" }} />
                  </div>
                  <div containerProps={{ className: "min-w-[72px]" }}>
                    <Select label="Service">
                      <Option>Web Development</Option>
                      <Option>Mobile App Development</Option>
                      <Option>API Integration</Option>
                      <Option>Electronic Data Exchange</Option>
                      <Option>Software Development</Option>
                    </Select>
                  </div>
                  <Textarea label="Message" containerProps={{ className: "min-w-[72px]" }} />
                </div >
                <div className="">
                <Button className="mt-6 email-btn" fullWidth>
                    Submit
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Email;