
import { FaDownload } from "react-icons/fa"


const Btn = ({ text, icons }) => {
    return (
        <button className="btn  bg-[#55e6a5] hover:bg-[#36c987]  border-none rounded-none text-black">
            {
                text
            }
            <FaDownload></FaDownload>
        </button>
    );
};

export default Btn;