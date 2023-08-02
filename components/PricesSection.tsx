"use client";

import React, { useEffect, useState } from "react";
import List from "./List";
import { Data, OfflineData } from "@/types";
import { useHandleData, useHandleOfflineData } from "@/hooks/use-handle-data";

interface PricesSectionProps {
  data: Data;
  searchType: any;
  offlinePharmaciesDetails: OfflineData;
}

const PricesSection = ({
  data,
  searchType,
  offlinePharmaciesDetails,
}: PricesSectionProps) => {
  const {
    isLoading: dataIsLoading,
    sample: dataSample,
    exactMatch: dataExactMatch,
    allAvailableData: dataAllAvailableData,
  } = useHandleData(data, searchType);

  const {
    sample: offlineDataSample,
    exactMatch: offlineDataExactMatch,
    allAvailableData: offlineDataAllAvailableData,
  } = useHandleOfflineData(offlinePharmaciesDetails, searchType);

  return (
    <>
      {!dataIsLoading ? (
        <>
          <List
            noImg={true}
            sample={dataSample}
            exactMatchResult={dataExactMatch}
            allAvailableData={dataAllAvailableData}
            searchType={searchType}
            title="Home Delivery"
            subTitle="Buy online and have it delivered to your home"
            btnText="Grab Deal"
            data={data}
          />
          <List
            noImg={false}
            sample={offlineDataSample}
            exactMatchResult={offlineDataExactMatch}
            allAvailableData={offlineDataAllAvailableData}
            title="Store Pickup"
            subTitle="Select your nearest store to pickup your prescription"
            btnText="Go to store"
            data={data}
            searchType={searchType}
          />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center gap-8 pt-12 bg-white">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricesSection;
