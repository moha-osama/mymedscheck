import Redirect from "@/components/Redirect";
import React from "react";
import { getProductData } from "@/utils";

const page = async ({ searchParams }: any) => {
  return (
    <>
      <Redirect searchParams={searchParams} />
    </>
  );
};

export default page;
