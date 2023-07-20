import React from "react";

const FooterInput = () => {
  return (
    <div>
      <input
        type="email"
        className="bg-[#DEE9FF] rounded-l-full py-2 pl-4"
        placeholder="example@email.com"
      />
      <button className="bg-[#043CAA] rounded-r-full p-2">Subscribe</button>
    </div>
  );
};

export default FooterInput;
