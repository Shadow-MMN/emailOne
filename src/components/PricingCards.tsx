import {
  firstPicingPerks,
  secondPricingPerks,
  thirdPricingPerks,
} from "@/constants";
import Image from "next/image";
import React from "react";

const PricingCards = () => {
  return (
    <div className="max-w-[1072px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4">
      {/* First Pricing */}
      <div className="bg-[#FAFAFA] rounded-xl text-black flex flex-col justify-between p-4 md:p-8 space-y-6 md:min-h-[473px]">
        <div>
          <h3 className="font-bold text-3xl md:text-[45px]">$47</h3>
          <p className="text-sm md:text-base">
            Choose any featured template in your desired niche (e.g., Saas,
            Fintech, Ecommerce)
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-xl md:text-[26px] text-[#211E1C]">
            Single Template Purchase
          </h4>
          <ul className="space-y-2 mt-3">
            {firstPicingPerks.map((perk, index) => (
              <li key={index} className="flex gap-2 items-center">
                <Image
                  src="/listIndicator.png"
                  alt="list"
                  width={20}
                  height={20}
                />
                <p className="text-sm md:text-base">{perk}</p>
              </li>
            ))}
          </ul>
        </div>
        <button className="circle bg-black text-white py-3 md:py-4 hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>

      {/* Second Pricing */}
      <div className="bg-[#FAFAFA] rounded-xl text-black flex flex-col justify-between p-4 md:p-8 space-y-6 md:min-h-[473px]">
        <div>
          <h3 className="font-bold text-3xl md:text-[45px]">$129</h3>
          <p className="text-sm md:text-base">
            Gain access to more than 2 niche templates of your choice
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-xl md:text-[26px] text-[#211E1C]">
            Silver Plan
          </h4>
          <ul className="space-y-2 mt-3">
            {secondPricingPerks.map((perk, index) => (
              <li key={index} className="flex gap-2 items-center">
                <Image
                  src="/listIndicator.png"
                  alt="list"
                  width={20}
                  height={20}
                />
                <p className="text-sm md:text-base">{perk}</p>
              </li>
            ))}
          </ul>
        </div>
        <button className="circle bg-black text-white py-3 md:py-4 hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>

      {/* Third Pricing - Full Width */}
      <div className="bg-[#050200] text-[#C1C0BF] col-span-1 md:col-span-2 rounded-4xl flex flex-col justify-between p-4 md:p-8 space-y-6 md:min-h-[352px]">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-3xl md:text-[45px] text-white">
              $299
            </h3>
            <span className="bg-orange-600 rounded px-3 py-1.5 border border-dashed border-white text-xs md:text-sm circle">
              Limited to the First 35 people
            </span>
          </div>
          <p className="mt-2 text-sm md:text-base">
            Secure a lifetime deal for comprehensive benefits
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-xl md:text-[26px] text-white">
            Lifetime Deal
          </h4>
          <div className="flex justify-between items-start md:items-end flex-wrap gap-4 mt-3">
            <ul className="space-y-2">
              {thirdPricingPerks.map((perk, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <Image
                    src="/listIndicator2.png"
                    alt="list"
                    width={20}
                    height={20}
                  />
                  <p className="text-sm md:text-base">{perk}</p>
                </li>
              ))}
            </ul>
            <button className="bg-white text-black px-6 md:px-7 py-3 md:py-4 hover:bg-orange-600 hover:text-white transition circle">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
