import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import { MdAttachEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

import { useInView } from "react-intersection-observer";

export default function Details() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  return (
    <section className=" flex justify-center details">
      <div className="mx-auto overflow-hidden">
        <div
          className={`justify-center align-center text-center mision-head ${inView1 ? "fade-in-left fade-in-left-active" : ""
            }`}
          ref={ref1}
        >
          <h1 className="blog-title">For More Info</h1>

          <h3 className="blog-sub">Get in touch with us</h3>
        </div>
        <div className="w-[25rem] mt-10 mb-8">
          <Timeline >
            <TimelineItem className="h-28 ">
              <TimelineConnector className="!w-[78px]" />
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost">
                  <MdAttachEmail className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="blue-gray">
                    $2400, Design changes
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    22 DEC 7:20 PM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem className="h-28">
              <TimelineConnector className="!w-[78px]" />
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost" color="red">
                  <FiPhoneCall className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="blue-gray">
                    New order #1832412
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    21 DEC 11 PM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem className="h-28 ">
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 ">
                <TimelineIcon className="p-3" variant="ghost" color="green">
                  <IoLocationOutline className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1  ">
                  <Typography variant="h6" color="blue-gray">
                    Payment completed for order #4395133
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    20 DEC 2:20 AM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>

          </Timeline>
        </div>
      </div>
    </section>
  );
}
