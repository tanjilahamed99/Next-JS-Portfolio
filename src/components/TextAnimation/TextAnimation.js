"use client"

import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
    return (
        <TypeAnimation
            className='text-5xl font-bold'
            sequence={[
                // Same substring at the start will only be typed once, initially
                `CREATIVE Web Developer`,
                1000,
                'CREATIVE Frontend Developer',
                1000,
                'CREATIVE React Developer',
                1000,
                'CREATIVE Full Stack Developer',
                1000,
            ]}
            speed={50}
            style={{ fontSize: '2.5em' }}
            repeat={Infinity}
        />
    );
};

export default TextAnimation;