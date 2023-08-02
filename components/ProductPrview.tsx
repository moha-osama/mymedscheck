"use client";

import React from "react";
import Image from "next/image";
import { medicineStateList } from "@/constants";

interface ProductPrviewProps {
  productName: string;
  medicineState: string;
}

const ProductPrview = ({ medicineState, productName }: ProductPrviewProps) => {
  const [img] = medicineStateList.filter((item) =>
    item.title.includes(medicineState)
  );

  return (
    <div className="flex flex-col items-center md:flex-row md:pl-[6.5rem] md:gap-[5rem] max-w-[90rem] mx-auto">
      <div>
        <Image
          width={200}
          height={100}
          quality={100}
          src={img ? img.imgUrl : "/undefiend.png"}
          alt="pills"
        />
      </div>

      <div className="flex flex-col md:flex-row items-baseline gap-3">
        <h1 className="font-extrabold leading-normal text-2xl sm:text-[2rem]">
          {productName}
        </h1>
      </div>
    </div>
  );
};

export default ProductPrview;
