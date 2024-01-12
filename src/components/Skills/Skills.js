import React from 'react';

const Skills = () => {
    return (
        <div className='text-white my-40 bg-[#09101a] py-20 px-10'>
            <h2 className='text-[#55e6a5] text-xl font-bold text-center'>EDUCATION & SKILL</h2>
            <p className='text-3xl font-bold leading-10 mt-5 text-center'>
                Showcasing My talent <br />
                amplifying My impact
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 mt-20'>
                <div>
                    <button className="btn text-[#55e6a5] border-[#55e6a5] bg-[#09101a] text-xl rounded-none">
                        2023 - 2024
                    </button>
                    <h2 className='text-3xl font-bold my-4'>
                        Frontend And Backend Developer
                    </h2>
                    <p className='text-[#a2a2a2] mb-5'>
                        Tanjil Ashamed embarked on the web development journey in 2023. Specializing in HTML, CSS, and JavaScript for creating seamless interfaces, he is committed to mastering both frontend and full-stack development. His skills evolve to deliver engaging user experiences, combining aesthetics with robust functionality.
                    </p>
                </div>
                <div>
                    <button className="btn text-[#55e6a5] border-[#55e6a5] bg-[#09101a] text-xl rounded-none">
                        2023 - 2024
                    </button>
                    <h2 className='text-3xl font-bold my-4'>
                        React JS Developer
                    </h2>
                    <p className='text-[#a2a2a2] mb-5 '>
                        Tanjil Ashamed embarked on the web development journey in 2023. Specializing in HTML, CSS, and JavaScript for creating seamless interfaces, he is committed to mastering both frontend and full-stack development. His skills evolve to deliver engaging user experiences, combining aesthetics with robust functionality.
                    </p>
                </div>
                <div>
                    <button className="btn text-[#55e6a5] border-[#55e6a5] bg-[#09101a] text-xl rounded-none">
                        2021 - 2025 <span className='text-sm'>(ongoing)</span>
                    </button>
                    <h2 className='text-3xl font-bold my-4'>
                        Food Technology
                    </h2>
                    <p className='text-[#a2a2a2] mb-5'>
                        In the 4th semester of Food Technology, Tanjil Ashamed has immersed himself in the intricate world of food sciences since 2021. On track to graduate in 2025, he seamlessly integrates his academic expertise with a growing passion for web development, creating a unique blend of skills and knowledge.
                    </p>
                </div>
                <div>
                    <button className="btn text-[#55e6a5] border-[#55e6a5] bg-[#09101a] text-xl rounded-none">
                        2019 - 2021
                    </button>
                    <h2 className='text-3xl font-bold my-4'>
                        Secondary School Certificate
                    </h2>
                    <p className='text-[#a2a2a2] mb-5'>
                        Completed Secondary School Certificate (SSC) in 2021, specializing in science subjects. Academic journey spanned from 2019 to 2021, fostering a solid foundation in scientific principles and analytical thinking. Demonstrates a commitment to continuous learning and a passion for exploring the intricacies of the scientific realm.
                    </p>
                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className='grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-10 my-10 '>
                <div className=''>
                    <p className='mb-2 font-bold'>HTML</p>
                    <input type="range" min={0} max="100" value="90" className="range range-success" />
                </div>
                <div>
                    <p className='mb-2 font-bold'>CSS</p>
                    <input type="range" min={0} max="100" value="90" className="range range-success" />
                </div>
                <div>
                    <p className='mb-2 font-bold'>JAVASCRIPT</p>
                    <input type="range" min={0} max="100" value="70" className="range range-success" />
                </div>
                <div>
                    <p className='mb-2 font-bold'>TAILWIND</p>
                    <input type="range" min={0} max="100" value="100" className="range range-success" />
                </div>
                <div>
                    <p className='mb-2 font-bold'>REACT JS</p>
                    <input type="range" min={0} max="100" value="90" className="range range-success" />
                </div>
                <div>
                    <p className='mb-2 font-bold'>NODE JS</p>
                    <input type="range" min={0} max="100" value="50" className="range range-success" />
                </div>
                <div>
                    <p className='mb-2 font-bold'>EXPRESS JS</p>
                    <input type="range" min={0} max="100" value="50" className="range range-success" />
                </div>
                <div>
                    <p className='mb-2 font-bold'>MONGODB</p>
                    <input type="range" min={0} max="100" value="40" className="range range-success" />
                </div>
                <div className='bg-'>
                    <p className='mb-2 font-bold'>NEXT JS</p>
                    <input type="range" min={0} max="100" value="60" className="range range-success" />
                </div>
                <div>
                    <p className='mb-2 font-bold'>DAISY UI</p>
                    <input type="range" min={0} max="100" value="100" className="range range-success" />
                </div>
            </div>
        </div>
    );
};

export default Skills;