import StepTwoAnimation from "./animations/StepTwoAnimation";

const StepTwo = () => {
  return (
    <div className="bg-black rounded-xl h-[400px] flex flex-col max-w-[490px] mx-auto">
      <div className="border flex-1 pt-4">
        <StepTwoAnimation />
      </div>
      <div className="flex text-white flex-col px-4 md:px-8 pb-2 md:pb-8 gap gap-1">
        <p className="text-black bg-white circle px-4 py-1 self-start">
          Step 2
        </p>
        <h3 className="font-semibold text-[26px]">Customize with Figma</h3>
        <p>
          Take control of your design with Figma, where you can easily
          personalize every element to match your unique style and brand
          identity.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;
