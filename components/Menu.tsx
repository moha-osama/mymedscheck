import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import CustomButton from "./CustomButton";

type MenuProps = {
  onShow: () => void;
  onClose: () => void;
};

function Menu({ onShow, onClose }: MenuProps) {
  return (
    <ul className="hidden lg:flex items-center gap-8 font-medium text-black">
      {navLinks.map((item) => (
        <Link key={item.title} href={item.href}>
          <li
            className="text-[#085C60] text-[16px]"
            onMouseEnter={onShow}
            onMouseLeave={onClose}
          >
            {item.title}
          </li>
        </Link>
      ))}
      <div>
        <CustomButton
          title="Partner with us"
          style="rounded-lg px-[1rem] py-[0.5rem]"
        />
      </div>
    </ul>
  );
}

export default Menu;
