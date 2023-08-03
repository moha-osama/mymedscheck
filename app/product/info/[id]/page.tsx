import React from "react";
import { getDetails, getProductData } from "@/utils";
import ProductInfo from "@/components/productInfo";
import Layout from "../../Layout";

const page = async ({ searchParams }: any) => {
  const product = searchParams.search;
  const searchType = searchParams.option;

  const details = await getDetails(searchType, product);
  const data = await getProductData(searchType, product);

  return (
    <Layout data={data} details={details} searchType={searchType}>
      <ProductInfo data={data} details={details} searchType={searchType} />
    </Layout>
  );
};

export default page;
