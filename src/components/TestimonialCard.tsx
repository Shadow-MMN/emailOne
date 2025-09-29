import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
const TestimonialCard = () => {
  return (
    <div className="max-w-[1008px] min-h-[450px] flex flex-col justify-between bg-orange-500 p-8 text-white rounded-4xl">
      <div className="flex flex-col gap-2">
        <Image
          src="/testimonialicon.svg"
          alt="`` icon"
          width={100}
          height={100}
        />
        <h3 className="font-semibold text-[31px]">
          The SaaS email templates from EmailOne have been a game-changer for
          us. Visually appealing and conversion-focused, they&#39;ve
          significantly boosted our user engagement. It&#39;s like having a
          design team on standby!
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Image
          src="/testimonialPic1.png"
          alt="John Philips"
          width={72}
          height={72}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col md:flex-row items-center gap-1">
            <h4 className="font-semibold text-[22px]">John Philips</h4>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoStarSharp
                  key={index}
                  className="size-6 text-white fill-white"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p style={{ color: "white" }}>CEO of TechVibes Inc.</p>
            <p style={{ color: "white" }}>January 10, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
