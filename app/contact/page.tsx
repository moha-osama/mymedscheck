import React from "react";
import ContactForm from "@/components/ContactForm";
import { getCSCData } from "@/utils";

const page = async () => {
  const data = await getCSCData();

  return (
    <>
      <ContactForm cscData={data} />
    </>
  );
};

export default page;
