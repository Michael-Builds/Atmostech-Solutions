import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const industryItems = [
  {
    imageUrl: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "How we design and code open-source projects?",
    author: "Tania Andrew",
    authorImageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  // Add more items as needed
];

export default function Main() {
  return (
    <section className='flex items-center justify-center'>
      <div className='mx-auto overflow-hidden'>
        <div id='industry-items' className='grid grid-cols-4 md:grid-cols-2'>
          {industryItems.map((item, index) => (
            <Card
              key={index}
              shadow={false}
              className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative px-6 py-14 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-medium leading-[1.5]"
                >
                  {item.title}
                </Typography>
                <Typography variant="h5" className="mb-4 text-gray-400">
                  {item.author}
                </Typography>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt={item.author}
                  className="border-2 border-white"
                  src={item.authorImageUrl}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
