import React from "react";
import "../../index.css";
import "../../main.css";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";

  const industryOptions = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Retail",
    "Manufacturing",
    "Hospitality",
    "Automotive",
    "Telecommunications",
    "Media",
    "Energy",
    "Construction",
    "Transportation",
    "Consulting",
    "Government",
  ];

const Email = () => {

    return (
        <section className="mb-0 relative w-full h-full">
            <div className="mx-auto overflow-hidden">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                    <div className="row ">
            <div className="section-title">
            <h2 className=" service-head text-left ml-10">Get in Touch</h2>
                </div>
            </div>
                        <p className="mb-4 ml-10">
                        We'd love to hear from you! If you have any questions, inquiries, or
            would like to discuss a potential project, please get in touch with
            us using the contact form or the provided contact information below.
                        </p>        
                    </div>
                    <div className="flex justify-center mb-8">
                    <Card color="transparent" shadow={false} >
      <Typography variant="h4" color="blue-gray" className="text-center mt-8">
        Email us
      </Typography>
      <form className="mt-8 mb-1 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
        <div className="my-2 flex items-center gap-3">
                    <Input
                      label="First Name"
        
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                    <Input
                      label="Last Name"
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                  </div>

                
                  <Input size="lg" label="Email" />
                  <div className="my-2 flex items-center gap-3">
                    <Input
                      label="Industry"
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                    <Input
                      label="Company Name"
                      
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                  </div>
                  <Textarea
                      label="Message"
                      containerProps={{ className: "min-w-[72px]" }}
                    />
        </div>
        <Button className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
                    </div>

                    
                </div>
            
    
            </div>
        </section>
    );
};

export default Email;
