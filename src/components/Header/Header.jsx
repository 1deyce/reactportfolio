
const Header = () => {

    const handleClick = e=>{
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

    return (
    <header 
        className='w-full h-[80px] leading-[80px] flex items-center bg-[#12141e]'
    >
        <div className="container">
            <div className='flex items-center justify-between'>
                {/* =========== logo =========== */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center cursor-pointer '>
                        KD
                    </span>

                    <div className='leading-[20px]'>
                        <h2 className='text-xl text-white font-[700]'>
                            Keenan
                        </h2>
                        <p className='text-white text-[14px] font-[500]'>
                            Personal
                        </p>
                    </div>
                </div>

                {/* =========== logo end =========== */}
                {/* =========== menu start =========== */}
                <div className='menu'>
                    <ul className='flex items-center gap-10'>
                        <li><a onClick={handleClick} className='text-white font-[600]' href="#about">About</a></li>
                        <li><a onClick={handleClick} className='text-white font-[600]' href="#services">Services</a></li>
                        <li><a onClick={handleClick} className='text-white font-[600]' href="#portfolio">Portfolio</a></li>
                        <li><a onClick={handleClick} className='text-white font-[600]' href="#contact">Contact</a></li>
                    </ul>
                </div>
                {/* =========== menu end =========== */}

                {/* =========== menu right =========== */}
                <div className='flex items-center gap-4'>
                    <a href="#contact">
                        <button className='flex items-center gap-2 text-white font-[600] border border-solid border-white py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-primaryColor hover:text-white hover:font-[500] ease-in duration-300'>
                            <i class="ri-send-plane-line"></i> Let's Talk
                        </button>
                    </a>

                    <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'><i class="ri-menu-line"></i></span>
                </div>
                {/* =========== menu end =========== */}
            </div>
        </div>
    </header>
)};

export default Header;
