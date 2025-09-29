import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const OverviewSection = () => {
  return (
    <section>
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="font-semibold text-[37px] text-nowrap">How it Works</h2>
        <p>
          Step-by-step guide on how you can use our templates to create
          captivating campaigns with ease.
        </p>
      </div>
      <div className="max-w-[1008] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/*Bigger left image  Step 1*/}
        <StepOne />
        {/*Two images at the right  */}
        <div className="flex flex-col gap-8 h-[828px] max-w-[500px] mx-auto">
          {/*Top Image step2 */}
          <StepTwo />
          {/*Bottom Image step 3 */}
          <StepThree />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
