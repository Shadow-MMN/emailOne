import Image from "next/image";

const StepThree = () => {
  return (
    <div className="bg-black rounded-xl h-[400px] flex flex-col max-w-[490px] mx-auto">
      <div className="border border-red-800 flex-1">
        <Image
          src="/step2.png"
          alt="Choose your template"
          width={100}
          height={100}
          className="rounded-xl mx-auto"
        />
      </div>
      <div className="flex text-white flex-col px-4 md:px-8 pb-2 md:pb-8  gap gap-1">
        <p className="text-black bg-white circle px-4 py-1 self-start">
          Step 3
        </p>
        <h3 className="font-semibold text-[26px]">Implementation with HTML</h3>
        <p>
          Effortlessly bring your vision to life by implementing your customized
          template with the power of HTML, CSS, and MJML compatibility.
        </p>
      </div>
    </div>
  );
};

export default StepThree;
