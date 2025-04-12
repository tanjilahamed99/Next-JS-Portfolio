import { CgWebsite } from "react-icons/cg";

const MyService = () => {
  return (
    <div id="service" className=" md:my-20 container mx-auto">
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
            I’m a skilled frontend developer with deep expertise in HTML, CSS,
            Tailwind, JavaScript, React, and Next.js. I specialize in building
            responsive, high-performance interfaces and bring designs to life
            with precision and creativity, ensuring seamless user experiences
            across all devices.
          </p>
        </div>
        <div className="text-white text-center  p-4 shadow shadow-[#a2a2a2]">
          <CgWebsite className="text-7xl text-[#55e6a5] mx-auto"></CgWebsite>
          <h2 className="text-xl font-bold mb-3 mt-5">
            Full-Stack Development
          </h2>
          <p className="text-[#a2a2a2]">
            I’m a versatile full stack developer experienced in crafting
            scalable web applications using React, Next.js, Node.js, Express,
            and MongoDB. With a solid frontend and backend foundation, I
            seamlessly integrate APIs, manage databases, and deliver
            full-featured, optimized solutions from concept to deployment.
          </p>
        </div>
        <div className="text-white text-center  p-4 shadow shadow-[#a2a2a2]">
          <CgWebsite className="text-7xl text-[#55e6a5] mx-auto"></CgWebsite>
          <h2 className="text-xl font-bold mb-3 mt-5">Backend Development</h2>
          <p className="text-[#a2a2a2]">
            I’m a dedicated backend developer focused on building robust and
            efficient server-side solutions using Node.js, Express, and MongoDB.
            With experience in authentication, API development, and Firebase
            integration, I ensure secure, scalable, and fast-performing web
            applications for modern use cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyService;
