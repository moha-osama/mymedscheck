"use client";

import React, { useEffect } from "react";
import List from "./List";
import { Data } from "@/types";

interface PricesSectionProps {
  data: Data;
  searchType: any;
}

const PricesSection = ({ data, searchType }: PricesSectionProps) => {
  //
  useEffect(() => {
    if (searchType.option === "name") {
      const exactMatchResult = data.exact_match.result.filter(
        (item) => item.products.length > 0
      );
      const prodUrl = exactMatchResult[0].products[0].product_url;
      const scrapeData = async () => {
        const res = await fetch("/scrapper", {
          method: "POST",
          body: JSON.stringify({
            url: prodUrl,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const products = await res.json();
      };
      // scrapeData();
    } else {
    }
  }, []);
  //

  return (
    <>
      <List
        searchType={searchType}
        title="Home Delivery"
        subTitle="Buy online and have it delivered to your home"
        btnText="Grab Deal"
        data={data}
      />
      <List
        title="Store Pickup"
        subTitle="Select your nearest store to pickup your prescription"
        btnText="Go to store"
        data={data}
        searchType={searchType}
      />
    </>
  );
};

export default PricesSection;
