"use client";

import React, { useState } from "react";
import ListItem from "./ListItem";
import CustomButton from "./CustomButton";
import { Data, PharmacyProduct, Product } from "@/types";
import { TbCoinRupee } from "react-icons/tb";

interface ListProps {
  title: string;
  subTitle: string;
  btnText: string;
  data: Data;
  searchType: any;
  exactMatchResult: any;
  allAvailableData: any;
  sample: any;
}

const List = ({
  title,
  subTitle,
  btnText,
  data,
  searchType,
  exactMatchResult,
  allAvailableData,
  sample,
}: ListProps) => {
  const [shownData, setShownData] =
    useState<PharmacyProduct[]>(exactMatchResult);
  const [isClick, setisClick] = useState(false);

  const showMoreData = () => {
    setShownData(allAvailableData);
    setisClick(true);
  };

  return (
    <section className="relative pb-12 flex flex-col max-w-[80rem] w-[85%] mx-auto mb-12 border rounded-xl shadow-md">
      <div className="flex flex-col border-b-2 border-gray-600 p-4">
        <h1 className="font-[600] text-[24px]">{title}</h1>
        <p className="text-[16px] font-[400]">{subTitle}</p>
      </div>
      <ul className="flex flex-col px-4">
        {shownData.map((item: PharmacyProduct, index: number) =>
          item.products.map((prod: Product) => (
            <li key={Math.random()}>
              <div className="flex items-center">
                <ListItem
                  btnText={btnText}
                  pharmacyName={item.pharmacy_name}
                  offerPrice={prod.offer_price}
                  productName={prod.product_name}
                  productUrl={prod.product_url}
                  quantity={prod.quantity}
                  composition={prod.composition}
                  searchType={searchType}
                  data={data}
                />
              </div>
            </li>
          ))
        )}
        {!isClick && (
          <div>
            <div className="flex justify-center text-center items-center border-b border-gray-500 text-black mt-3 pb-3">
              <p className="flex items-center gap-4 bg-[#FFF1B9] py-3 px-8 rounded-2xl font-bold text-xs md:text-[16px]">
                <span className="text-3xl font-light rounded-full border-black">
                  <TbCoinRupee className="text-[#AE7F1B]" />
                </span>
                Save more with other brands of same composition
              </p>
            </div>
            {sample.map((item: PharmacyProduct, index: number) =>
              item.products.map((prod: Product) => (
                <li key={Math.random()}>
                  <div className="flex items-center">
                    <ListItem
                      btnText={btnText}
                      pharmacyName={item.pharmacy_name}
                      offerPrice={prod.offer_price}
                      productName={prod.product_name}
                      productUrl={prod.product_url}
                      quantity={prod.quantity}
                      composition={prod.composition}
                      searchType={searchType}
                      data={data}
                    />
                  </div>
                </li>
              ))
            )}
          </div>
        )}
      </ul>
      {!isClick && (
        <div className="absolute bottom-[-1rem] flex items-center flex-col left-[50%] translate-x-[-50%]">
          <CustomButton
            onClick={showMoreData}
            title="Load More"
            style="px-12 py-2 rounded-md"
          />
        </div>
      )}
    </section>
  );
};

export default List;
