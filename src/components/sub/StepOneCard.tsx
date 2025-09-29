import { IoArrowBackOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const StepOneCard = ({ text }: { text: string }) => {
  return (
    <div className="max-w-[340px] min-h-[304px] py-4 px-[11px] bg-white mx-auto rounded-xl">
      <div className="flex items-center justify-between ">
        <IoArrowBackOutline className="size-5" />
        <div className="flex items-center gap-2">
          <GoDownload className="size-5" />
          <RiDeleteBin6Line className="size-5" />
          <MdOutlineMailOutline className="size-5" />
          <IoIosMore className="size-5" />
        </div>
      </div>
      <div className="flex items-center gap-3 ml-3 mt-4">
        <div className="bg-[#F5F5F5] rounded-full p-2 flex items-center justify-center">
          <p style={{ color: "#E56B00" }} className=" text-[15px] font-medium">
            {text}
          </p>
        </div>
        <div className="flex-col gap-1.5 flex">
          <div className="bg-[#DFDEDE] min-w-[170px] min-h-[12px] circle opacity-45" />
          <div className="bg-[#DFDEDE] w-[91px] min-h-[6px] circle opacity-45" />
        </div>
      </div>
    </div>
  );
};

export default StepOneCard;
