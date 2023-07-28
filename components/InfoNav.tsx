"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const productNavLinks: {
  title: string;
  href: string;
}[] = [
  {
    title: "Prices",
    href: "/product",
  },
  {
    title: "Info",
    href: "/product/info",
  },
];

const infoNavLink: {
  title: string;
  href: string;
}[] = [
  { title: "Prices", href: "/product" },
  { title: "Uses", href: "#uses" },
  { title: "Drug Info", href: "#about" },
  { title: "Side Effects", href: "#side-effects" },
  { title: "Images", href: "#images" },
];

const InfoNav = () => {
  const router = useRouter();
  const pathName = usePathname();
  const url = pathName?.substring(0, pathName.lastIndexOf("/"));

  const [isActive, setIsActive] = useState("#uses");

  const scrollHandler = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const href = event.currentTarget.id;
    if (href.includes("#")) {
      scrollHandler(href);
      setIsActive(href);
      return;
    }
    const searchParams = new URLSearchParams(window.location.search);
    const newPathname = `${href}/${searchParams.get(
      "search"
    )}?${searchParams.toString()}`;
    router.push(newPathname);
  };

  //
  const navItems = pathName?.includes("info") ? infoNavLink : productNavLinks;
  //

  return (
    <nav className="absolute w-[20rem] overflow-scroll no-scrollbar top-[1rem] productNav sm:w-[38rem] px-[0.5rem] h-[3.5rem] left-[50%] translate-x-[-50%]">
      <ul className="flex h-full w-full items-center justify-start gap-[0.5rem]">
        {navItems.map((item) => (
          <li
            key={item.title}
            onClick={handleClick}
            id={item.href}
            className={`${
              navItems === productNavLinks
                ? url === item.href
                  ? "bg-[#D9D9D9]"
                  : ""
                : navItems === infoNavLink
                ? isActive === item.href
                  ? "bg-[#D9D9D9]"
                  : ""
                : ""
            } py-[0.7rem] px-[1rem] whitespace-nowrap rounded-full w-full text-center hover:bg-[#D9D9D9] cursor-pointer`}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default InfoNav;
