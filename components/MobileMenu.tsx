import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { BsChevronDown } from "react-icons/bs";
import CustomButton from "./CustomButton";

type MenuProps = {
  setShowCategroies: () => void;
  setMobileMenu?: () => void;
};

function MobileMenu({ setMobileMenu }: MenuProps) {
  return (
    <ul className="flex flex-col lg:hidden font-bold absolute top-[80px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {navLinks.map((item) => (
        <Link href={item.href}>
          <li
            key={item.title}
            className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
            onClick={setMobileMenu}
          >
            <div className="flex justify-between items-center">
              {item.title}
            </div>
          </li>
        </Link>
      ))}
      <div>
        <Link href={"/contact?mode=partner-with-us"}>
          <CustomButton
            onClick={setMobileMenu}
            title="Partner with us"
            style="rounded-lg px-[24px] py-[12px] mt-2"
          />
        </Link>
      </div>
    </ul>
  );
}

export default MobileMenu;
