import React from "react";
import Image from "next/image";
import { getYourMedication } from "@/constants";

const Delivery = () => {
  return (
    <div className="flex flex-col justify-center text-center max-w-[90rem] mx-auto">
      <h1 className="text-[#064B45] text-4xl font-bold py-8">
        Two ways to get your medication
      </h1>
      <div className="flex flex-col w-full md:flex-row gap-4 items-center justify-around mx-auto  px-4">
        {getYourMedication.map((item) => (
          <div
            key={item.title}
            className="flex items-center
             flex-col bg-white min-h-[30rem] w-[18rem] sm:w-[80%] sm:px-4 md:w-full py-12"
          >
            <Image
              src={item.img}
              width={250}
              height={400}
              alt=""
              quality={100}
              className="md:w-[400px]"
              style={{ objectFit: "contain" }}
            />
            <div className="flex flex-col items-center md:w-[24rem] w-[21rem]">
              <h1 className="text-[#0b7a72] leading-[3rem] sm:text-2xl font-[600]">
                {item.title}
              </h1>
              <p className="font-[300] text-sm sm:text-md w-[12rem] sm:w-[20rem]  text-[#69727A]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
