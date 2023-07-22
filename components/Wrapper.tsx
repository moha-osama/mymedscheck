import React from "react";

type WrapperProps = { className?: string; children: React.ReactNode };

const Wrapper: React.FC<WrapperProps> = (WrapperProps) => {
  return (
    <div
      className={`w-full max-w-[1280px] px-5 mx-auto ${WrapperProps.className}`}
    >
      {WrapperProps.children}
    </div>
  );
};

export default Wrapper;
