import React, { useState } from 'react';
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
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzZuQ1eST7k5CAv07npbExdXDEIpKfnPPgDNDKFTwU/dev';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const jsonData = {
        email: e.target.email.value,
        name: e.target.name.value,
        phone_number: e.target.phone_number.value,
        service: e.target.service.value,
        message: e.target.message.value,
      };

      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        setIsFormError(false);
        e.target.reset(); // Reset the form after successful submission
      } else {
        setIsFormSubmitted(false);
        setIsFormError(true);
      }
    } catch (err) {
      setIsFormSubmitted(false);
      setIsFormError(true);
      console.log(err);
    }
  };
  
  return (
    <section className="mb-0 relative w-full h-full">
      <div className="mx-auto overflow-hidden">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 contact-section">
          <div className="flex flex-col justify-center">
            <div className="row contact-me">
              <div className="section-title">
                <h2 id='email-heading' className="service-head text-left ml-10">Get in Touch</h2>
              </div>
            </div>
            <p className="mb-4 ml-10 email-content">
              We'd love to hear from you! If you have any questions, inquiries, or
              would like to discuss a potential project, please get in touch with
              us using the contact form or the provided contact information below.
            </p>
          </div>
          <div className="flex justify-center mb-8 emails">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blueGray" className="text-center mt-8 email-section-head">
                Email us
              </Typography>
              <form onSubmit={handleSubmit} className="mt-8 mb-1 w-80 max-w-screen-lg email-collect" >
                {isFormSubmitted && !isFormError && (
                  <div className="text-green-600 text-center mb-4">
                    Form submitted successfully!
                  </div>
                )}
                {isFormError && (
                  <div className="text-red-600 text-center mb-4">
                    An error occurred. Please try again later.
                  </div>
                )}
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    label="Email"
                    containerProps={{ className: "min-w-[72px] mail" }}
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    labelProps={{
                      htmlFor: "name-input",
                      style: { fontSize: '15px' },
                    }}
                  />

                  <div className="my-2 flex items-center gap-3">
                    <Input
                      label="Name"
                      containerProps={{ className: "min-w-[72px] mail" }}
                      name="name"
                      required

                      labelProps={{
                        htmlFor: "name-input",
                        style: { fontSize: '15px' },
                      }}
                    />
                    <Input
                      required
                      name="phone_number"
                      label="Phone Number"

                      type="tel"
                      containerProps={{ className: "min-w-[72px] mail" }}
                      labelProps={{
                        htmlFor: "name-input",
                        style: { fontSize: '15px' },
                      }}
                    />
                  </div>
                  <div containerProps={{ className: "min-w-[72px] " }}>
                    <Select
                      label="Service"
                      className="mail selected-service"
                      name="service"
                      required

                      labelProps={{ className: "label-large" }}
                    >
                      <Option className="select-items">Web Development</Option>
                      <Option className="select-items">Mobile App Development</Option>
                      <Option className="select-items">API Integration</Option>
                      <Option className="select-items">Electronic Data Exchange</Option>
                      <Option className="select-items">Software Development</Option>
                    </Select>
                  </div>
                  <Textarea
                    name="message"
                    label="Message"
                    required

                    labelProps={{ className: "custom-label" }}
                    containerProps={{ className: "min-w-[72px] mail-content" }}
                  />
                </div >
                <div className="">
                  <Button type='submit' className="mt-6 email-btn" fullWidth>
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
