"use client";

import CustomButton from "@/components/CustomButton";

export default function Error() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">500</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Internal Server Error
        </p>

        <p className="mt-4 text-gray-500">
          We're working towards creating something better, we won't be long
        </p>

        <div className="flex items-center justify-center pt-8">
          <CustomButton
            title="Try Again"
            style="inline-block px-4 py-2 rounded-lg"
            onClick={() => {
              window.location.reload();
            }}
          />
        </div>
      </div>
    </div>
  );
}
