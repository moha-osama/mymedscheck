"use client";

import React, { forwardRef } from "react";
import Select from "react-select";

const colourStyles = {
  control: (styles: any, state: any) => ({
    ...styles,
    backgroundColor: "white",
    border: "none",
    borderBottom: "1px solid black",
    outline: "none",
    borderRadius: "none",
    borderBottomColor: "#8D8D8D",
    boxShadow: "none",
  }),
};

interface FormInputProps {
  label: string;
  type: string;
  pattern?: string;
  placeholder?: string;
  select?: { value: string; label: string }[];
  input?: boolean;
  phone?: boolean;
  id: string;
  forwardedRef?: React.Ref<HTMLInputElement>;
  onChangeSelect?: (selectedOption: any) => void;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      type,
      pattern,
      placeholder,
      select,
      input,
      phone,
      id,
      forwardedRef,
      onChangeSelect,
    }: FormInputProps,
    ref
  ) => {
    //

    const handleSelectChange = (selectedOption: any) => {
      if (onChangeSelect) {
        onChangeSelect(selectedOption.value);
      }
    };

    return (
      <div className="flex flex-col w-full max-w-[20rem]">
        <label className="text-[#8D8D8D] font-[500] text-sm">{label}</label>
        <div className="flex relative">
          {select ? (
            <div className="flex w-full">
              <Select
                id={id}
                styles={colourStyles}
                options={select}
                className="flex-1 min-w-[9rem]"
                onChange={handleSelectChange}
              />
              {phone && (
                <input
                  disabled={input}
                  placeholder={placeholder}
                  type={type}
                  pattern={pattern}
                  className={`border-b border-[#8D8D8D] sm:w-full focus:outline-none ${"px-2"}`}
                  required
                  ref={forwardedRef}
                />
              )}
            </div>
          ) : (
            <input
              disabled={input}
              placeholder={placeholder}
              type={type}
              pattern={pattern}
              className={`border-b border-[#8D8D8D] sm:w-full focus:outline-none ${"px-2"} py-[0.4rem] `}
              ref={forwardedRef}
              required
            />
          )}
        </div>
      </div>
    );
  }
);

export default FormInput;
