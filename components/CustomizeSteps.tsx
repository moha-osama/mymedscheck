import React from "react";
import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { BiEditAlt } from "react-icons/bi";

const CustomizeSteps = () => {
  return (
    <div className="flex flex-col justify-center py-[4rem] gap-[3rem] maxWidth">
      <h1 className="text-2xl font-extrabold leading-normal text-center">
        Customize your savings on this prescription
      </h1>
      <div className="flex flex-col gap-[2rem] justify-between px-[10rem]">
        <div className="flex  gap-[1rem]">
          <div className="relative h-[4rem] w-[4rem]">
            <Image src="/num1.png" fill alt="" />
          </div>
          <div className="mt-[1rem]">
            <h1 className="font-bold text-lg">Check your prescription</h1>
            <p className="font-[400] text-md">
              Make sure following details match with your prescription
            </p>
            <div className="flex flex-col pl-[2rem]">
              <p className="font-[400] text-md">Prescription</p>
              <div className="relative flex gap-4 text-[#3268C4] w-fit">
                <p className="text-sm ">
                  5mg/6.25mg bisoprolol / HCTZ (30 tablets)
                </p>
                <span className="text-xl">
                  <BiEditAlt />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  gap-[1rem]">
          <div className="relative h-[4rem] w-[4rem]">
            <Image src="/num2.png" fill alt="" />
          </div>
          <div className="mt-[1rem]">
            <h1 className="font-bold text-lg">
              Pick the price that's right for you
            </h1>
            <p className="font-[400] text-md">
              Get a free coupon or join MyMedCheck to save more.
            </p>
            <div className="flex flex-col pl-[2rem]">
              <p className="font-[400] text-md">Location</p>
              <div className="relative flex gap-4 text-[#3268C4] w-fit">
                <p className="text-sm ">madinat shubra alkhymh, KB</p>
                <span className="text-xl">
                  <BiEditAlt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeSteps;
