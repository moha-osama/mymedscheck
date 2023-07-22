import React from "react";

interface CustomButtonProps {
  title?: string;
  style?: string;
  onClick?: () => void;
}
const CustomButton = ({ title, style, onClick }: CustomButtonProps) => {
  return (
    <button onClick={onClick} className={`bg-[#085C60] text-white ${style}`}>
      {title}
    </button>
  );
};

export default CustomButton;
