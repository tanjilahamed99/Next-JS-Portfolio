import React from 'react';
import TextAnimation from '../TextAnimation/TextAnimation';
import Btn from '../Shared/Btn';
import Image from 'next/image';


const Banner = () => {
    return (
        <div className='text-white py-20 bg-[#000000] flex '>
            <div className='md:w-1/2'>
                <div className='mb-8'>
                    <h2 className='text-[2.5em] font-bold '>Hi,I am Tanjil!</h2>
                    <TextAnimation></TextAnimation>
                </div>
                <p className='mb-8 text-lg'>
                    I am skilled frontend developer, specializes in HTML, CSS, Tailwind, JavaScript, React, Next.js, Firebase, Node.js, MongoDB, Express, and JSON Web Token. Proficient in crafting visually appealing interfaces, he excels in full-stack development, demonstrating commitment and expertise in diverse technologies.
                </p>
                <Btn text={"Download CV"}></Btn>
            </div>
            <div className='1/2 mx-auto'>
                <div className='p-5 border-t-8 border-b-8 border-[#55e6a5] rounded-tl-[40%] rounded-tr-[40%] rounded-bl-[40%] rounded-br-[40%] shadow-lg shadow-[#55e6a5]'>

                    <Image className='mx-auto rounded-tl-[40%] rounded-tr-[40%] rounded-bl-[40%] rounded-br-[40%] bg-white' src={"https://i.ibb.co/9r49M5y/pngwing-com-22.png"} alt='banner image ' width={300} height={300}></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;