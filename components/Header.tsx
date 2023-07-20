"use client";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { navLinks } from "@/constants";
import Link from "next/link";
import useScroll from "@/hooks/use-scoll";

const Header = () => {
  const scrollDirection = useScroll();
  return (
    <header
      className={`sticky top-0 z-[99] bg-[#fff] h-[80px] flex items-center justify-center shadow-lg transition-transform duration-300 ${
        scrollDirection && "translate-y-[-6rem]"
      }`}
    >
      <div className="flex items-center justify-between w-[90rem]">
        <Link href="/">
          <div className="flex items-center gap-4">
            <div className="relative h-[60px] w-[60px]">
              <Image
                src="/Ulogo.png"
                fill
                alt="my meds check logo"
                className="rounded-2xl"
              />
            </div>
            <h1 className="text-[#085C60] text-2xl font-extrabold">
              MY MEDS CHECK
            </h1>
          </div>
        </Link>
        <div className="flex items-center gap-12">
          <nav>
            <ul className="flex gap-[2rem]">
              {navLinks.map((item) => (
                <Link href={item.href} key={item.title}>
                  <li className="text-[#085C60] text-md">{item.title}</li>
                </Link>
              ))}
            </ul>
          </nav>
          <div>
            <CustomButton
              title="Partner with us"
              style="rounded-lg px-[24px] py-[12px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
