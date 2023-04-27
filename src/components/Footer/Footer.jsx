import React from 'react';

const Footer = () => {
    return <footer className='bg-[#12141e] pt-12'>

        {/* =========== footer top =========== */}
        <div className='container'>
            <div className='sm:flex items-center justify-between md:gap-8'>
                <div className='w-full sm:w-1/2'>
                    <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem] '>
                        Do you want to make beautiful products?
                    </h2>
                    <a href="#contact">
                        <button 
                            className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i class="ri-mail-line"></i> Hire me
                        </button>
                    </a>
                </div>

                <div className="w-full sm:w-1/2">
                    <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid dolore dolores iste, atque, ducimus deserunt id iure repudiandae veritatis quisquam consequatur hic amet quam doloremque provident praesentium cum non!
                    </p>

                <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
                    <span 
                        className='text-gray-300 font-[600] text-[15px]'>
                            Follow Me:
                    </span>
                </div>
                </div>
            </div>
        </div>
        {/* =========== footer top end =========== */}

    </footer>
};

export default Footer;