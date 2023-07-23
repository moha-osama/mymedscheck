import React from "react";

interface FooterInputProps {
  style?: string;
}

const FooterInput = ({ style }: FooterInputProps) => {
  return (
    <div>
      <input
        type="email"
        className={`bg-[#DEE9FF] rounded-l-full py-2 pl-4 w-[12rem] sm:w-[14rem]`}
        placeholder="example@email.com"
      />
      <button className={`bg-[#043CAA] rounded-r-full p-2  ${style}`}>
        Subscribe
      </button>
    </div>
  );
};

export default FooterInput;
