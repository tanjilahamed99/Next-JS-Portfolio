"use client";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className=" p-6 w-full border border-[#55e6a5] bg-black"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Your Email"
          className=" p-6 w-full border border-[#55e6a5] bg-black"
          required
        />
      </div>

      <div>
        <textarea
          className=" p-6 pb-14 w-full border border-[#55e6a5] bg-black"
          placeholder="Bio"
          required
        ></textarea>
      </div>
      <button className="btn border border-none bg-[#55e6a5] hover:bg-[#36c987]  text-black rounded-none py-5 px-10">
        Submit
      </button>
    </form>
  );
};

export default Form;
