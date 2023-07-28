"use client";

import React, { useEffect, useState } from "react";
import { Details, Data } from "@/types";

interface ProductInfoProps {
  details: Details[];
  searchType: string;
  data: Data;
}

const ProductInfo = ({ details, data, searchType }: ProductInfoProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [uses, setUses] = useState([""]);
  const [sideEffects, setSideEffects] = useState([""]);
  const [name, setName] = useState("");
  const [info, setInfo] = useState([""]);
  const [infoByComp, setInfoByComp] = useState("");

  useEffect(() => {
    if (searchType === "name") {
      const exactMatchResult = data.exact_match.result.filter(
        (item) => item.products.length > 0
      );
      const prodUrl = exactMatchResult[0].products[0].product_url;
      const scrapeData = async () => {
        setIsLoading(true);
        const res = await fetch("/scrapper", {
          method: "POST",
          body: JSON.stringify({
            url: prodUrl,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const products = await res.json();

        setUses(products.usesListItem);
        setSideEffects(products.sideEffectListItem);
        setName(products.name);
        setInfo(products.infoItem);

        setIsLoading(false);
      };
      scrapeData();
    } else {
      const obj: Details = details.filter(
        (obj) => !Object.values(obj).includes(null)
      )[0];
      const uses = obj.uses.split("and");
      setUses(uses);
      const sideEffects = obj.side_effects.split(",");
      setSideEffects(sideEffects);
      setName(obj.composition_name);
      setInfoByComp(obj.info);
    }
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="flex flex-col gap-4">
          <div id="uses" className="flex flex-col gap-4 py-12 px-8 bg-white">
            <h1 className="text-2xl font-bold">
              # What is {name}-release used for?
            </h1>
            <ul className="flex flex-col gap-2 list-disc text-gray-500 text-md pl-12">
              {uses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div id="about" className="flex flex-col gap-4 py-12 px-8 bg-white">
            <h1 className="text-2xl font-bold"># About {name}</h1>
            {searchType === "name" ? (
              <div className="flex flex-col gap-4">
                {info.map((item) => (
                  <p
                    key={Math.random()}
                    className="text-gray-500 text-md max-w-[60rem]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ) : (
              <p
                key={Math.random()}
                className="text-gray-500 text-md max-w-[60rem]"
              >
                {infoByComp}
              </p>
            )}
          </div>
          <div
            id="side-effects"
            className="flex flex-col gap-4 py-12 px-8 bg-white"
          >
            <h1 className="text-2xl font-bold">
              # What are the side effects of extended-release?
            </h1>
            <ul className="flex flex-col gap-2 list-disc text-gray-500 text-md pl-12">
              {sideEffects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-8 pt-12 bg-white">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
