import React from "react";

interface CustomButtonProps {
  title?: string;
  style?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: any;
}
const CustomButton = ({ title, style, onClick, icon }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 bg-[#085C60] text-white ${style}`}
    >
      {title}
      {icon}
    </button>
  );
};

export default CustomButton;
