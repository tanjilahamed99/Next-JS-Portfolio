import Image from 'next/image';
import React from 'react';
import Btn from '../Shared/Btn';

const About = () => {
    return (
        <div className='my-40 text-white flex items-center justify-center'>
            <div className='w-1/2'>
                <h2 className='text-[#55e6a5] text-xl font-bold'>About Me</h2>
                <h1 className='text-3xl font-bold leading-10 mt-5'>
                    Transforming visions into <br />
                    exceptional portfolios
                </h1>
                <div className='space-y-3 my-5'>
                    <p>
                        Passionate Website Developer specializing in JavaScript, React, Node.js, Express, and Firebase. I thrive on turning ideas into interactive and user-friendly digital experiences.
                    </p>
                    <p>
                        As an expert in front-end and back-end technologies, I bring concepts to life by seamlessly integrating cutting-edge tools. My focus on JavaScript ecosystem, React for dynamic UIs, and Node.js/Express for robust server-side development ensures high-quality, scalable solutions.
                    </p>
                </div>
                <Btn text={"Download Cv"}></Btn>
            </div>
            <div className='w-1/2'>
                <div className='border-t-8 border-r-8 border-[#55e6a5] w-fit mx-auto'>
                    <Image className=' mx-auto bg-[#2d2d2d]' src={"https://i.ibb.co/30mm9CK/portfolio.png"} alt='banner image ' width={400} height={400}></Image>
                </div>
            </div>
        </div>
    );
};

export default About;