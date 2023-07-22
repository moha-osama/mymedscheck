import React from "react";

const Searches = [
  { item: "diltiazem er tiazac" },
  { item: "ziac" },
  { item: "stromectol" },
];

const RecentSearches = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full mx-auto gap-4 md:px-24">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white font-bold text-lg leading-normal">
          Recent Searches
        </h1>
        <button className="px-1 text-white bg-[#085C60] text-[14px]">
          Clear history
        </button>
      </div>
      <ul className="flex items-start gap-3 w-full ">
        {Searches.map((item) => (
          <div
            key={item.item}
            className="flex bg-[#ffffff40] px-2 py-1 w-fit hover:bg-[#ffffff80] cursor-default gap-2"
          >
            <li className="text-sm">{item.item}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
