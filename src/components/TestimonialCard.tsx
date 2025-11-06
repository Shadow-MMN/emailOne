import { Testimonies } from "@/types";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

const TestimonialCard = ({
  testimony,
  username,
  occupation,
  imgSrc,
  rating,
  date,
}: Testimonies) => {
  return (
    <div className="max-w-[1008px] min-h-[450px] flex flex-col justify-between bg-orange-500 p-8 text-white rounded-4xl">
      <div className="flex flex-col gap-2">
        <Image
          src="/testimonialicon.svg"
          alt="`` icon"
          width={100}
          height={100}
        />
        <h3 className="font-semibold text-[31px]">{testimony}</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Image
          src={imgSrc}
          alt={username}
          width={72}
          height={72}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col md:flex-row items-center gap-1">
            <h4 className="font-semibold text-[22px]">{username}</h4>
            <div className="flex items-center gap-1">
              {Array.from({ length: rating }).map((_, index) => (
                <IoStarSharp
                  key={index}
                  className="size-6 text-white fill-white"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p style={{ color: "white" }}>{occupation}</p>
            <p style={{ color: "white" }}>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
