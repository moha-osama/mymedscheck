import React from "react";

interface CustomButtonProps {
  title?: string;
  style?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: any;
  type?: "button" | "submit" | "reset";
}
const CustomButton = ({
  title,
  style,
  onClick,
  icon,
  type,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 bg-[#085C60] text-white ${style}`}
    >
      {title}
      {icon}
    </button>
  );
};

export default CustomButton;
