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

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('Submitted Successfully');
    const formData = new FormData(form);
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxf7oGJk6PeTfU3RXZHYM68at3ImMdm-fIampaznCj8MwGoTSOPXVX1Mw_NRb8ePIhSgg/exec", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        setIsFormError(false);
        form.reset();
      } else {
        setIsFormSubmitted(false);
        setIsFormError(true);
      }
    } catch (error) {
      setIsFormSubmitted(false);
      setIsFormError(true);
      console.log('An error occurred. Please try again later.', error);
    }
  }

  // Modal component
  const SuccessModal = () => (
    <div className="modal">
      <div className="modal-content">
        <h2>Request sent successfully!</h2>
        <p>Your form submission was successful.</p>
        <button onClick={() => setIsFormSubmitted(false)}>Close</button>
      </div>
    </div>
  );

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
              <form className="mt-8 mb-1 w-80 max-w-screen-lg email-collect" onSubmit={handleSubmit}>
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
                    name="Email"
                    autoComplete="email"
                    required
                    labelProps={{
                      htmlFor: "email-input",
                      style: { fontSize: '15px' },
                    }}
                  />

                  <div className="my-2 flex items-center gap-3">
                    <Input
                      label="Name"
                      containerProps={{ className: "min-w-[72px] mail" }}
                      name="Name"
                      type='text'
                      required
                      labelProps={{
                        htmlFor: "name-input",
                        style: { fontSize: '15px' },
                      }}
                    />
                    <Input
                      required
                      name="Phone_Number"
                      label="Phone Number"
                      type="tel"
                      containerProps={{ className: "min-w-[72px] mail" }}
                      labelProps={{
                        htmlFor: "phone-number-input",
                        style: { fontSize: '15px' },
                      }}
                    />

                  </div>
                  <div containerProps={{ className: "min-w-[72px] " }}>
                    <Select
                      label="Service"
                      className="mail selected-service"
                      name="Service"
                      required
                      value=""
                      labelProps={{ className: "label-large" }}
                    >
                      <Option value="" disabled>
                        Select a service
                      </Option>
                      <Option value="Web Development">Web Development</Option>
                      <Option value="Mobile App Development">Mobile App Development</Option>
                      <Option value="API Integration">API Integration</Option>
                      <Option value="Electronic Data Exchange">Electronic Data Exchange</Option>
                      <Option value="Software Development">Software Development</Option>
                    </Select>
                  </div>
                  <Textarea
                    name="Message"
                    label="Message"
                    required
                    labelProps={{ className: "custom-label" }}
                    containerProps={{ className: "min-w-[72px] mail-content" }}
                  />
                </div>
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

      {/* Conditionally render the SuccessModal when isFormSubmitted is true */}
      {isFormSubmitted && <SuccessModal />}
    </section>
  );
};

export default Email;
