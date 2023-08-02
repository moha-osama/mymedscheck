"use client";

import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

interface SelectProps {
  menuIsOpen: boolean;
  setMenuIsOpen: (x: boolean) => void;
  select: string | undefined;
  setSelect: (select: string | undefined) => void;
  searchError: boolean;
}

const optionsList: { label: string; value: string }[] = [
  { label: "Medication Name", value: "name" },
  { label: "Medication Composition", value: "composition" },
];

const Select = ({
  menuIsOpen,
  setMenuIsOpen,
  select,
  setSelect,
  searchError,
}: SelectProps) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const option = searchParams?.get("option");

  const selectChangeHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const value = event.currentTarget.getAttribute("value") || "";
    setMenuIsOpen(false);
    setSelect(value);
    const newPathName = updateSearchParams("option", value);
    router.push(newPathName);
  };

  return (
    <div className="relative flex items-center pl-1">
      <li
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className="cursor-pointer flex items-center justify-between px-2 w-[6rem] md:w-[10rem] text-[#085C60] font-medium nd:gap-2 relative bg-[#b5cecf] h-[2.5rem] md:px-3 rounded-md"
      >
        <p className="flex text-xs md:flex-grow md:text-[16px]">
          {option ? option : "Search by"}
        </p>
        <span>
          <BsChevronDown />
        </span>
      </li>
      {menuIsOpen && (
        <ul
          onMouseLeave={() => setMenuIsOpen(false)}
          className={`absolute bottom-[-6.5rem] w-[250px] left-0  text-black shadow-lg rounded-md`}
        >
          {optionsList.map((item) => (
            <li
              key={item.value}
              value={item.value}
              onClick={selectChangeHandler}
              className="bg-white h-12 flex justify-between items-center px-3 hover:bg-[#085C60] hover:text-white text-gray-500 hover:cursor-pointer first:hover:rounded-t-md last:hover:rounded-b-md"
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
