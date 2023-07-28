"use client";

import React, { useState } from "react";
import Select from "./Select";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { updateSearchParams } from "@/utils";
import CustomButton from "./CustomButton";

interface ReactSelectProps {
  products: { options: string[]; originalForm: string[] };
  searchError: boolean;
  setSearchError: (x: boolean) => void;
}

const ReactSelect = ({ products }: ReactSelectProps) => {
  const router = useRouter();

  const [input, setInput] = useState<string>("");
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<string | undefined>();

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addItemToLocalStorage = (originalForm: string) => {
    const recentsArrStr = localStorage.getItem("recent-searches");
    let recents = [];
    if (recentsArrStr) {
      recents = JSON.parse(recentsArrStr);
    }
    recents.push(originalForm);
    if (recents.length > 10) {
      recents = recents.slice(-10);
    }
    const recentsArrStrUpdated = JSON.stringify(recents);
    localStorage.setItem("recent-searches", recentsArrStrUpdated);
  };

  const navToProdPage = (prodName: string) => {
    const newPathName = updateSearchParams("search", prodName || "");
    router.push(`/product/${prodName}${newPathName}`);
  };
  const optionClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const clickedItem = event.currentTarget.textContent;
    addItemToLocalStorage(clickedItem || "");

    if (select === "name") {
      navToProdPage(clickedItem || "");
    } else if (select === "composition") {
      const originalFormIndex = products.options.findIndex(
        (item: string) => item === clickedItem
      );
      const [originalForm]: any = products.originalForm[originalFormIndex];
      navToProdPage(originalForm || "");
    }
  };

  // const searchClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   if (select === undefined || input.trim() === "") {
  //     setSearchError(true);
  //     return;
  //   }
  //   const originalFormIndex = products.options.findIndex(
  //     (item) => item === input
  //   );
  //   if (!originalFormIndex || originalFormIndex < 0) router.push(`/not-found`);
  //   const [originalForm]: any = products.origin[originalFormIndex];
  //   const newPathName = updateSearchParams("search", originalForm || "");
  //   router.push(`/product/${originalForm}${newPathName}`);
  // };

  return (
    <div className="flex">
      <div className="relative flex items-center bg-[white] rounded-l-lg">
        <Select
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
          select={select}
          setSelect={setSelect}
        />
        <div className="relative flex items-center">
          <AiOutlineSearch className="text-[#7A7A7A] text-xl absolute left-[0.5rem] hidden sm:block" />
          <input
            onFocus={() => setMenuIsOpen(false)}
            placeholder="Enter a medication"
            type="text"
            className={`md:w-[30rem] sm:w-[20rem] w-[8rem] h-[3rem] pl-2 sm:pl-8 placeholder:text-xs md:placeholder:text-sm focus:outline-none`}
            value={input}
            onChange={searchChangeHandler}
          />
        </div>
        {input.trim() !== "" && (
          <div className="absolute top-[3.2rem] left-[6rem] md:left-[10rem]">
            {products?.options.filter((item: string) =>
              item.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())
            ).length > 0 ? (
              <ul className="bg-white rounded-lg max-h-[20rem] overflow-y-scroll md:w-[30rem] w-[15rem] flex flex-col justify-start">
                {products?.options
                  .filter((item: string) =>
                    item.toLocaleLowerCase().startsWith(input)
                  )
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
      <CustomButton
        title="Search"
        style="rounded-r-lg font-bold px-[12px] md:px-[24px] py-[12px] "
      />
    </div>
  );
};

export default ReactSelect;
