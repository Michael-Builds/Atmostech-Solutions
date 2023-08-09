import React from 'react';
import { Card, CardHeader, CardBody, Typography, Avatar } from '@material-tailwind/react';

const industryItems = [
  {
    bgImage: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGVhbHRoQ2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Transforming Healthcare Solutions',
    author: 'Atmos Technology',
    authorImageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Revolutionizing Education with Technology',
    author: 'Atmos Technology',
    authorImageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RW50ZXJ0YWlubWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Elevating Entertainment with Cutting-Edge Tech',
    author: 'Atmos Technology',
    authorImageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    bgImage: 'https://plus.unsplash.com/premium_photo-1682617326998-776d7443f02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEJ1aWxkaW5nJTIwYW5kJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    title: 'Building the Future with Construction Technology',
    author: 'Atmos Technology',
    authorImageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    title: 'Driving E-commerce Excellence with Technology',
    author: 'Atmos Technology',
    authorImageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1580164158471-b5595cf4299a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFRyYW5zcG9ydGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    title: 'Driving Efficiency with Transportation Technology',
    author: 'Atmos Technology',
    authorImageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },

];

export default function Main() {
  return (
    <section className="flex items-center justify-center" style={{ boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.4)' }}>
      <div className="mx-auto overflow-hidden">
        <h2 className='text-4xl font-bold tracking-tight industries-header sm:text-6xl'>
          Empowering Diverse Industries through Innovative IT Solutions
        </h2>
        <p id='industries-sentence' className='mt-6 text-lg leading-8'>
          As a tech company, we serve a wide range of industries, providing tailored solutions to businesses in sectors such as finance, healthcare, education, e-commerce, and more. Our expertise enables us to address the unique challenges and opportunities that each industry presents, driving digital transformation and fostering growth for our clients.
        </p>

        <div className="mx-auto overflow-hidden">
          <div className="flex items-center justify-center">
            <div id="industry-items" className="grid grid-cols-3 gap-12 mt-12 mb-20 md:grid-cols-3">
              {industryItems.map((item, index) => (
                <Card
                  id='industries-card'
                  key={index}
                  shadow={false}
                  className="relative grid h-[28rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center"
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 w-full h-full m-0 bg-center bg-cover rounded-none"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  >
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
                  </CardHeader>

                  <CardBody className="relative px-6 py-14 md:px-12">
                    <Typography id='industry-card-head' color="white" className="mb-6 font-medium leading-[1.5]">
                      {item.title}
                    </Typography>
                    <Typography id='industry-card-sub' className="mb-4 text-gray-400">
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
        </div>
      </div>
    </section>
  );
}
