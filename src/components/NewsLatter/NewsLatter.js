
const NewsLatter = () => {
    return (
        <div className="text-white my-20 bg-cover bg-center hero h-[50vh]" style={{ backgroundImage: "url(https://i.ibb.co/2kPLsgR/images-18.jpg)" }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="w-full ">
                <h2 className="text-3xl text-center">
                    Subscribe My NewsLatter
                </h2>
                <div className="mt-10 w-1/2 mx-auto relative">
                    <input className="border-2 border-[#55e6a5] py-5 px-3 bg-black rounded-md w-full" placeholder="Enter Your Email" />
                    <button className="btn bg-[#55e6a5] border-none rounded-none absolute right-2 top-[10px]">Notify Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;