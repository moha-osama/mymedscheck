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
  console.log(products);
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
        <div>
          <AiOutlineSearch className="text-[#7A7A7A] text-xl absolute left-[10.7rem] top-[50%] translate-y-[-50%]" />
          <input
            placeholder="Enter a medication"
            type="text"
            className="w-[30rem] h-[3rem] px-8 focus:outline-none disabled:cursor-not-allowed"
            value={input}
            onChange={searchChangeHandler}
            disabled={!option}
          />
        </div>
        {input.trim() !== "" && (
          <div className="absolute top-[3.2rem] left-[10rem]">
            {products?.options.filter((item: string) => item.startsWith(input))
              .length > 0 ? (
              <ul className="bg-white rounded-lg max-h-[20rem] overflow-y-scroll min-w-[30rem] flex flex-col justify-start">
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
              <p className="bg-white rounded-lg max-h-[20rem] min-w-[30rem] left-0 flex items-center justify-center px-4 py-3 text-[#7A7A7A]">
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
