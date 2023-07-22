import Image from "next/image";
import Link from "next/link";
import FooterInput from "@/components/FooterInput";

export default function NotFound() {
  return (
    <div className="m-4">
      <div className="flex items-center justify-around bg-white rounded-xl p-4 py-24">
        <div className="flex flex-col gap-12">
          <p className="w-[40rem] text-xl font-medium">
            Oh no! Looks like we don’t have this drug in our inventory.Stay
            tuned! We're in the process of onboarding this product to better
            serve you.
          </p>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#085C60] text-2xl font-bold">
              Please share your email id and we will notify you once its
              available
            </h1>
            <FooterInput style="bg-[#085C60] text-white" />
          </div>
        </div>
        <div>
          <Image src="/error.png" width={400} height={400} alt="" />
        </div>
      </div>
    </div>
  );
}
