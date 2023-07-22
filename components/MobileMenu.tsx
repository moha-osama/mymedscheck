import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { BsChevronDown } from "react-icons/bs";
import CustomButton from "./CustomButton";

type MenuProps = {
  setShowCategroies: () => void;
};

function MobileMenu({ setShowCategroies }: MenuProps) {
  return (
    <ul className="flex flex-col lg:hidden font-bold absolute top-[80px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {navLinks.map((item) => (
        <li
          key={item.title}
          className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
          onClick={setShowCategroies}
        >
          <div className="flex justify-between items-center">{item.title}</div>
        </li>
      ))}
      <div>
        <CustomButton
          title="Partner with us"
          style="rounded-lg px-[24px] py-[12px] mt-2"
        />
      </div>
    </ul>
  );
}

export default MobileMenu;
