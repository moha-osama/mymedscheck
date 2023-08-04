"use client";
import React, { useRef, useState } from "react";

interface FooterInputProps {
  style?: string;
}

const FooterInput = ({ style }: FooterInputProps) => {
  const email = useRef(null);
  const [sent, setSent] = useState(true);

  const sendData = async () => {
    fetch("/send-message", {
      method: "POST",
      body: JSON.stringify({
        type: `subscribe`,
        data: {
          email: email.current.value,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendData();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <input
        ref={email}
        type="email"
        className={`bg-[#DEE9FF] rounded-l-full py-2 pl-4 w-[12rem] sm:w-[14rem] text-black focus:outline-none`}
        placeholder="example@email.com"
      />
      <button
        type="submit"
        className={`bg-[#043CAA] rounded-r-full p-2 ${style}`}
      >
        Subscribe
      </button>
    </form>
  );
};

export default FooterInput;
