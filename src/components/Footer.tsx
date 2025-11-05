import { footerTexts } from "@/constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import Image from "next/image";
import Button from "./sub/Button";

const Footer = () => {
  return (
    <footer className="max-w-[1008px] mx-auto grid grid-cols-1 mt-16 mb-32 px-4 md:px-8 lg:px-0">
      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 items-center border-b border-[#C1C0BFB2] pb-8">
        <Button
          text={
            <>
              Get In Touch
              <IoIosArrowRoundForward className="size-6" />
            </>
          }
          textColor="text-white"
          bgColor="bg-orange-300"
        />
        <div className="flex items-center gap-8 md:gap-4">
          <div className="bg-black text-white rounded-full p-2">
            <FaFacebookF className="size-4" />
          </div>
          <div className="bg-black text-white rounded-full p-2">
            <FaInstagram className="size-4" />
          </div>
          <div className="bg-black text-white rounded-full p-2">
            <BsTwitterX className="size-4" />
          </div>
          <div className="bg-black text-white rounded-full p-2">
            <BsSend className="size-4" />
          </div>
        </div>
      </div>
      <Image
        src="/footerLogo.png"
        alt="EmailOne Logo"
        width={892}
        height={276}
        className="mx-auto"
      />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <p className="text-nowrap">&copy; {footerTexts[0]}</p>
        <div className="flex flex-col md:flex-row items-center gap-3">
          {footerTexts.slice(1).map((footerText, index) => (
            <p key={index}>{footerText}</p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
