import PricingCards from "./PricingCards";

const PricingSection = () => {
  return (
    <section className=" mt-16">
      <div className="max-w-[1072px] mx-auto flex justify-between md:gap-28 md:justify-start flex-col md:flex-row items-center">
        <h2 className="font-semibold text-[37px] text-nowrap">Pricing</h2>
        <p className="text-center md:text-start ">
          Dive into tailored excellence with our flexible pricing plans. Choose
          the perfect package to suit your needs and unlock a world of
          captivating email templates.
        </p>
      </div>
      <PricingCards />
    </section>
  );
};

export default PricingSection;
