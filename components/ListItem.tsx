"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Data } from "@/types";

interface ListItemProps {
  btnText: string;
  pharmacyName: string;
  offerPrice: string | null;
  productName: string;
  productUrl: string;
  quantity: string | null;
  composition: string;
  searchType: any;
  data: Data;
  noImg?: boolean;
}

const ListItem = ({
  btnText,
  pharmacyName,
  offerPrice,
  productName,
  productUrl,
  quantity,
  composition,
  searchType,
  data,
  noImg,
}: ListItemProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-500 w-full py-3">
      <div className="flex flex-1 items-center gap-4">
        {noImg ? (
          <div className="relative h-8 w-8">
            <Image
              fill
              src={`/home_delivery_logos/${pharmacyName}.jpg`}
              className="rounded-full"
              alt=""
            />
          </div>
        ) : null}
        <div className="flex flex-col font-medium">
          <h1>{productName}</h1>
          <p className="text-gray-600 text-xs">{`${
            composition ? composition : ""
          }`}</p>
        </div>
      </div>
      <div className="flex justify-between items-end md:items-center gap-6">
        <div className="flex flex-col items-start min-w-[10rem] 0">
          {offerPrice ? (
            <p className="text-[24px] font-[600]">
              <span className="pr-1 text-[18px]">₹</span>
              {offerPrice}
            </p>
          ) : (
            <p>Check on the webiste</p>
          )}
          <div className="flex w-[10rem]">
            {quantity ? (
              <p className="text-gray-400 text-sm">{quantity}</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <Link href={`${productUrl}`}>
          <button className="border border-[#085C60] text-[#085C60] font-medium py-[0.5rem] px-[1rem] rounded-md text-[16px] hover:bg-[#085C60] hover:text-white">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
