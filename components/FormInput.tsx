"use client";

import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

interface FormInputProps {
  label: string;
  type: string;
  pattern?: string;
  placeholder?: string;
  select?: { code: string; dial_code: string; name: string }[];
}

const FormInput = ({
  label,
  type,
  pattern,
  placeholder,
  select,
}: FormInputProps) => {
  const [menuShown, setMenuShown] = useState(false);
  const [selected, setSelected] = useState("+20");

  const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    const clickedItem = event.currentTarget.id;
    setSelected(clickedItem);
    setMenuShown(false);
  };

  return (
    <div className="flex flex-col w-full max-w-[20rem]">
      <label className="text-[#8D8D8D] font-[500] text-sm">{label}</label>
      <div className="flex relative">
        {select && (
          <ul className="absolute top-[2.5rem] z-[99]">
            {menuShown && (
              <div className="flex flex-col h-[12rem] overflow-y-scroll bg-white shadow-lg">
                {select.map((item) => (
                  <li
                    id={item.dial_code}
                    onClick={handleSelect}
                    key={item.code}
                    className="hover:bg-gray-300 cursor-pointer"
                  >
                    {item.code} - {item.dial_code}
                  </li>
                ))}
              </div>
            )}
          </ul>
        )}
        {select && (
          <div
            onClick={() => setMenuShown(!menuShown)}
            className="flex items-center justify-center cursor-pointer"
          >
            <AiFillCaretDown />
          </div>
        )}
        {select && (
          <div className="absolute left-5 top-[50%] translate-y-[-50%]">
            <p className="text-gray-400">{selected}</p>
          </div>
        )}
        <input
          placeholder={placeholder}
          type={type}
          pattern={pattern}
          className={`border-b border-[#8D8D8D] sm:w-full focus:outline-none ${
            select ? "px-14 w-[14rem]" : "px-2"
          } py-1`}
        />
      </div>
    </div>
  );
};

export default FormInput;
