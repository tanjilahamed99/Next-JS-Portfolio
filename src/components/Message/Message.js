import React from "react";
import Count from "./Count";
import { CgWebsite } from "react-icons/cg";
import { GiVibratingShield } from "react-icons/gi";
import Form from "./Form";

const Message = () => {
  return (
    <div
      id="contact"
      className="text-white flex flex-col lg:flex-row items-center gap-5 px-2 container mx-auto" 
    >
      <div className="space-y-10 lg:w-1/2">
        <h2 className="lg:text-6xl text-3xl font-bold">
          Design{" "}
          <span className=" text-3xl lg:text-5xl ">
            and <br /> Innovation
          </span>
        </h2>
        <p className="text-[#a2a2a2]">
          Tanjil Ahmed is a skilled and dedicated frontend developer with
          expertise in HTML, CSS, Tailwind, JavaScript, React, and Next.js. His
          proficiency extends to backend technologies like Node.js, MongoDB, and
          Express, showcasing a well-rounded skill set in full-stack
          development.
        </p>
        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-center items-center gap-5">
          <div className="p-10 bg-[#09101a] text-4xl font-bold w-[300px]">
            <CgWebsite className="mx-auto text-[70px] text-[#55e6a5]"></CgWebsite>
            <div className=" flex items-center my-3 justify-center">
              <Count start={4} end={40}></Count>+
            </div>
            <h2 className="text-xl text-center">Complete Project</h2>
          </div>
          <div className="p-10 bg-[#09101a] text-4xl font-bold w-[300px]">
            <GiVibratingShield className="mx-auto text-[70px] text-[#55e6a5]"></GiVibratingShield>
            <div className=" flex items-center my-3 justify-center">
              <Count start={0} end={10}></Count>+
            </div>
            <h2 className="text-xl text-center">Project Review</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#09101a] md:p-10 lg:w-1/2 p-2">
        <h2 className="text-3xl font-bold">GET TOUCH ME?</h2>
        <p className="text-[#a2a2a2] my-7">
          For your car we will do everything advice design in us repairs and
          maintenance We are the some preferred.
        </p>
        <Form></Form>
      </div>
    </div>
  );
};

export default Message;
