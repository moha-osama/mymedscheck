import React from "react";

interface CustomButtonProps {
  title?: string;
  style?: string;
}

const CustomButton = ({ title, style }: CustomButtonProps) => {
  return (
    <button className={`bg-[#085C60] text-white ${style}`}>{title}</button>
  );
};

export default CustomButton;
