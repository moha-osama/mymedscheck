"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import { useSearchParams } from "next/navigation";
import { countryCodes } from "@/constants";
import { CscObj } from "@/types";
import Advantages from "./Advantages";

interface ContactFormProps {
  cscData: CscObj;
}

const ContactForm = ({ cscData }: ContactFormProps) => {
  const params = useSearchParams();
  const isMessageForm = params?.get("mode") === "send-a-message";

  //
  const countryCodesOptions = countryCodes.map((item) => {
    return { value: item.dial_code, label: `${item.code} - ${item.dial_code}` };
  });
  //
  const uniqueCountryCodes = new Set();
  const countries: { value: string; label: string }[] = [];
  cscData.forEach((item) => {
    if (!uniqueCountryCodes.has(item.country_code_iso2)) {
      if (item.country_code_iso2 && item.country !== null) {
        countries.push({ value: item.country_code_iso2, label: item.country });
      }
      uniqueCountryCodes.add(item.country_code_iso2);
    }
  });
  //
  //
  const uniqueStateCodes = new Set();
  const states: { value: string; label: string }[] = [];

  cscData.forEach((item) => {
    if (
      item.country_code_iso2 &&
      item.state_code_iso2 &&
      item.state &&
      !uniqueStateCodes.has(item.state_code_iso2)
    ) {
      states.push({ value: item.state_code_iso2, label: item.state });
      uniqueStateCodes.add(item.state_code_iso2);
    }
  });
  //
  const uniqueCityNames = new Set();
  const cities: { value: string; label: string }[] = [];

  cscData.forEach((item) => {
    if (
      item.country_code_iso2 &&
      item.state_code_iso2 &&
      item.city &&
      !uniqueCityNames.has(item.city)
    ) {
      cities.push({ value: item.city, label: item.city });
      uniqueCityNames.add(item.city);
    }
  });
  //

  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const pharmacyName = useRef<HTMLInputElement>(null);
  const address1 = useRef<HTMLInputElement>(null);
  const address2 = useRef<HTMLInputElement>(null);

  const [telCode, setTelCode] = useState(null);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  const handleSelectTelCode = (selectedOption: any) => {
    setTelCode(selectedOption);
  };
  const handleSelectCountry = (selectedOption: any) => {
    setCountry(selectedOption);
  };
  const handleSelectState = (selectedOption: any) => {
    setState(selectedOption);
  };
  const handleSelectCity = (selectedOption: any) => {
    setCity(selectedOption);
  };

  const sendData = async () => {
    const res = await fetch("/send-message", {
      method: "POST",
      body: JSON.stringify({
        type: `${isMessageForm ? "contact-us" : "join-us"}`,
        data: {
          name: `${nameRef.current?.value} ${lastNameRef.current?.value}`,
          email: emailRef.current?.value,
          contact: `${telCode} ${numberRef.current?.value}`,
          query: messageRef.current?.value,
          // address: `${address1.current?.value} - ${address2.current?.value}`,
          // state: state,
          // country: country,
          // city: city,
          // pharmacy_name: pharmacyName.current?.value,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    console.log(response);
  };

  const submissionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    sendData();
  };

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
              <FormInput
                label="First Name"
                type="text"
                forwardedRef={nameRef}
                id="FirstName"
              />
              <FormInput
                label="Last Name"
                type="text"
                forwardedRef={lastNameRef}
                id="LastName"
              />
              <FormInput
                label="Email"
                type="email"
                forwardedRef={emailRef}
                id="email"
              />
              <FormInput
                label="Phone Number"
                type="tel"
                select={countryCodesOptions}
                id="PhoneNumber"
                phone={true}
                forwardedRef={numberRef}
                onChangeSelect={handleSelectTelCode}
              />
            </div>
            <div className="py-12">
              <label className="text-[#8D8D8D] font-[500] text-sm">Query</label>
              <textarea
                className="border-b border-[#8D8D8D] focus:outline-none px-2 py-1 w-full"
                ref={messageRef}
              />
            </div>
            <div className="flex justify-end">
              <CustomButton
                onClick={submissionHandler}
                title="Send message"
                style="py-6 px-8 rounded-lg"
              />
            </div>
          </form>
        ) : (
          <form className="bg-white h-full px-8 py-8 flex-[2] rounded-b-lg md:rounded-r-lg md:rounded-l-none">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-y-12 gap-x-4 ">
              <FormInput
                label="Full Name"
                type="text"
                id="FullName"
                forwardedRef={nameRef}
              />
              <FormInput
                label="Pharmacy Name"
                type="text"
                id="harmacy Name"
                forwardedRef={pharmacyName}
              />
              <FormInput label="Email" type="email" id="emaill" />
              <FormInput
                label="Phone Number"
                type="tel"
                id="tel"
                select={countryCodesOptions}
                onChangeSelect={handleSelectTelCode}
                phone={true}
                forwardedRef={numberRef}
              />
              <FormInput
                label="Address line 1"
                type="text"
                id="Addressline1"
                forwardedRef={address1}
              />
              <FormInput
                label="Address line 2"
                type="text"
                id="Addressline2"
                forwardedRef={address2}
              />
              <FormInput
                label="Country"
                type="text"
                select={countries}
                onChangeSelect={handleSelectCountry}
                id="Country"
              />
              <FormInput
                label="State"
                type="text"
                select={states}
                id="State"
                onChangeSelect={handleSelectState}
              />
              <FormInput
                label="City"
                type="text"
                select={cities}
                id="City"
                onChangeSelect={handleSelectCity}
              />
              <FormInput label="pincode" type="text" id="pincode" />
            </div>
            <div className="py-12">
              <label className="text-[#8D8D8D] font-[500] text-sm">Query</label>
              <textarea
                className="border-b border-[#8D8D8D] focus:outline-none px-2 py-1 w-full"
                ref={messageRef}
              />
            </div>
            <div className="flex justify-end">
              <CustomButton
                onClick={submissionHandler}
                type="submit"
                title="Join Us"
                style="py-6 px-8 rounded-lg"
              />
            </div>
          </form>
        )}
      </div>
      {!isMessageForm && <Advantages />}
    </section>
  );
};

export default ContactForm;
