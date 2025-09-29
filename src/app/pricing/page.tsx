import PricingCards from "@/components/PricingCards";
import React from "react";

const Pricing = () => {
  return (
    <main className="mt-16 px-4 lg:px-0 min-h-screen">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="font-semibold text-[37px] text-nowrap">Pricing</h2>
        <p>
          Dive into tailored excellence with our flexible pricing plans. Choose
          the perfect package to suit your needs and unlock a world of
          captivating email templates.
        </p>
      </div>
      <PricingCards />
    </main>
  );
};

export default Pricing;
