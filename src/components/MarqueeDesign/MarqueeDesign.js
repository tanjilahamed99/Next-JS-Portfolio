import Marquee from "react-fast-marquee";

const MarqueeDesign = () => {
    return (
        <Marquee speed={200} className="bg-[#55e6a5] py-10  my-20 ">
            <div className="text-6xl">
                Frontend * Backend * Full-Stack * Developer * Design * Deployment *
            </div>
        </Marquee>
    );
};

export default MarqueeDesign;