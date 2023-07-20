"use client";
import React from "react";
import Image from "next/image";
import { BsFire } from "react-icons/bs";
import Link from "next/link";

const DUMMYDATA = [
  { name: "diRX" },
  { name: "HealthWarehOUSE" },
  { name: "kRGORER" },
  { name: "safeway", isPopular: true },
];

interface ListProps {
  title: string;
  subTitle: string;
  location?: boolean;
  popular?: boolean;
  save?: boolean;
  shipping?: boolean;
  btnText: string;
  data?: {
    exact_match: {
      composition: string[];
      result: { pharmacy_name: string; products: string[] }[];
    };
    generic_match: {};
  };
}

type availableDataType = [
  {
    pharmacy_name: string;
    products: {
      composition: string;
      offer_price: string;
      product_name: string;
      product_url: string;
      quantity: string;
      stock_value: string;
    }[];
  }
];

const List = ({
  title,
  subTitle,
  location,
  popular,
  save,
  btnText,
  shipping,
  data,
}: ListProps) => {
  const availableData: any = data?.exact_match.result.filter(
    (item) => item.products.length > 0
  );

  console.log(availableData);
  return (
    <section className="flex flex-col w-[80rem] mx-auto my-0 border rounded-xl shadow-md">
      <div className="flex flex-col  border-b-2 border-gray-600 p-4">
        <h1 className="font-[600] text-[24px]">{title}</h1>
        <p className="text-[16px] font-[400]">{subTitle}</p>
      </div>
      <ul className="flex flex-col px-4">
        {availableData.map((item: any) => (
          <li
            key={item.products[0].product_url}
            className="flex items-center border-b border-gray-400 last:border-b-0 py-4"
          >
            <div className="flex flex-grow gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src={`/home_delivery_logos/${item.pharmacy_name}.jpg`}
                  fill
                  alt="pharmacy logo"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[18px] font-normal">
                  {item.pharmacy_name}
                </h2>
                {/* {shipping && (
                  <p className="text-[14px] font-light">Free Shiping</p>
                )} */}
                {/* {popular && item.isPopular ? (
                  <div className="flex items-center gap-2 bg-[#F2F3F4] rounded-full py-1 px-2 text-[12px]">
                    <span className="text-[#E96201]">
                      <BsFire />
                    </span>
                    <p>Most popular</p>
                  </div>
                ) : null} */}
              </div>
            </div>
            <div className="flex items-center gap-8">
              {/* <div className="text-[14px] text-gray-500 mr-[8rem]">
                <p>
                  <span className="line-through">$45</span> retail
                </p>
                <p>Save 76%</p>
              </div> */}
              <h1 className="text-[24px] font-bold">
                <span className="text-xl font-[18px]">₹</span>
                {item.products[0].offer_price}
              </h1>
              <Link href={item.products[0].product_url}>
                <button className="border border-[#085C60] text-[#085C60] font-medium py-[0.5rem] px-[1rem] rounded-md text-[16px] hover:bg-[#085C60] hover:text-white">
                  {btnText}
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;
