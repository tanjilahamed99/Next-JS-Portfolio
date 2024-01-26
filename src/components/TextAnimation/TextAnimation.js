"use client"

import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
    return (
        <TypeAnimation
            className='lg:text-5xl text-2xl font-bold'
            sequence={[
                `CREATIVE Web Developer`,
                1000,
                'CREATIVE Frontend Developer',
                1000,
                'CREATIVE React Developer',
                1000,
                'CREATIVE Full Stack Developer',
                1000,
            ]}
            speed={300}
            repeat={Infinity}
        />
    );
};

export default TextAnimation;