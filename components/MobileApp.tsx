import React from "react";
import Image from "next/image";

const MobileApp = () => {
  return (
    <section id="#mobile-app" className="mt-12 bg-white md:px-24 pt-8 md:py-0">
      <div className="flex flex-col md:flex-row justify-between h-[40rem] md:h-[35rem] maxWidth">
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h1 className="text-[#074C47] text-2xl md:3xl lg:text-4xl font-bold tracking-[-0.03125rem]">
            The fastest and cheapest
            <br /> way to get your prescription
          </h1>
          <p className="max-w-[30rem] text-[#69727A] text-sm md:text-lg font-[600] leading-normal">
            Join the millions of people who have saved up to 80% on their
            prescriptions with MyMedCheck. With the free MyMedCheck mobile app
            you can instantly check the availability of your medicine over 100+
            pharmacy stores at best prices. Download the app today to avail best
            deals
          </p>
          <div className="flex justify-center scale-75 md:scale-100">
            <Image src="/apple-store.png" width={200} height={5} alt="" />
            <Image src="/google-play.png" width={250} height={5} alt="" />
          </div>
        </div>
        <div className="flex-1  md:scale-100">
          <div className="relative h-full w-full">
            <Image
              width={500}
              height={100}
              quality={100}
              src="/mobile-app.png"
              alt=""
              className="absolute bottom-0 left-[50%] translate-x-[-50%]  z-[1]"
            />
            <Image
              width={600}
              height={650}
              quality={100}
              src="/vector.png"
              alt=""
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
