import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Searches = [
  { item: "diltiazem er tiazac" },
  { item: "ziac" },
  { item: "stromectol" },
];

const RecentSearches = () => {
  return (
    <div className=" flex flex-col w-full gap-4 px-24 ">
      <h1 className="text-white font-bold text-lg leading-normal">
        Recent Searches
      </h1>
      <ul className="flex gap-3">
        {Searches.map((item) => (
          <div className="flex items-center bg-[#ffffff40] px-2 py-1 w-fit hover:bg-[#ffffff80] cursor-default gap-2">
            <li className="text-sm">{item.item}</li>
            <span className="hover:cursor-pointer">
              <AiOutlineClose />
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
