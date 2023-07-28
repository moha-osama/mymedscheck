import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col py-8 gap-8">
      <h1 className="text-4xl text-[#085C60] font-bold text-center">
        Empowering Health
        <br /> Your Trusted Pharmacy Marketplace
      </h1>
      <div className="bg-white w-full flex flex-col items-center text-center py-8 gap-4">
        <h2 className="text-black text-2xl font-medium">
          Our mission is to simplify and enhance the way you access healthcare.
        </h2>
        <p className="text-md text-[#717171] text-light max-w-[60rem]">
          Welcome to My Meds Check, your ultimate destination for a convenient
          and reliable online pharmacy experience. We are dedicated to
          revolutionizing the way you access and obtain your medications. Our
          platform serves as a bridge between multiple trusted pharmacies,
          --offering you an extensive range of medicines, health products, and
          professional services all in one centralized location. At My Meds
          Check, we understand the importance of easy access to quality
          healthcare. We believe that everyone deserves quick and convenient
          access to the medicines they need to maintain their well-being. That's
          why we have created a user- friendly website that simplifies the
          process of finding and ordering your medications, ensuring a seamless
          and hassle-free experience for all our customers.
        </p>
      </div>
      <div className="bg-[#E7F5F4] flex w-full  overflow-hidden max-w-[100rem] mx-auto">
        <div className="relative flex-1 hidden md:block">
          <Image
            src="/about-us.png"
            width={400}
            height={400}
            alt=""
            className="absolute right-[0] top-[50%] translate-y-[-50%] z-[2]"
          />
          <div className="absolute top-0 left-[-25rem] z-[1] bg-[#A4C7C8] h-[50rem] w-[50rem]  rounded-full"></div>
        </div>
        <div className="flex flex-[2] flex-col gap-4 items-center py-12 justify-center">
          <h1 className="text-4xl text-[#085C60] font-bold text-center">
            Why Choose My Meds Check?
          </h1>
          <ul className="text-black font-medium list-decimal pl-12 max-w-[50rem] flex flex-col gap-6">
            <li>
              Extensive Product Selection: We have partnered with reputable
              pharmacies to provide you with a vast selection of medicines,
              including prescription drugs, over- the-counter medications,
              supplements, and more. You can browse through a wide range of
              products, compare prices, and make informed choices based on your
              healthcare needs.
            </li>
            <li>
              Trusted Pharmacy Partners: We work exclusively with licensed and
              certified pharmacies, ensuring that you have access to authentic
              medications from reputable sources. Our stringent vetting process
              guarantees that all our pharmacy partners adhere to strict quality
              standards, ensuring your safety and peace of mind.
            </li>
            <li>
              Competitive Pricing: We understand the importance of affordability
              when it comes to healthcare. Our platform enables you to compare
              prices across multiple pharmacies, allowing you to find the best
              deals and discounts available. By bringing together various
              pharmacies, we strive to provide cost-effective options without
              compromising on quality.
            </li>
            <li>
              Convenience and Accessibility: Our user-friendly website is
              designed to make your experience as convenient as possible. With
              just a few clicks, you can search for your desired medication,
              place an order, and have it delivered to your doorstep. We save
              you the time and effort of visiting multiple pharmacies by
              bringing them together in one convenient online marketplace.
            </li>
            <li>
              Excellent Customer Support: We are committed to providing
              exceptional customer service and support. Our team is available to
              assist you with any inquiries, concerns, or issues you may have
              throughout your shopping journey. We value your satisfaction and
              strive to ensure a positive experience with every interaction.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center text-center justify-center w-full">
        <p className="text-xl max-w-[60rem] italic">
          Discover the <span className="text-[#085C60]">convenience</span>,
          <span className="text-[#085C60]">reliability</span>, and
          <span className="text-[#085C60]">affordability</span> offered by My
          Meds Check. Your well-being is our top priority, and we are here to
          make your medicine procurement process a seamless and satisfying one.
          My Meds Check - Your Trusted Partner in Health.
        </p>
      </div>
    </div>
  );
};

export default page;
