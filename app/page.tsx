import Hero from "@/components/Hero";
import Delivery from "@/components/Delivery";
import MobileApp from "@/components/MobileApp";
import GuideSection from "@/components/GuideSection";
import { searchOptionsLoader, sendMessage } from "@/utils";

export default async function Home({ searchParams }: any) {
  const data = await searchOptionsLoader(searchParams.option);

  return (
    <main>
      <Hero
        data={data ? data : { options: [], originalForm: [] }}
        searchParams={searchParams}
      />
      <GuideSection />
      <Delivery />
      <MobileApp />
    </main>
  );
}
