
import { FaDownload } from "react-icons/fa"


const Btn = ({ text, icons }) => {
    return (
        <button className="btn bg-[#55e6a5] border-none rounded-none">
            {
                text
            }
            <FaDownload></FaDownload>
        </button>
    );
};

export default Btn;