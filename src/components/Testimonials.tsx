import TestimonalCarousel from "./TestimonalCarousel";

const Testimonials = () => {
  return (
    <section className="mt-16 ">
      <div className="max-w-[600px] mx-auto text-center mb-8">
        <h2 className="font-semibold text-[37px] text-nowrap">Testimonials</h2>
        <p>
          Discover what our clients have to say about their journey with our
          templates. From increased engagement to amplified brand impact, our
          users have experienced the power of personalized communication.
        </p>
      </div>
      <TestimonalCarousel />
    </section>
  );
};

export default Testimonials;
