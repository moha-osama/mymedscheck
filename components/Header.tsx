"use client";

import React, { useEffect, useState } from "react";
import useScroll from "@/hooks/use-scoll";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Wrapper from "./Wrapper";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import CustomButton from "./CustomButton";

function Header() {
  const scrollDirection = useScroll();
  const [showCategroies, setShowCategroies] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    function onScroll(): void {
      let y: number = window.scrollY;
      if (y >= 200) {
        setShown(true);
      } else {
        setShown(false);
      }
    }
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full h-[80px] bg-white flex items-center z-[99] sticky top-0 transition-transform duration-300 shadow-md`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2 flex-grow">
            <div className="relative h-[50px] w-[50px]">
              <Image
                src="/Ulogo.png"
                fill
                alt="my meds check logo"
                className="rounded-2xl"
              />
            </div>
            <h1 className="text-[#085C60] sm:text-2xl font-extrabold">
              MY MEDS CHECK
            </h1>
          </div>
        </Link>
        <Menu
          onShow={() => setShowCategroies(true)}
          onClose={() => setShowCategroies(false)}
        />
        {mobileMenu && (
          <MobileMenu
            setShowCategroies={() => setShowCategroies(!showCategroies)}
          />
        )}
        <div className="flex lg:hidden items-center gap-2 text-black">
          <div
            className="icon-container -mr-2 lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <VscChromeClose className="text-[20px]" />
            ) : (
              <BiMenuAltRight className="text-[20px]" />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
