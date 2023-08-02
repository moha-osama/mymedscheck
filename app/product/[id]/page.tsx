import React from "react";
import CustomizeSteps from "@/components/CustomizeSteps";
import { getProductData, getDetails, getOfflinePharmaciesData } from "@/utils";
import Layout from "../Layout";
import PricesSection from "@/components/PricesSection";

const page = async ({ searchParams }: any) => {
  const product = searchParams.search;
  const searchType = searchParams.option;

  const data = await getProductData(searchType, product);
  const details = await getDetails(searchType, product);
  const offlinePharmaciesDetails = await getOfflinePharmaciesData(
    searchType,
    product
  );

  return (
    <Layout data={data} details={details} searchType={searchType}>
      <div className="flex flex-col gap-8 pt-12 bg-white">
        <div className="py-4">
          <h1 className="text-2xl font-extrabold leading-normal text-center">
            Customize your savings on this prescription
          </h1>
        </div>
        <CustomizeSteps details={details} data={data} searchType={searchType} />
        <div className="flex flex-col gap-12">
          <PricesSection
            offlinePharmaciesDetails={offlinePharmaciesDetails}
            data={data}
            searchType={searchParams}
          />
        </div>
      </div>
    </Layout>
  );
};

export default page;
