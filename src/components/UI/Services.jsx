import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
    return (
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 
                        className="text-headingColor font-[800] text-[2.4rem] mb-5"
                    >
                        What I do
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">I create visually appealing, user-friendly websites that deliver an exceptional online presence for your business. Using the latest web technologies and frameworks, I can develop responsive websites that are optimized for speed, performance, and search engine visibility. From informational websites to e-commerce platforms, I can build a solution that helps you connect with your target audience and achieve your online goals. With Flask and Node.js, I can design and develop a scalable and efficient backend architecture for your app..</p>
                </div>
                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        {/* ========== vertical line running through the middle ========== */}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                        {/* ========== left card ========== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right" dat-aos-duration="1200" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">Frontend Development</h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Using modern HTML, CSS, and JavaScript frameworks, I can transform your design concepts into interactive and intuitive interfaces that captivate users and enhance their interaction with your digital products.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={frontendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        
                        {/* ========== right card ========== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos="fade-left" dat-aos-duration="1300" data-aos-delay="50" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">Backend Development</h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            With expertise in server-side programming languages, databases, and frameworks, I can build robust back-end systems to power your software applications and websites.  
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={backendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* ========== left card ========== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right" dat-aos-duration="1400" data-aos-delay="100" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">UI/UX Design</h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={uiImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        
                        {/* ========== right card ========== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos="fade-left" dat-aos-duration="1500" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">App Development</h3>

                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Based on your requirements, I can provide valuable insights and consulting to refine your app concept, identify key features, and determine the optimal technology stack and platform for development.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={appsImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;