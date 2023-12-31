"use client";

import React, { useEffect, useState } from "react";
import InfoNav from "@/components/InfoNav";
import ProductPrview from "@/components/ProductPrview";
import { Data, Details } from "@/types";

interface LayoutProps {
  children: React.ReactNode;
  details: any;
  searchType: any;
  data: Data;
}

const Layout = ({ data, details, children, searchType }: LayoutProps) => {
  const [prodName, setProdName] = useState("");
  const [medicineState, setMedicineState] = useState("");

  useEffect(() => {
    if (searchType === "name") {
      const [compositionName] = data.exact_match.composition;
      setProdName(compositionName);
      if (details[0]) {
        const type = details[0].type;
        setMedicineState(type);
      } else {
        setMedicineState("");
      }
    } else {
      details.map((obj: Details) => {
        const type = obj.type ? obj.type : "No Data";
        setMedicineState(type);
        const name = obj.composition_name;
        setProdName(name);
      })[0];
    }
  }, []);

  return (
    <>
      <ProductPrview productName={prodName} medicineState={medicineState} />
      <section className="relative flex flex-col my-4 md:my-0 py-12">
        <InfoNav />
        {children}
      </section>
    </>
  );
};

export default Layout;
