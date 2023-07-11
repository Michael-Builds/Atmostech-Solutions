import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import {IoLocationSharp} from 'react-icons/io5';
  import {AiOutlineMail} from 'react-icons/ai';
  import {FiPhoneCall} from 'react-icons/fi';

  export default function Example() {
    return (
 <section className="flex justify-center m-2 gap-5 mb-5 mt-10">
 <Card color="transparent" shadow={false} className="w-full max-w-[24rem] contact-card">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-2 pt-0 pb-8 ml-12 details-header"
        >
       <IoLocationSharp className="w-8 h-8" color="green"/>
          <div className="flex w-full flex-col g">
            <div className="flex items-center">
              <Typography className="locate">
               Locate Us
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 text-center align-center">
          <Typography>
          VH-0004-1348, ECG Volta CU, Agric Avenue,
          Ho Municipal, Volta, Ghana.
          </Typography>
        </CardBody>
      </Card>

      <Card color="transparent" shadow={false} className="w-full max-w-[24rem] contact-card">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-2 pt-0 pb-8 ml-12 details-header"
        >
       <AiOutlineMail className="w-8 h-8" color="green"/>
          <div className="flex w-full flex-col ">
            <div className="flex items-center">
              <Typography className="locate">
              Email Us
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 text-center align-center">
          <Typography>
          info@atmostechsolution.com
          </Typography>
        </CardBody>
      </Card>
      <Card color="transparent" shadow={false} className="w-full max-w-[24rem] contact-card">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-2 pt-0 pb-8 ml-12 details-header"
        >
       <FiPhoneCall className="w-8 h-8" color="green"/>
          <div className="flex w-full flex-col ">
            <div className="flex items-center">
              <Typography className="locate">
               Call Us
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 text-center align-center">
          <Typography>
          +233 (0) 24055 6434
          </Typography>
            <Typography>
          +233 (0) 24055 6434
          </Typography>
        </CardBody>
      </Card>
    </section>
    );
  }