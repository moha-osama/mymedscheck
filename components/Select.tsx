"use client";

import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const optionsList: { label: string; value: string }[] = [
  { label: "Medication Name", value: "name" },
  { label: "Medication Composition", value: "composition" },
];

const Select = () => {
  const router = useRouter();
  const [select, setSelect] = useState<string | undefined>();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const option = searchParams.get("option");

  const selectChangeHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const value = event.currentTarget.getAttribute("value") || "";
    setSelect(value);
    const newPathName = updateSearchParams("option", value);
    router.push(newPathName);
  };

  return (
    <div className="relative flex items-center pl-1">
      <li
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className="cursor-pointer flex items-center w-[10rem] text-[#085C60] font-medium gap-2 relative bg-[#b5cecf] h-[2.5rem] px-3 rounded-md"
      >
        <p className="flex flex-grow">{option ? option : "Search by"}</p>
        <span className="px-[0.5rem]">
          <BsChevronDown />
        </span>
      </li>
      {menuIsOpen && (
        <ul
          onMouseLeave={() => setMenuIsOpen(false)}
          className="bg-white absolute bottom-[-6.5rem] w-[250px] left-0  text-black shadow-lg rounded-md"
        >
          {optionsList.map((item) => (
            <li
              key={item.value}
              value={item.value}
              onClick={selectChangeHandler}
              className="h-12 flex justify-between items-center px-3 hover:bg-[#085C60] hover:text-white text-gray-500 hover:cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
