"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import { BsChevronDoubleDown } from "react-icons/bs";
import Image from "next/image";
import { guideSteps } from "@/constants";

const GuideSection = () => {
  return (
    <section>
      <div className="flex items-center justify-around max-w-[80rem] mx-auto my-0 px-4">
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
      <div className="flex flex-col items-center justify-center pb-6">
        <span className="font-[400]">Learn More</span>
        <button className="flex items-center justify-center text-[#085C60] text-3xl">
          <BsChevronDoubleDown />
        </button>
      </div>
      <div className="relative bg-white">
        {guideSteps.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                item.id % 2 === 1 ? "bg-white" : "bg-[#87C6EC]"
              } py-8 md:py-0`}
            >
              {item.id % 2 === 1 ? (
                <div className="flex flex-col items-center md:flex-row justify-around maxWidth">
                  <div className="flex flex-col items-start justify-center max-w-[30rem]">
                    <h1 className="text-black font-[600] text-[18px] md:text-[2rem]">
                      {item.title}
                    </h1>
                    <p className="text-[#69727A] text-[600] text-[16px] md:text-lg max-w-[20rem]">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative w-[18rem] h-[18rem]">
                    <Image src={item.img} fill alt={item.title} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center md:flex-row justify-around maxWidth">
                  <div className="relative w-[18rem] h-[18rem]">
                    <Image src={item.img} fill alt={item.title} />
                  </div>
                  <div className="flex flex-col items-start justify-center max-w-[30rem]">
                    <h1 className="text-black font-[600] text-[18px] md:text-[2rem]">
                      {item.title}
                    </h1>
                    <p className="text-[#69727A] text-[600] text-[16px] md:text-lg max-w-[20rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="absolute bottom-[-2rem] right-[50%] translate-x-[50%]">
          <CustomButton
            title="Need Help?"
            style="rounded-md text-xs px-[62px] py-[18px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
