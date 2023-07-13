import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useInView } from 'react-intersection-observer';
import blockchain from '../../assets/blockchain.jpg';
import AI from '../../assets/Ai.jpg';
import Cyber from '../../assets/Cyber.jpg';
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Blog() {

    const [ref1, inView1] = useInView({
        triggerOnce: true,
    });

    return (
        <section className="bg-gray-200 " >
            <div className="mx-auto overflow-hidden">
                <div className={`justify-center align-center text-center mision-head ${inView1 ? 'fade-in-bottom fade-in-bottom-active' : ''
                    }`}
                    ref={ref1}>
                    <h1 className="blog-title">
                        Latest Blogs
                    </h1>

                    <h3 className="blog-sub">
                        Find out the latest Blogs
                    </h3>
                </div>
                <div className=" flex flex-wrap gap-5 mb-9 justify-center center mt-8" >

                    <Card className="w-full max-w-[26rem] blog-card">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src={blockchain}
                                alt="ui/ux review check"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-center blog-date ">
                                <Typography className="blog-text text-4xl">
                                    Fri, July 2023
                                </Typography>
                            </div>
                            <Typography color="gray">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href="www.blog.html" className="inline-block">
                                <Button size="sm" variant="text" className="flex items-center gap-2">
                                    Learn More
                                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-[26rem] blog-card">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src={AI}
                                alt="ui/ux review check"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-center blog-date">
                                <Typography className="blog-text text-4xl">
                                    Fri, July 2023
                                </Typography>
                            </div>
                            <Typography color="gray">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href="www.blog.html" className="inline-block">
                                <Button size="sm" variant="text" className="flex items-center gap-2">
                                    Learn More
                                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>

                    <Card className="w-full max-w-[26rem] blog-card">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src={Cyber}
                                alt="ui/ux review check"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-center blog-date">
                                <Typography className="blog-text text-4xl">
                                    Fri, July 2023
                                </Typography>
                            </div>
                            <Typography color="gray">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </Typography>

                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href="www.blog.html" className="inline-block">
                                <Button size="sm" variant="text" className="flex items-center gap-2">
                                    Learn More
                                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}