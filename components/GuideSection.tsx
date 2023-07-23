"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import { BsChevronDoubleDown } from "react-icons/bs";
import Image from "next/image";
import { guideSteps } from "@/constants";

const GuideSection = () => {
  return (
    <section id="guide-section">
      <div className="relative bg-white pt-[80px]">
        {guideSteps.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                item.id % 2 === 1 ? "bg-white" : "bg-[#87C6EC]"
              } py-8 md:py-0`}
            >
              <div
                className={`flex flex-col ${
                  item.id % 2 === 1 ? "" : "md:flex-row-reverse"
                } items-center md:flex-row justify-around maxWidth`}
              >
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
            </div>
          );
        })}
      </div>
      <div className="relative flex bg-black">
        <CustomButton
          title="Need Help?"
          style="absolute left-[50%] translate-x-[-50%] top-[-2rem] px-8 py-4 rounded-lg"
        />
      </div>
    </section>
  );
};

export default GuideSection;
