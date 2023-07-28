"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Details, Data } from "@/types";

interface CustomizeStepsProps {
  details: any;
  searchType: any;
  data: Data;
}

const CustomizeSteps = ({ data, details, searchType }: CustomizeStepsProps) => {
  const [prodName, setProdName] = useState("");

  useEffect(() => {
    if (searchType === "name") {
      const [compositionName] = data.exact_match.composition;
      setProdName(compositionName);
    } else {
      const obj: Details = details.filter(
        (obj: any) => !Object.values(obj).includes(null)
      )[0];
      setProdName(obj.composition_name);
    }
  }, []);

  //
  const [userAddress, setUserAddress] = useState("TEST");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      var requestOptions = {
        method: "GET",
      };

      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=f550e7b9366a4fbfb984ca9e82ae3c75`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) =>
          setUserAddress(result.features[0].properties.formatted)
        )
        .catch((error) => console.log("error", error));
    });
  }, []);

  return (
    <div className="flex flex-col gap-4 max-w-[80rem] w-[85%] mx-auto my-0">
      <div className="flex">
        <div>
          <Image
            src="/num1.png"
            width={64}
            height={64}
            quality={100}
            style={{ objectFit: "cover" }}
            alt=""
            className="scale-[0.8]"
          />
        </div>
        <div className="mt-[0.5rem]">
          <h1 className="font-bold text-lg">Check your prescription</h1>
          <p className="font-[400] text-md">
            Make sure following details match with your prescription
          </p>
          <div className="flex flex-col pl-[2rem]">
            <p className="font-[400] text-md">Prescription</p>
            <div className="relative flex gap-4 text-[#3268C4] w-fit">
              <p className="text-sm">{prodName}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          <Image
            src="/num2.png"
            width={64}
            height={64}
            quality={100}
            style={{ objectFit: "cover" }}
            alt=""
            className="scale-[0.8]"
          />
        </div>
        <div className="mt-[0.5rem]">
          <h1 className="font-bold text-lg">
            Pick the price that's right for you
          </h1>
          <p className="font-[400] text-md">
            Get a free coupon or join MyMedCheck to save more.
          </p>
          <div className="flex flex-col pl-[2rem]">
            <p className="font-[400] text-md">Location</p>
            <div className="relative flex gap-4 text-[#3268C4] w-fit">
              <p className="text-sm ">{userAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeSteps;
