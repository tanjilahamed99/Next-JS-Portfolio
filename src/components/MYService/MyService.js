import { CgWebsite } from "react-icons/cg";

const MyService = () => {
  return (
    <div id="service" className=" md:my-20">
      <h2 className="text-xl font-bold text-[#55e6a5] text-center">
        My Service
      </h2>
      <p className="md:text-3xl text-xl text-center mt-3 md:leading-10 font-bold text-white">
        Crafting stories through <br></br>
        design and innovation
      </p>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 my-10 gap-8 px-2 lg:px-0">
        <div className="text-white text-center  p-4 shadow shadow-[#a2a2a2]">
          <CgWebsite className="text-7xl text-[#55e6a5] mx-auto"></CgWebsite>
          <h2 className="text-xl font-bold mb-3 mt-5">Frontend Development</h2>
          <p className="text-[#a2a2a2]">
            I am a seasoned frontend developer proficient in HTML, CSS,
            Tailwind, JavaScript, React, and Next.js. With a strong grasp of
            Firebase for real-time applications and a solid foundation in
            backend technologies like Node.js, MongoDB, and Express, I am excels
            in creating dynamic and visually engaging user interfaces
          </p>
        </div>
        <div className="text-white text-center  p-4 shadow shadow-[#a2a2a2]">
          <CgWebsite className="text-7xl text-[#55e6a5] mx-auto"></CgWebsite>
          <h2 className="text-xl font-bold mb-3 mt-5">
            Full-Stack Development
          </h2>
          <p className="text-[#a2a2a2]">
            I am a seasoned Full-Stack developer proficient in HTML, CSS,
            Tailwind, JavaScript, React, and Next.js. With a strong grasp of
            Firebase for real-time applications and a solid foundation in
            backend technologies like Node.js, MongoDB, and Express, I am excels
            in creating dynamic and visually engaging user interfaces
          </p>
        </div>
        <div className="text-white text-center  p-4 shadow shadow-[#a2a2a2]">
          <CgWebsite className="text-7xl text-[#55e6a5] mx-auto"></CgWebsite>
          <h2 className="text-xl font-bold mb-3 mt-5">Backend Development</h2>
          <p className="text-[#a2a2a2]">
            I am a seasoned Backend developer proficient in HTML, CSS, Tailwind,
            JavaScript, React, and Next.js. With a strong grasp of Firebase for
            real-time applications and a solid foundation in backend
            technologies like Node.js, MongoDB, and Express, I am excels in
            creating dynamic and visually engaging user interfaces
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyService;
