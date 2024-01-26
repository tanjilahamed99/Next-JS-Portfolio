import Marquee from "react-fast-marquee";

const MarqueeDesign = () => {
    return (
        <Marquee speed={200} className="bg-[#55e6a5] lg:py-10 py-4  my-20 ">
            <div className="lg:text-6xl text-xl">
                Frontend * Backend * Full-Stack * Developer * Design * Deployment *
            </div>
        </Marquee>
    );
};

export default MarqueeDesign;