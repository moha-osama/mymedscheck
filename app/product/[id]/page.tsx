import React from "react";
import CustomizeSteps from "@/components/CustomizeSteps";
import { productNavLinks } from "@/constants";
import List from "@/components/List";
import ProductPrview from "@/components/ProductPrview";
import { getCompositionInfo } from "@/utils";

const page = async ({ searchParams }: any) => {
  const product = searchParams.search;
  const data = await getCompositionInfo(product);
  return (
    <div>
      <ProductPrview />
      <section className="relative flex flex-col bg-white my-4 py-12">
        <nav className="absolute w-[20rem] overflow-scroll no-scrollbar top-[-1.5rem] productNav sm:w-[38rem] px-[0.5rem] h-[3.5rem] left-[50%] translate-x-[-50%]">
          <ul className="flex h-full w-full items-center justify-start gap-[0.5rem]">
            {productNavLinks.map((item) => (
              <li
                key={item.title}
                className={`${
                  item.isActive && "bg-[#D9D9D9]"
                } py-[0.7rem] px-[1rem] whitespace-nowrap rounded-full w-[7rem] text-center hover:bg-[#D9D9D9] cursor-pointer`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className="py-4">
          <h1 className="text-2xl font-extrabold leading-normal text-center">
            Customize your savings on this prescription
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <CustomizeSteps />
          <List
            title="Home Delivery"
            subTitle="Buy online and have it delivered to your home"
            btnText="Grab Deal"
            data={data}
          />
        </div>
      </section>
    </div>
  );
};

export default page;
