import React from "react";

const loading = () => {
  return (
    <div className="bg-white h-[100vh] flex items-center justify-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default loading;
