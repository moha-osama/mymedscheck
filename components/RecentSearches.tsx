"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

interface RecentSearchesProps {
  searchParams: any;
}

const RecentSearches = ({ searchParams }: RecentSearchesProps) => {
  const router = useRouter();
  const [processedData, setProcessedData] = useState<string[]>([]);
  useEffect(() => {
    const recentSearches = localStorage.getItem("recent-searches");
    const recentSearchesArr: string[] = JSON.parse(recentSearches || "[]");

    const processedStrings: any = {};
    const processedDataArr: string[] = [];

    const MAX_RECENT_SEARCHES = 6;

    for (const str of recentSearchesArr) {
      if (!processedStrings[str]) {
        const mappedValue = str;
        processedDataArr.unshift(mappedValue); // add new item at the beginning of the array
        processedStrings[str] = true;

        if (processedDataArr.length > MAX_RECENT_SEARCHES) {
          // remove the oldest item if the array exceeds 6 elements
          processedDataArr.pop();
        }
      }
    }
    setProcessedData(processedDataArr);
  }, []);

  const handleClearButtonClick = () => {
    setProcessedData([]);
    localStorage.removeItem("recent-searches");
  };

  const navToProdPage = (prodName: string) => {
    const newPathName = updateSearchParams("search", prodName || "");
    router.push(`/product/${prodName}${newPathName}`);
  };

  const rececntClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const clickedItem = event.currentTarget.textContent;
    const encodeItem = encodeURIComponent(clickedItem || "");
    navToProdPage(encodeItem);
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
          <ul className="w-[22rem] sm:w-[25rem] grid grid-cols-3 grid-rows-2 justify-items-start gap-y-3 gap-x-2">
            {/* <ul className="flex gap-x-2 gap-y-3 w-full bg-black"> */}
            {processedData.map((item) => (
              <li
                value={item}
                onClick={rececntClickHandler}
                key={item}
                className="text-sm bg-[#ffffffb0]  text-left py-1 px-2 w-[7rem] sm:min-w-[8rem] h-[1.7rem]  hover:bg-[#ffffff80] cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis"
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
