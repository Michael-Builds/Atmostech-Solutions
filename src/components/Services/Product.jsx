import React from 'react';
import cutting from "../../assets/tech.png";
import mobile from "../../assets/mobile.png";
import market from '../../assets/market.png';


const Product =()=>{
    return(
    <section className="product mb-0 relative w-full h-full flex justify-ceter items-center bg-green-50">
    <div className="container mx-auto">
        <div className="row ">
            <div className="section-title">
            <h2 className=" service-head text-left ml-10">Products</h2>
                </div>
            </div>
            <div className="mx-auto overflow-hidden">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center ml-12 mt-5">
                        <h2 className="text-3xl mb-4 pr-1 ">
                           SchoolSync
                        </h2>
                        <p className="mb-4">
                            At Atmos Technology, we understand the transformative potential
                            of technology in today's digital landscape. Our cutting-edge
                            solutions are designed to empower businesses and individuals
                            with the tools and capabilities they need to thrive in the
                            modern world.
                        </p>
                    </div>
                    <div className="flex justify-center mr-10">
                        <img
                            src={cutting}
                            alt="ATMOS-PIC"
                            className="product1 rotate-animation"
                        />
                    </div>
                </div>
            </div>
            
            <div className="mx-auto overflow-hidden mt-5">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex justify-center ml-1">
                        <img
                            src={mobile}
                            alt="ATMOS-PIC"
                            className="product2 zoom-in-animation "                    
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl mb-4 pr-1">
                            Uni-Mart
                        </h2>
                       <p className="mr-10">
                            At Atmos Technology, we understand the transformative potential
                            of technology in today's digital landscape. Our cutting-edge
                            solutions are designed to empower businesses and individuals
                            with the tools and capabilities they need to thrive in the
                            modern world.
                        </p>
                    </div>

                </div>
            </div>

            <div className="mx-auto overflow-hidden mb-5">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center ml-12 mt-5">
                        <h2 className="text-3xl mb-4 pr-1">
                           SchoolSync
                        </h2>
                        <p className="mb-4 ">
                            At Atmos Technology, we understand the transformative potential
                            of technology in today's digital landscape. Our cutting-edge
                            solutions are designed to empower businesses and individuals
                            with the tools and capabilities they need to thrive in the
                            modern world.
                        </p>
                    </div>
                    <div className="flex justify-center mr-10">
                        <img
                            src={market}
                            alt="ATMOS-PIC"
                            className="product3 rotate-animation"
                        />
                    </div>
                </div>
            </div>
            
    </div>

        </section>
    )
};
export default Product;