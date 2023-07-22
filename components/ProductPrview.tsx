"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ProductPrview = () => {
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col items-center md:flex-row md:pl-[6.5rem] md:gap-[5rem] md:py-[3rem] pb-[2rem] md:pb-[5rem] max-w-[90rem] mx-auto">
      <div>
        <Image
          width={200}
          height={200}
          quality={100}
          src="/pills.png"
          alt="pills"
        />
      </div>
      <div className="flexflex-col md:justify-center gap-[1rem]">
        <div className="flex flex-col md:flex-row items-baseline gap-3">
          <h1 className="font-extrabold leading-normal text-[2rem]">
            {searchParams.get("search")}
          </h1>
          <h3 className="font-light text-lg">Bisoprolol / HCTZ</h3>
        </div>
        <p className="font-light text-sm">Used for Hypertensions</p>
      </div>
    </div>
  );
};

export default ProductPrview;
