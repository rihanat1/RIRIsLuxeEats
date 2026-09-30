
import { FaArrowLeftLong } from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const ViewCartHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 border-b border-secondary/50 shadow-md shadow-primary/40 backdrop-blur text-primary p-3 py-5  z-50  ">
      <div className="flex justify-between items-center w-[95%] md:w-[85%] lg:w-[95%] xl:w-[85%] mx-auto">
        <div className="flex items-center space-x-2 z-50">
          <GiKnifeFork className="text-primary text-[29px]" />
          <p className="z-50 text-primary font-bold text-[20px]">
            RIRI's LuxeEats
          </p>
        </div>
        <Link to="/menu" className="flex gap-1 items-center text-secondary ">
          <button className="flex gap-1 items-center text-secondary cursor-pointer ">
            <FaArrowLeftLong /> Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCartHeader;
