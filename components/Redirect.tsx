"use client";
import React from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import CustomButton from "./CustomButton";
import Link from "next/link";

interface RedirectProps {
  searchParams: any;
}

const Redirect = ({ searchParams }: RedirectProps) => {
  console.log(searchParams);
  return (
    <div className="flex items-center justify-center my-4">
      <div className="bg-white w-[90%] h-[90%] rounded-lg shadow-lg max-w-[90rem] flex flex-col sm:gap-12">
        <div className="py-8 px-12">
          <h1 className="sm:text-2xl text-xl font-extrabold">
            Thank you, almost there...
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex flex-col items-center gap-2 flex-grow">
            <div className="relative h-[50px] w-[50px]">
              <Image
                src="/Ulogo.png"
                fill
                alt="my meds check logo"
                className="rounded-2xl"
              />
            </div>
            <h1 className="text-[#085C60] sm:text-2xl font-extrabold">
              MY MEDS CHECK
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row text-3xl text-[#085C60] ">
            <MdKeyboardArrowRight className="rotate-[90deg] sm:rotate-0" />
            <MdKeyboardArrowRight className="rotate-[90deg] sm:rotate-0" />
            <MdKeyboardArrowRight className="rotate-[90deg] sm:rotate-0" />
          </div>
          <div className="flex flex-col items-center gap-2 flex-grow">
            <div className="relative h-[50px] w-[50px]">
              <Image
                src={`/home_delivery_logos/${searchParams.pharmacy}.jpg`}
                fill
                alt="my meds check logo"
                className="rounded-2xl"
              />
            </div>
            <h1 className="text-[#085C60] sm:text-2xl font-extrabold">
              {searchParams.pharmacy}
            </h1>
          </div>
        </div>
        <div className="flex flex-col py-8 px-4 sm:p-12">
          <div className="flex flex-col gap-1">
            <p className="text-sm sm:text-md">You've find your medicine</p>
            <p className="text-sm sm:text-md">
              Now complete your order with netmeds.com
            </p>
          </div>
          <h1 className="text-2xl font-extrabold py-4">Details</h1>
          <div className="flex sm:flex-row flex-col gap-4 md:items-center justify-between w-full bg-gray-100 p-4">
            <div className="flex flex-1 items-center gap-4">
              <div className="relative h-8 w-8">
                <Image
                  fill
                  src={`/home_delivery_logos/${searchParams.pharmacy}.jpg`}
                  className="rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col font-medium">
                <h1> {searchParams.pharmacyName}</h1>
                <p className="text-gray-600 text-xs">
                  {searchParams.composition}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-end md:items-center gap-6">
              <div className="flex flex-col items-start min-w-[10rem] 0">
                <p className="text-[24px] font-[600]">
                  <span className="pr-1 text-[18px]">₹</span>
                  {searchParams.offerPrice}
                </p>
                <div className="flex w-[10rem]">
                  <p className="text-gray-400 text-sm">
                    {searchParams.quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link
            href={searchParams.url}
            className="flex items-center justify-center pt-8"
          >
            <CustomButton title="Proceed" style="px-8 py-4 rounded-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
