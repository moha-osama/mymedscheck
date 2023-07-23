import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Delivery from "@/components/Delivery";
import MobileApp from "@/components/MobileApp";
import GuideSection from "@/components/GuideSection";
import { searchOptionsLoader } from "@/utils";
import Header from "@/components/Header";

export default async function Home({ searchParams }: any) {
  const data = await searchOptionsLoader(
    searchParams.option || { options: [], origin: [] }
  );
  return (
    <main>
      <Hero parsedData={data} />
      <GuideSection />
      <Delivery />
      <MobileApp />
    </main>
  );
}
