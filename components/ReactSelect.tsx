"use client";

import React, { useState } from "react";
import Select from "./Select";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { updateSearchParams } from "@/utils";

interface ReactSelectProps {
  products: { options: string[]; origin: string[] };
}

const ReactSelect = ({ products }: ReactSelectProps) => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const searchParams = useSearchParams();
  const option = searchParams.get("option");
  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const optionClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const clickedItem = event.currentTarget.textContent;

    const originalFormIndex = products.options.findIndex(
      (item) => item === clickedItem
    );
    const [originalForm]: any = products.origin[originalFormIndex];
    const newPathName = updateSearchParams("search", originalForm || "");
    router.push(`/product/${originalForm}${newPathName}`);
  };

  return (
    <div className="flex bg-[white] rounded-l-lg">
      <div className="relative flex items-center">
        <Select />
        <div className="relative flex items-center">
          <AiOutlineSearch className="text-[#7A7A7A] text-xl absolute left-[0.5rem]" />
          <input
            placeholder="Enter a medication"
            type="text"
            className="md:w-[30rem] w-[10rem] h-[3rem] pl-8 placeholder:text-xs md:placeholder:text-sm focus:outline-none disabled:cursor-not-allowed disabled:bg-transparent"
            value={input}
            onChange={searchChangeHandler}
            disabled={!option}
          />
        </div>
        {input.trim() !== "" && (
          <div className="absolute top-[3.2rem] left-[6rem] md:left-[10rem]">
            {products?.options.filter((item: string) => item.startsWith(input))
              .length > 0 ? (
              <ul className="bg-white rounded-lg max-h-[20rem] overflow-y-scroll md:w-[30rem] w-[15rem] flex flex-col justify-start">
                {products.options
                  .filter((item: string) => item.startsWith(input))
                  .map((item) => (
                    <li
                      value={item.replace(/\s+/g, "")}
                      onClick={optionClickHandler}
                      key={item}
                      className="px-4 py-3 border-b border-gray-500 last:border-0 text-[#7A7A7A] hover:cursor-pointer hover:bg-[#085C60] hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="bg-white rounded-lg max-h-[20rem] md:w-[30rem] w-[15rem] left-0 flex items-center justify-center px-4 py-3 text-[#7A7A7A]">
                No items found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactSelect;
