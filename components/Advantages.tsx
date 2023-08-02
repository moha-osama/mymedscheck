import React from "react";
import { PartnerWithUsBenefits } from "@/constants";
import Image from "next/image";

const Advantages = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 bg-[#085C60] h-[10rem]">
        <h1 className="text-white text-xl sm:text-3xl font-extrabold">
          Advantages of working with us
        </h1>
        <img src="underline-vector.png" className="w-[8rem]" />
      </div>
      <div className="relative bg-white">
        {PartnerWithUsBenefits.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                item.id % 2 === 1 ? "bg-white" : "bg-[#E7F4F3]"
              } py-8 md:py-0 `}
            >
              <div
                className={`flex flex-col ${
                  item.id % 2 === 1 ? "" : "md:flex-row-reverse"
                } items-center  md:flex-row justify-around maxWidth`}
              >
                <div className="flex flex-col items-start justify-center max-w-[30rem]">
                  <h1 className="text-[#043CAA] font-[600] text-[18px] md:text-[2rem]">
                    {item.title}
                  </h1>
                  <p className="text-[#69727A] text-[600] text-[16px] md:text-lg max-w-[20rem]">
                    {item.description}
                  </p>
                </div>
                <div>
                  <Image
                    src={item.img}
                    width={350}
                    height={500}
                    alt={item.title}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Advantages;
