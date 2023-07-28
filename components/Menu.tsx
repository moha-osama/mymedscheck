"use client";

import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

type MenuProps = {
  onShow: () => void;
  onClose: () => void;
};

function Menu({ onShow, onClose }: MenuProps) {
  const router = useRouter();

  // const scrollHandler = (href: string) => {
  //   const element = document.getElementById(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const href = event.currentTarget.id;
    // console.log(href);
    if (href.includes("#")) {
      // scrollHandler(href);
      return;
    }
    // const searchParams = new URLSearchParams(window.location.search);
    const newPathname = `${href}`;
    router.push(newPathname);
  };

  return (
    <ul className="hidden lg:flex items-center gap-8 font-medium text-black">
      {navLinks.map((item) => (
        <li
          id={item.href}
          onClick={handleClick}
          key={item.title}
          className="text-[#085C60] text-[16px] cursor-pointer"
        >
          {item.title}
        </li>
      ))}
      <Link href={"/contact?mode=partner-with-us"}>
        <CustomButton
          title="Partner with us"
          style="rounded-lg px-[1rem] py-[0.5rem]"
        />
      </Link>
    </ul>
  );
}

export default Menu;
