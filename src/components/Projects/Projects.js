import Image from 'next/image';
import React from 'react';
import luxeNext from '../../../public/LuxeNest.jpg'
import nexTech from '../../../public/nexTech.jpg'
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='text-white'>
            <h2 className='text-[#55e6a5] text-xl font-bold'>About Me</h2>
            <h1 className='text-3xl font-bold leading-10 mt-5'>
                Elevate your brand to new <br />
                heights with our portfolio expertise
            </h1>
            <div className='my-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5'>
                <div className='relative'>
                    <Image src={luxeNext} alt='Projects logo'></Image>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        className='bg-black bg-opacity-80 absolute w-full bottom-0'>
                        <div
                            className='py-5 pl-5'>
                            <div className='flex gap-2 items-center mb-3'>
                                <h1 className='text-3xl font-light'>LuxeNest</h1>
                                <h1 className='text-[#55e6a5]  text-sm font-bold'>|| Luxury Hotel</h1>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <a href='https://github.com/tanjilahamed99/luxeNest-hotel-client-site'>
                                    <FaGithub className='bg-none text-3xl font-bold text-white hover:text-[#55e6a5]'></FaGithub>
                                </a>
                                <a href='https://luxenest-hotel.web.app'>
                                    <FaLink className='bg-none text-3xl font-bold text-white hover:text-[#55e6a5]'></FaLink>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={nexTech} alt='Projects logo'></Image>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        className='bg-black bg-opacity-80 absolute w-full bottom-0'>
                        <div
                            className='py-5 pl-5'>
                            <div className='flex gap-2 items-center mb-3'>
                                <h1 className='text-3xl font-light'>NexTech</h1>
                                <h1 className='text-[#55e6a5]  text-sm font-bold'>|| Latest Tech</h1>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <a target="_blank" href='https://github.com/tanjilahamed99/NexTech-client-site'>
                                    <FaGithub className='bg-none text-3xl font-bold text-white hover:text-[#55e6a5]'></FaGithub>
                                </a>
                                <a href='https://nextech-4bdaf.web.app'>
                                    <FaLink className='bg-none text-3xl font-bold text-white hover:text-[#55e6a5]'></FaLink>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='relative'>
                    <Image src={luxeNext} alt='Projects logo'></Image>
                    <div
                        data-aos="fade-down"
                        data-aos-duration="3000"
                        className='bg-black bg-opacity-80 absolute w-full bottom-0'>
                        <div
                            className='py-5 pl-5'>
                            <div className='flex gap-2 items-center mb-3'>
                                <h1 className='text-3xl font-light'>LuxeNest</h1>
                                <h1 className='text-[#55e6a5]  text-sm font-bold'>|| Luxury Hotel</h1>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <a href='https://github.com/tanjilahamed99/luxeNest-hotel-client-site'>
                                    <FaGithub className='bg-none text-3xl font-bold text-white hover:text-[#55e6a5]'></FaGithub>
                                </a>
                                <a href='https://luxenest-hotel.web.app'>
                                    <FaLink className='bg-none text-3xl font-bold text-white hover:text-[#55e6a5]'></FaLink>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={luxeNext} alt='Projects logo'></Image>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className='bg-black bg-opacity-80 absolute w-full bottom-0'>
                        <div
                            className='py-5 pl-5'>
                            <div className='flex gap-2 items-center mb-3'>
                                <h1 className='text-3xl font-light'>LuxeNest</h1>
                                <h1 className='text-[#55e6a5]  text-sm font-bold'>|| Luxury Hotel</h1>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <a href='https://github.com/tanjilahamed99/luxeNest-hotel-client-site'>
                                    <FaGithub className='bg-none text-3xl font-bold text-white hover:text-[#55e6a5]'></FaGithub>
                                </a>
                                <a href='https://luxenest-hotel.web.app'>
                                    <FaLink className='bg-none text-3xl font-bold text-white hover:text-[#55e6a5]'></FaLink>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;