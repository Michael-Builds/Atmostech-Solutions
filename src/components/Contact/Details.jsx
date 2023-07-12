import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import contact from '../../assets/get.png';
import { MdAttachEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { BiSolidPhoneCall } from 'react-icons/bi';


export default function Details() {
  return (
    <section className="flex justify-center m-2 gap-5 mb-5 mt-10 ">
      <Card className="flex-row w-full max-w-[60rem]  mt-8 mb-5 detail-card"

      >
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 justify-center items-center shrink-0 m-0 rounded-r-none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
            paddingRight: '1rem',
          }}
        >
          <img src={contact} alt="tut" className="  detail-icon" />
          <Typography className="  detail-main">
            Contact Us
          </Typography>
          <Typography className=" detail-second">
            Get in touch with us today!
          </Typography>
          <Typography className="detail-third">
            Office Hours:
          </Typography>
          <Typography className="detail-fourth">
            8:00am-5:00pm Mon-Fri
          </Typography>
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              borderRight: '2px dashed gray',
            }}
          />
        </CardHeader>

        <CardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '40px',
          }}
        >
          <Typography color="white" className="mb-4 flex" style={{ display: 'flex', alignItems: 'center' }}>
            <IoLocationSharp />
            <span style={{ marginLeft: '10px' }}>Location</span>
          </Typography>
          <Typography color="white" className="mb-4 flex" style={{ display: 'flex', alignItems: 'center' }}>
            <MdAttachEmail />
            <span style={{ marginLeft: '10px' }}>Email</span>
          </Typography>
          <Typography color="white" className="mb-4 flex" style={{ display: 'flex', alignItems: 'center' }}>
            <BiSolidPhoneCall />
            <span style={{ marginLeft: '10px' }}>Call Us</span>
          </Typography>
          <Typography color="white" className="mb-4 flex" style={{ display: 'flex', alignItems: 'center' }}>
            <BiSolidPhoneCall />
            <span style={{ marginLeft: '10px' }}>Call Us</span>
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
}