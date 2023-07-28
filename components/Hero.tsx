"use client";

import React, { useState } from "react";
import Image from "next/image";
import RecentSearches from "./RecentSearches";
import CustomButton from "./CustomButton";
import ReactSelect from "./ReactSelect";
import { BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

interface HeroProps {
  data: { options: string[]; originalForm: string[] };
}
const Hero = ({ data }: HeroProps) => {
  //
  const [searchError, setSearchError] = useState<boolean>(false);

  const handleScroll = () => {
    const element = document.getElementById("guide-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-[90vh]">
      <div className="h-[65%]">
        <div className="relative w-full h-full">
          {searchError && (
            <div className="absolute overlay z-[99] top-0 left-0 w-full" />
          )}
          <Image
            src="/hero2.jpg"
            fill
            alt="hero"
            style={{ objectFit: "cover" }}
            className="absolute"
            quality={100}
          />

          <div className="absolute top-0 left-0 hero w-full h-full " />

          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-col items-center gap-6 ">
              <div className="w-[100%] text-center items-center flex flex-col">
                <h1 className="text-[1.2rem] md:text-[1.8rem] text-white font-extrabold">
                  Any medicine, anytime, anywhere
                </h1>
                <p className="text-white text-[12px] md:text-[14px] font-[600] leading-7 w-[20rem] mx-auto my-0  md:w-full">
                  From the rarest to the most common medicine, will find it for
                  you at best prices
                </p>
              </div>
              <form className="flex">
                <ReactSelect
                  products={data}
                  searchError={searchError}
                  setSearchError={setSearchError}
                />
              </form>
              <RecentSearches />
            </div>
          </div>
          {searchError && (
            <div className="absolute z-[99]  left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[10rem] w-[20rem] shadow-xl">
              <div className="w-full bg-[#042e30] rounded-t-xl flex justify-between px-4 items-center text-white text-lg py-2">
                <h1 className="font-bold">Invalid Input</h1>
                <button onClick={() => setSearchError(false)}>
                  <AiOutlineClose />
                </button>
              </div>
              <div className="bg-white w-full h-full rounded-b-xl p-8 text-center">
                <p className="text-lg">
                  Please Select option for search or input valid input
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-[35%] flex flex-col justify-center">
        <div className="flex items-center justify-around max-w-[80rem] mx-auto my-0 px-4 ">
          <h1 className="text-[#085C60] font-bold text-xl md:text-3xl">
            Discover how to navigate our website <br />
            <span className="hidden md:block">
              and find your prescription with unbeatable deals.
            </span>
          </h1>
          <div className="relative">
            <Image
              src="/guide/group.png"
              width={350}
              height={500}
              quality={100}
              className="w-[10rem]"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <CustomButton
            onClick={handleScroll}
            title="Learn More"
            icon={<BsChevronDoubleDown className="text-xl" />}
            style="py-2 px-8 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
