import React, { useState, useEffect } from 'react';
// import heroImg from '../../assets/images/hero3.svg';
import CountUp from 'react-countup';
import "../toggle.css";
import 'remixicon/fonts/remixicon.css';
import ReadMoreReact from 'read-more-react';
import { useMediaQuery } from 'react-responsive';


const Hero = () => {
    const [theme, setTheme] = useState("null");
    const isMobile = useMediaQuery({ maxWidth: 768 }); //adjust breakpoint as needed

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        };
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <section className='bg-white dark:bg-black pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* ========== hero left content ========== */}
                    <div className='w-full md:basis-1/2'>
                        <h5
                            data-aos='fade-right'
                            data-aos-duration='1500'
                            className='text-headingColor dark:text-white font-[500] text-[20px]'
                        >
                            Hi,
                        </h5>
                        <h1
                            data-aos='fade-up'
                            data-aos-duration='1500'
                            className='text-headingColor dark:text-white font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
                        >
                            I'm Keenan Deyce, <br />
                            <span className='text-primaryColor'>
                                Software Developer.
                            </span>
                        </h1>

                        {/* ========== dark/light mode toggle start ========== */}
                    {isMobile && (
                        <div 
                            data-aos='fade-up'
                            data-aos-duration='1800'
                            data-aos-delay='200'
                            className='flex items-center'
                        >
                            <label className="switch mt-5">
                                <span class="sun">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <circle r="5" cy="12" cx="12"></circle>
                                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                                    </svg>
                                </span>
                                <span class="moon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                                    </svg>
                                </span>
                                <input type="checkbox" class="input" onChange={handleThemeSwitch} />
                                <span class="slider"></span>
                            </label>
                        </div>
                    )}
                        {/* ========== dark/light mode toggle end ========== */}
                        
                        <div
                            data-aos='fade-up'
                            data-aos-duration='1800'
                            data-aos-delay='200'
                            className='flex items-center gap-6 mt-7'
                        >
                            <a href="#contact">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor hover:dark:bg-white hover:dark:text-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                    <i class="ri-mail-line"></i> Hire Me
                                </button>
                            </a>
                            <a
                                href="#portfolio"
                                className='text-smallTextColor dark:text-primaryColor font-[600] text-[16px] border-b border-solid border-smallTextColor dark:border-white hover:dark:text-primaryColor'
                            >
                                See portfolio
                            </a>
                        </div>

                        <p
                            data-aos='fade-left'
                            data-aos-duration='1500'
                            className='flex gap-2 text-headingColor dark:text-white mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 whitespace-pre-line'
                        >
                            <span className='dark:text-primaryColor'>
                                <i class="ri-apps-2-line"></i>
                            </span>
                            <ReadMoreReact
                                text={
                                    `I am a junior software developer and web developer with a passion for building efficient and user-friendly software solutions. My skills and experience span a variety of programming languages and technologies including front-end, back-end web, and mobile application development.
                                      
                                    In addition to my technical skills, I am a strong communicator and collaborator. I believe that building strong relationships with clients and team members is key to the success of any project, and I am committed to open communication and transparency throughout the development process.
                                    
                                    Please take some time to browse my portfolio and explore some of the projects I have worked on. Please don't hesitate to get in touch, I look forward to hearing from you and working together to build something great!`
                                }
                                min={80}
                                ideal={100}
                                max={200}
                                readMoreText={<span className="text-primaryColor">read more...</span>}
                            />
                        </p>

                        <div className="flex items-center gap-9 mt-14">
                            <span className='text-smallTextColor dark:text-white text-[15px] font-[600]'>
                                Find me here:
                            </span>
                            <span className='animate-bounce'>
                                <a
                                    href="https://www.linkedin.com/in/keenan-deyce-5b9ab3219/"
                                    className='text-smallTextColor dark:text-primaryColor text-[20px] font-[600]'
                                >
                                    <i class="ri-linkedin-line"></i>
                                </a>
                            </span>
                            <span className='animate-bounce'>
                                <a
                                    href="https://github.com/1deyce"
                                    className='text-smallTextColor dark:text-primaryColor text-[20px] font-[600]'
                                >
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>
                            {/* <span>
                                <a
                                    href="https://www.instagram.com/1deycefr/"
                                    className='text-smallTextColor dark:text-primaryColor text-[18px] font-[600]'
                                >
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span> */}
                        </div>

                    </div>
                    {/* ========== hero left end ========== */}
                    {/* ========== hero btn ========== */}

                    {/* ========== hero img end ========== */}
                    {/* ========== hero content right ========== */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='text-headingColor dark:text-primaryColor font-[700] text-[26px]'>
                                <CountUp start={0} end={1} duration={1} />
                            </h2>
                            <h4 className='text-headingColor dark:text-white font-[600] text-[18px]'
                            >
                                Years of Experience
                            </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor dark:text-primaryColor font-[700] text-[26px]'>
                                <CountUp start={0} end={100} duration={2} suffix='%' />
                            </h2>
                            <h4 className='text-headingColor dark:text-white font-[600] text-[18px]'
                            >
                                Success Rate
                            </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor dark:text-primaryColor font-[700] text-[26px]'>
                                <CountUp start={0} end={1} duration={3} />
                            </h2>
                            <h4 className='text-headingColor dark:text-white font-[600] text-[18px]'
                            >
                                Happy Clients
                            </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor dark:text-primaryColor font-[700] text-[26px]'>
                                <CountUp start={0} end={1} duration={4} />
                            </h2>
                            <h4 className='text-headingColor dark:text-white font-[600] text-[18px]'
                            >
                                Projects Completed
                            </h4>
                        </div>
                    </div>
                    {/* ========== hero content right end ========== */}
                </div>
            </div>
        </section>
    );
};

export default Hero;