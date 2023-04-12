
import React from 'react';
import heroImg from '../../assets/images/hero.svg';
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* ========== hero left content ========== */}
                    <div className='w-full md:basis-1/2'>
                        <h5 
                            data-aos='fade-right' 
                            data-aos-duration='1500' 
                            className='text-headingColor font-[500] text-[16px]'
                        >
                            Hello, welcome
                        </h5>
                        <h1 
                            data-aos='fade-up' 
                            data-aos-duration='1500'
                            className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
                        >
                            I'm Keenan Deyce <br />Software Developer
                        </h1>

                        <div 
                            data-aos='fade-up'
                            data-aos-duration='1800'
                            data-aos-delay='200'
                            className='flex items-center gap-6 mt-7'
                        >
                            <a href="#contact">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300'>
                                    <i class="ri-mail-line"></i> Hire me
                                </button>
                            </a>
                            <a href="#portfolio">See portfolio
                            </a>
                        </div>
                    </div>
                    {/* ========== hero left end ========== */}
                </div>
            </div>
        </section>
    )
}

export default Hero;