"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const RecentSearches = () => {
  const router = useRouter();
  const [processedData, setProcessedData] = useState<string[]>([]);
  useEffect(() => {
    const recentSearches = localStorage.getItem("recent-searches");
    const recentSearchesArr: string[] = JSON.parse(recentSearches || "[]");

    const processedStrings: any = {};
    const processedDataArr: string[] = [];

    for (const str of recentSearchesArr) {
      if (!processedStrings[str]) {
        const mappedValue = str;
        processedDataArr.push(mappedValue);
        processedStrings[str] = true;
      }
    }

    setProcessedData(processedDataArr);
  }, []);

  const handleClearButtonClick = () => {
    setProcessedData([]);
    localStorage.removeItem("recent-searches");
  };

  const rececntClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const clickedItem = event.currentTarget.textContent;
    console.log(clickedItem);
    const newPathName = updateSearchParams("search", clickedItem || "");
    router.push(`/product/${clickedItem}${newPathName}`);
  };

  return (
    <div className=" flex flex-col justify-center items-center w-full min-h-[8rem] mx-auto gap-4 md:px-24">
      {processedData.length > 0 && (
        <>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-white font-bold text-lg leading-normal">
              Recent Searches
            </h1>
            <button
              onClick={handleClearButtonClick}
              className="px-1 text-white bg-[#085C60] text-[14px]"
            >
              Clear history
            </button>
          </div>
          <ul className="grid grid-cols-3 grid-rows-2 gap-y-3 w-full h-[5rem]">
            {processedData.map((item) => (
              <li
                value={item}
                onClick={rececntClickHandler}
                key={item}
                className="text-sm bg-[#ffffffb0] px-2 py-1  w-fit hover:bg-[#ffffff80] cursor-pointer whitespace-nowrap"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RecentSearches;
