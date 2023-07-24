import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  pattern?: string;
}

const FormInput = ({ label, type, pattern }: FormInputProps) => {
  return (
    <div className="flex flex-col w-full max-w-[20rem]">
      <label className="text-[#8D8D8D] font-[500] text-sm ">{label}</label>
      <input
        type={type}
        pattern={pattern}
        className="border-b border-[#8D8D8D] focus:outline-none px-2 py-1"
      />
    </div>
  );
};

export default FormInput;
