"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsFire } from "react-icons/bs";
import Link from "next/link";
import ListItem from "./ListItem";
import CustomButton from "./CustomButton";
import { TbCoinRupee } from "react-icons/tb";

interface ListProps {
  title: string;
  subTitle: string;
  location?: boolean;
  popular?: boolean;
  save?: boolean;
  shipping?: boolean;
  btnText: string;
  data: {
    exact_match: {
      composition: string[];
      result: { pharmacy_name: string; products: string[] }[];
    };
    generic_match: {
      composition: string[];
      result: { pharmacy_name: string; products: string[] }[];
    }[];
  };
}

interface PharmacyProduct {
  pharmacy_name: string;
  products: Product[];
}

interface Product {
  product_name: string;
  product_url: string;
  offer_price: string;
  quantity: string;
  composition: string;
}

const List = ({ title, subTitle, save, btnText, data }: ListProps) => {
  //

  const exactMatchResult = data.exact_match.result.filter(
    (item) => item.products.length > 0
  );
  const [genericMatchResult] = data.generic_match.map((item) =>
    item.result.filter((prodItem) => prodItem.products.length > 0)
  );
  let genericMatchResultObjsArr: any = [];
  const genericMatchResultObjs = genericMatchResult.forEach((obj) =>
    genericMatchResultObjsArr.push(obj)
  );
  const allAvailableData = [...exactMatchResult, ...genericMatchResultObjsArr];

  const sample = allAvailableData.map((item) => {
    return {
      pharmacy_name: item.pharmacy_name,
      products: item.products.slice(0, 1),
    };
  });

  const [shownData, setShownData] = useState(sample);
  const [isClick, setisClick] = useState(false);

  const showMoreData = () => {
    setShownData(allAvailableData);
    setisClick(true);
  };

  return (
    <section className="relative pb-24 flex flex-col w-[80rem] mx-auto my-0 border rounded-xl shadow-md ">
      <div className="flex flex-col border-b-2 border-gray-600 p-4">
        <h1 className="font-[600] text-[24px]">{title}</h1>
        <p className="text-[16px] font-[400]">{subTitle}</p>
      </div>
      <ul className="flex flex-col px-4">
        {shownData.map((item: { pharmacy_name: string; products: [] }, index) =>
          item.products.map(
            (prod: {
              composition: string;
              offer_price: any;
              pharmacy_name: string;
              product_name: string;
              product_url: string;
              quantity: string;
              stock_value: null | string;
            }) => (
              <li key={Math.random()}>
                <div className="flex items-center">
                  <ListItem
                    btnText={btnText}
                    pharmacyName={item.pharmacy_name}
                    offerPrice={prod.offer_price}
                    productName={prod.product_name}
                    productUrl={prod.product_url}
                  />
                </div>
                {index === 0 && !isClick && (
                  <div className="flex justify-center items-center border-b border-gray-500 text-black mt-3 pb-3">
                    <p className="flex items-center gap-4 bg-[#FFF1B9] py-3 px-8 rounded-2xl font-bold text-[16px]">
                      <span className="text-3xl font-light rounded-full border-black">
                        <TbCoinRupee className="text-[#AE7F1B]" />
                      </span>
                      Save more with other brands of same composition
                    </p>
                  </div>
                )}
              </li>
            )
          )
        )}
      </ul>
      {!isClick && (
        <div className="absolute bottom-[-1rem] flex items-center flex-col gap-2 left-[50%] translate-x-[-50%]">
          <CustomButton
            onClick={showMoreData}
            title="Load More"
            style="px-3 py-2 rounded-md w-[12rem]"
          />
        </div>
      )}
    </section>
  );
};

export default List;
