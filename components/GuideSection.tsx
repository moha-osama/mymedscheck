import React from "react";
import CustomButton from "@/components/CustomButton";
import { BsChevronDoubleDown } from "react-icons/bs";
import Image from "next/image";
import { guideSteps } from "@/constants";

const GuideSection = () => {
  return (
    <section>
      <div className="flex items-center justify-around maxWidth">
        <h1 className="text-[#085C60] text-4xl font-bold leading-[3rem]">
          Discover how to navigate our website <br />
          and find your prescription with unbeatable deals.
        </h1>
        <div className="relative w-[21.625rem] h-[14.41844rem] scale-[0.8]">
          <Image src="/guide/group.png" fill alt="" />
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
              className={`${item.id % 2 === 1 ? "bg-white" : "bg-[#87C6EC]"} `}
            >
              {item.id % 2 === 1 ? (
                <div className="flex justify-around maxWidth">
                  <div className="hre flex flex-col items-start justify-center max-w-[30rem]">
                    <h1 className="text-black font-[600] text-[2rem]">
                      {item.title}
                    </h1>
                    <p className="text-[#69727A] text-[600] text-lg max-w-[20rem]">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative w-[18rem] h-[18rem]">
                    <Image src={item.img} fill alt={item.title} />
                  </div>
                </div>
              ) : (
                <div className="flex justify-around maxWidth">
                  <div className="relative w-[18rem] h-[18rem]">
                    <Image src={item.img} fill alt={item.title} />
                  </div>
                  <div className="hre flex flex-col items-start justify-center max-w-[30rem]">
                    <h1 className="text-black font-[600] text-[2rem]">
                      {item.title}
                    </h1>
                    <p className="text-[#69727A] text-[600] text-lg max-w-[20rem]">
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
