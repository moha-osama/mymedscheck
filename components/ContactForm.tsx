"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import { useSearchParams } from "next/navigation";
import { PartnerWithUsBenefits, countryCodes } from "@/constants";

const ContactForm = () => {
  const params = useSearchParams();
  const isMessageForm = params.get("mode") === "send-a-message";

  const [countries, setCountries] = useState();

  useEffect(() => {
    const getData = async () => {
      // var headers = new Headers();
      // headers.append("X-CSCAPI-KEY", "API_KEY");

      // var requestOptions = {
      //   method: "GET",
      //   headers: headers,
      //   redirect: "follow",
      // };

      fetch(
        "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json"
      )
        .then((response) => response.text())
        .then((result) => {})
        .catch((error) => console.log("error", error));
    };
    getData();
  }, []);

  return (
    <section>
      <div className="p-8 flex flex-col md:flex-row max-w-[90rem] mx-auto">
        <div className="flex bg-[#085C60] flex-1 rounded-t-lg md:rounded-l-lg md:rounded-r-none ">
          <div className="relative flex flex-col py-12 px-8 gap-12 md:gap-24 w-full h-full">
            <div>
              <h1 className="font-[700] text-2xl text-white">
                {isMessageForm
                  ? "Contact Information"
                  : "Reach out to our sales team"}
              </h1>
              <p className="text-[#C9C9C9] text-md font-light">
                {isMessageForm
                  ? "Send us a message and we would reply"
                  : "Schedule a call with one of our sales representative"}
              </p>
            </div>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-2 text-white font-[400]">
                <img src="/phone.svg" />
                <p>+1012 3456 789</p>
              </li>
              <li className="flex gap-2 text-white font-[400]">
                <img src="/email.svg" />
                <p>support@dreambill.com</p>
              </li>
            </ul>
            <div className="hidden md:block">
              <Image
                className="absolute bottom-[5.5rem] right-[5.5rem]"
                src="/ellipse4.png"
                width={138}
                height={138}
                alt="ellipse"
              />
              <Image
                className="absolute right-0 bottom-0"
                src="/ellipse3.png"
                width={200}
                height={200}
                alt="ellipse"
              />
            </div>
          </div>
        </div>
        {isMessageForm ? (
          <form className="bg-white h-full px-8 py-8 flex-[2] rounded-b-lg md:rounded-r-lg md:rounded-l-none">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-y-12 gap-x-4 ">
              <FormInput label="First Name" type="text" />
              <FormInput label="Last Name" type="text" />
              <FormInput label="Email" type="email" />
              <FormInput
                label="Phone Number"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                select={countryCodes}
              />
            </div>
            <div className="py-12">
              <label className="text-[#8D8D8D] font-[500] text-sm">Query</label>
              <textarea className="border-b border-[#8D8D8D] focus:outline-none px-2 py-1 w-full" />
            </div>
            <div className="flex justify-end">
              <CustomButton title="Send message" style="py-6 px-8 rounded-lg" />
            </div>
          </form>
        ) : (
          <form className="bg-white h-full px-8 py-8 flex-[2] rounded-b-lg md:rounded-r-lg md:rounded-l-none">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-y-12 gap-x-4 ">
              <FormInput label="First Name" type="text" />
              <FormInput label="Pharmacy name" type="text" />
              <FormInput label="Email" type="email" />
              <FormInput
                label="Phone Number"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                select={countryCodes}
              />
              <FormInput label="Address line 1" type="text" />
              <FormInput label="Address line 2" type="text" />
              <FormInput label="Country" type="text" />
              <FormInput label="State" type="text" />
              <FormInput label="City" type="text" />
              <FormInput label="pincode" type="text" />
            </div>
            <div className="py-12">
              <label className="text-[#8D8D8D] font-[500] text-sm">Query</label>
              <textarea className="border-b border-[#8D8D8D] focus:outline-none px-2 py-1 w-full" />
            </div>
            <div className="flex justify-end">
              <CustomButton title="Send message" style="py-6 px-8 rounded-lg" />
            </div>
          </form>
        )}
      </div>
      {!isMessageForm && (
        <div>
          <div className="flex flex-col items-center justify-center gap-2 bg-[#085C60] h-[10rem]">
            <h1 className="text-white text-xl sm:text-3xl font-extrabold">
              Advantages of working with us
            </h1>
            <img src="underline-vector.png" className="w-[8rem]" />
          </div>
          <div className="relative bg-white">
            {PartnerWithUsBenefits.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    item.id % 2 === 1 ? "bg-white" : "bg-[#E7F4F3]"
                  } py-8 md:py-0 `}
                >
                  <div
                    className={`flex flex-col ${
                      item.id % 2 === 1 ? "" : "md:flex-row-reverse"
                    } items-center  md:flex-row justify-around maxWidth`}
                  >
                    <div className="flex flex-col items-start justify-center max-w-[30rem]">
                      <h1 className="text-[#043CAA] font-[600] text-[18px] md:text-[2rem]">
                        {item.title}
                      </h1>
                      <p className="text-[#69727A] text-[600] text-[16px] md:text-lg max-w-[20rem]">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <Image
                        src={item.img}
                        width={350}
                        height={500}
                        alt={item.title}
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
