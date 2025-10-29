import StepOneAnimation from "./animations/StepOneAnimation";

const StepOne = () => {
  return (
    <div className="row-span-2 bg-orange-500 rounded-xl h-[828px] max-w-[490px] mx-auto flex flex-col">
      <div className="flex-1 relative">
        <StepOneAnimation />
      </div>
      <div className="flex text-white flex-col gap px-8 pb-8 gap-1">
        <p className="text-black bg-white circle px-4 py-1 self-start">
          Step 1
        </p>
        <h3 className="font-semibold text-[26px]">Choose Your Template</h3>
        <p>
          Explore our diverse collection and find the email template that aligns
          perfectly with your brand and messaging goals
        </p>
      </div>
    </div>
  );
};

export default StepOne;
