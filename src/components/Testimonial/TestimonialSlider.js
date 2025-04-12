"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
        },
    })

    return (
        <div ref={sliderRef} className="keen-slider gap-5 container mx-auto">
            <div className="keen-slider__slide number-slide1 p-10 border-2 relative border-[#a2a2a2] ">
                <div className="flex gap-2 text-yellow-500 text-2xl">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h2 className="font-bold text-2xl mt-5">Asif Khan</h2>
                <p className="mb-5 text-[#a2a2a2] mt-1">Marketing Manager</p>
                <p className="text-[#a2a2a2]">
                    Tanjil Ahamed is innovative portfolio showcases disruptive projects, earning positive feedback. Strategic presentation ensures sustained success, solidifying Tanjil is reputation as a visionary in the field
                </p>
                <div className="avatar absolute right-5 top-5">
                    <div className="w-24 rounded-full">
                        <Image width={500} height={500} src="https://i.ibb.co/9r49M5y/pngwing-com-22.png" alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide2 p-10 border-2 relative border-[#a2a2a2]">
                <div className="flex gap-2 text-yellow-500 text-2xl">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h2 className="font-bold text-2xl mt-5">Json Khan</h2>
                <p className="mb-5 text-[#a2a2a2] mt-1">IT Manager</p>
                <p className="text-[#a2a2a2]">
                    Tanjil Ahamed is innovative portfolio earns positive feedback. Strategic presentation ensures sustained success, solidifying Tanjil is reputation as a visionary, setting him apart in the industry
                </p>
                <div className="avatar absolute right-5 top-5">
                    <div className="w-24 rounded-full">
                        <Image width={500} height={500} src="https://i.ibb.co/3NtJ4T4/images-20.png" alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide3 p-10 border-2 relative border-[#a2a2a2]">
                <div className="flex gap-2 text-yellow-500 text-2xl">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h2 className="font-bold text-2xl mt-5">Asif Khan</h2>
                <p className="mb-5 text-[#a2a2a2] mt-1">Marketing Manager</p>
                <p className="text-[#a2a2a2]">
                    In Tanjil Ahamed is portfolio, innovation shines. Positive feedback and strategic presentation ensure sustained success, establishing Tanjil as a visionary, setting a high standard in the field
                </p>
                <div className="avatar absolute right-5 top-5">
                    <div className="w-24 rounded-full">
                        <Image width={500} height={500} src="https://i.ibb.co/dD7Q3R6/pngwing-com-21.png" alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide4 p-10 border-2 relative border-[#a2a2a2]">
                <div className="flex gap-2 text-yellow-500 text-2xl">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h2 className="font-bold text-2xl mt-5">Shuvoto Das</h2>
                <p className="mb-5 text-[#a2a2a2] mt-1">HR Exclusive</p>
                <p className="text-[#a2a2a2]">
                    Tanjil Ahamed is innovative portfolio showcases disruptive projects, earning positive feedback. Strategic presentation ensures sustained success, solidifying Tanjil is reputation as a visionary in the field
                </p>
                <div className="avatar absolute right-5 top-5">
                    <div className="w-24 rounded-full">
                        <Image width={500} height={500} src="https://i.ibb.co/30mm9CK/portfolio.png" alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide5 p-10 border-2 relative border-[#a2a2a2]">
                <div className="flex gap-2 text-yellow-500 text-2xl">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h2 className="font-bold text-2xl mt-5">Sara Misra</h2>
                <p className="mb-5 text-[#a2a2a2] mt-1">Marketing Manager</p>
                <p className="text-[#a2a2a2]">
                    In Tanjil Ahamed is portfolio, innovation stands out. Positive feedback and strategic presentation ensure success, establishing Tanjil as a visionary in the field, making a lasting mark in the industry
                </p>
                <div className="avatar absolute right-5 top-5">
                    <div className="w-24 rounded-full">
                        <Image width={500} height={500} src="https://i.ibb.co/dDGf0rz/model-2.png" alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide6 p-10 border-2 relative border-[#a2a2a2]">
                <div className="flex gap-2 text-yellow-500 text-2xl">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h2 className="font-bold text-2xl mt-5">Sujan Hassan</h2>
                <p className="mb-5 text-[#a2a2a2] mt-1">Marketing Manager</p>
                <p className="text-[#a2a2a2]">
                    Tanjil Ahamed is innovative portfolio showcases disruptive projects, earning positive feedback. Strategic presentation ensures sustained success, solidifying Tanjil is reputation as a visionary in the field
                </p>
                <div className="avatar absolute right-5 top-5">
                    <div className="w-24 rounded-full">
                        <Image width={500} height={500} src="https://i.ibb.co/3NtJ4T4/images-20.png" alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;