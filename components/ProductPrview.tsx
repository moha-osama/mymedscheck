"use client";
import React from "react";
import Image from "next/image";

const ProductPrview = () => {
  return (
    <div className="flex pl-[6.5rem] gap-[5rem] py-[3rem] pb-[5rem]">
      <div className="relative h-[8rem] w-[12rem]">
        <Image src="/pills.png" fill alt="pills" />
      </div>
      <div className="flex flex-col justify-center gap-[1rem]">
        <div className="flex items-baseline gap-3">
          <h1 className="font-extrabold leading-normal text-[2.5rem]">
            Generic Ziac
          </h1>
          <h3 className="font-light text-lg">Bisoprolol / HCTZ</h3>
        </div>
        <p className="font-light text-sm">Used for Hypertensions</p>
      </div>
    </div>
  );
};

export default ProductPrview;
