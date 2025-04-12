import { LuGraduationCap, LuBadgeCheck } from "react-icons/lu";

const Experience = () => {
  return (
    <div id="service" className="md:my-20 container mx-auto">
      <h2 className="text-xl font-bold text-[#55e6a5] text-center">
        Experience
      </h2>
      <p className="md:text-3xl text-xl text-center mt-3 md:leading-10 font-bold text-white">
        A journey from internship <br />
        to full-time impact
      </p>

      <div className="relative border-l-2 border-[#55e6a5] mt-10 pl-6 space-y-10">
        {/* Internship Card */}
        <div className="relative bg-[#0f0f0f] p-6 rounded-xl shadow-lg">
          <span className="absolute -left-4 top-6 w-8 h-8 bg-[#55e6a5] rounded-full flex items-center justify-center shadow-md">
            <LuGraduationCap className="text-black text-xl" />
          </span>
          <h3 className="text-white text-lg font-bold">Frontend Development Internship</h3>
          <p className="text-[#a2a2a2] mt-2">
            I began my journey as a frontend intern, building responsive and engaging UIs with HTML, CSS, Tailwind, JavaScript, and React. I collaborated with teams on real projects, sharpening my skills and gaining professional experience.
          </p>
        </div>

        {/* Full-Time Card */}
        <div className="relative bg-[#0f0f0f] p-6 rounded-xl shadow-lg">
          <span className="absolute -left-4 top-6 w-8 h-8 bg-[#55e6a5] rounded-full flex items-center justify-center shadow-md">
            <LuBadgeCheck className="text-black text-xl" />
          </span>
          <h3 className="text-white text-lg font-bold">Full-Time Developer Role</h3>
          <p className="text-[#a2a2a2] mt-2">
            After completing the internship, I transitioned into a full-time role where I now build scalable full stack solutions using Next.js, Node.js, Express, and MongoDB — creating impactful web experiences from backend to frontend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
