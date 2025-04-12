import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
    return (
        <div className='text-white hidden md:inline container mx-auto'>
            <h2 className='text-[#55e6a5] text-xl font-bold text-center'>My Recent Projects</h2>
            <h1 className='text-3xl font-bold leading-10 mt-5 text-center'>
                My Testimonial
            </h1>
            <div className='my-20 '>
                <TestimonialSlider />
            </div>

        </div>
    );
};

export default Testimonial;