import Image from "next/image";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import { getYourMedication } from "@/constants";
import MobileApp from "@/components/MobileApp";
import GuideSection from "@/components/GuideSection";
import { searchOptionsLoader } from "@/utils";

export default async function Home({ searchParams }: any) {
  const data = await searchOptionsLoader(searchParams.option || null);
  return (
    <main>
      {/* <Banner /> */}
      <Hero parsedData={data} />
      <GuideSection />
      <section className="my-8">
        <div className="flex flex-col justify-center text-center maxWidth">
          <h1 className="text-[#064B45] text-4xl font-bold my-8">
            Two ways to get your medication
          </h1>
          <div className="flex justify-around px-40">
            {getYourMedication.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center bg-white w-fit h-[30rem]"
              >
                <div className="relative w-[32rem] h-[20rem]">
                  <Image
                    src={item.img}
                    fill
                    alt=""
                    quality={100}
                    className="scale-[0.7]"
                  />
                </div>
                <div className="flex flex-col w-[24rem]">
                  <h1 className="text-[#0b7a72] leading-[3rem] text-2xl font-[600]">
                    {item.title}
                  </h1>
                  <p className="font-[300] text-md  text-[#69727A]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <MobileApp /> */}
    </main>
  );
}
