import React from "react";
import { footerLinks } from "@/constants";
import FooterInput from "./FooterInput";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#085C60] h-fit p-2 md:h-[30rem] text-white">
      <div className="flex flex-col items-center md:flex-row h-full justify-around md:max-w-[80rem] mx-auto">
        <div className="flex flex-col gap-6 justify-cente w-full sm:w-auto ">
          <div>
            <h1 className="text-xl sm:text-2xl font-[700] leading-normal">
              Sign up for our Newsletter
            </h1>
            <p className="text-sm sm:text-lg font-[400] leading-normal max-w-[20rem]">
              Get to know updates in the field of medicine and know how often
              our stores are stocked
            </p>
          </div>
          <div>
            <h3 className="font-[400] leading-normal text-lg">Your Email</h3>
            <FooterInput />
          </div>
          <div>
            <h1 className="text-2xl font-[600] leading-normal">
              Follow MyMedsCheck
            </h1>
            <ul className="flex items-center gap-4  pb-4">
              <li>
                <Image
                  src="/social-media/instagram.png"
                  width={40}
                  height={40}
                  alt=""
                  quality={100}
                />
              </li>
              <li>
                <Image
                  src="/social-media/facebook.png"
                  width={40}
                  height={40}
                  alt=""
                  quality={100}
                />
              </li>
              <li>
                <Image
                  src="/social-media/twiter.png"
                  width={40}
                  height={40}
                  alt=""
                  quality={100}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full sm:w-auto px-4">
          <nav className="flex flex-col gap-8 sm:flex-row">
            {footerLinks.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <ul className="text-lg font-bold leading-normal">
                  {item.title}
                </ul>
                {item.links.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <li className="list-none text-[1rem] font-[400] leading-normal">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
