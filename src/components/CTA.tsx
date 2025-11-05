import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./sub/Button";
const CTA = () => {
  return (
    <section className="white-gradient px-8 md:px-0">
      <div className="max-w-[1008px] min-h-[468px] mx-auto justify-between  py-6 md:py-12 ctabg rounded-4xl text black flex flex-col items-center text-center">
        <h2 className="text-[#050200] font-semibold text-4xl md:text-[54px] max-w-[900px] mx-auto">
          Supercharge Your Campaigns with Captivating Email Designs!
        </h2>
        <p className="text-[#3F3C3B] max-w-[650px] mx-auto">
          Ready to make a lasting impact? Elevate your email marketing game with
          our collection of meticulously crafted and fully customizable
          templates. Get started today and watch your campaigns soar to new
          heights!&#34;
        </p>

        <Button
          text={
            <>
              Get Started Now
              <IoIosArrowRoundForward className="size-6" />
            </>
          }
          textColor="text-white"
          bgColor="bg-black"
        />
      </div>
    </section>
  );
};

export default CTA;
