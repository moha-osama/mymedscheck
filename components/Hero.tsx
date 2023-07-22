import React from "react";
import Image from "next/image";
import RecentSearches from "./RecentSearches";
import CustomButton from "./CustomButton";
import ReactSelect from "./ReactSelect";

interface HeroProps {
  parsedData: { options: string[]; origin: string[] };
}

const Hero = ({ parsedData }: HeroProps) => {
  return (
    <div className="h-[300px]">
      <div className="relative w-full h-full">
        <Image
          src="/hero2.jpg"
          fill
          alt="hero"
          style={{ objectFit: "cover" }}
          className="absolute"
          quality={100}
        />
        <div className="absolute top-0 left-0 hero w-full h-full" />

        {/* OVERLAY COMPONENT */}

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center gap-6">
            <div className="w-[100%] text-center flex flex-col">
              <h1 className="text-[1.2rem] md:text-[1.8rem] text-white font-extrabold">
                Any medicine, anytime, anywhere
              </h1>
              <p className="text-white text-[12px] md:text-[14px] font-[600] leading-7 w-[20rem] mx-auto my-0  md:w-full">
                From the rarest to the most common medicine, will find it for
                you at best prices
              </p>
            </div>
            <form className="flex">
              <ReactSelect products={parsedData} />
              <CustomButton
                title="Search"
                style="rounded-r-lg font-bold px-[24px] py-[12px]"
              />
            </form>
            <RecentSearches />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
