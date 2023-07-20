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
      <section className="relative flex flex-col bg-white my-4 py-4">
        <nav className="absolute top-[-1.5rem] productNav w-[38rem] px-[0.5rem] h-[3.5rem] left-[50%] translate-x-[-50%]">
          <ul className="flex h-full items-center justify-center gap-[0.5rem]">
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
        <CustomizeSteps />
        <div className="flex flex-col gap-[3rem]">
          <List
            title="Home Delivery"
            subTitle="Buy online and have it delivered to your home"
            shipping
            btnText="Buy online"
            data={data}
          />
          {/* <List
            title="Local Pharmacies"
            subTitle="Choose a pharmacy to get a coupon"
            location
            popular
            save
            shipping={false}
            btnText="Get free savings"
          /> */}
        </div>
      </section>
    </div>
  );
};

export default page;