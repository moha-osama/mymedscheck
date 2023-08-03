import { useEffect, useState } from "react";
import { Data, OfflineData } from "@/types";

export function useHandleData(data: Data, searchType: any) {
  //

  const [exactMatch, setExactMatch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //
  // getting exact Match Result
  const exactMatchResult = data.exact_match.result.filter(
    (item) => item.products.length > 0
  );

  //getting generic Match Result
  const genericMatchResultObjsArr = data.generic_match
    .flatMap((item) => item.result) // Combine all result arrays into one
    .filter((obj) => obj.products.length > 0); // Filter out objects with empty products array

  //Get the first set of data to show it on opening
  const sample = genericMatchResultObjsArr.map((item) => {
    return {
      pharmacy_name: item.pharmacy_name,
      products: item.products.slice(0, 2),
    };
  });

  const reFormPrice = (str: string) => {
    const regex = /₹ (\d+\.\d+)/;
    const match = str.match(regex);

    if (match) {
      const price = parseFloat(match[1]);
      return price;
    } else {
      return "Price not found";
    }
  };
  //
  useEffect(() => {
    if (searchType.option === "name") {
      const exactMatchResult = data.exact_match.result.filter(
        (item) => item.pharmacy_name === "netmeds"
      );

      if (exactMatchResult[0].products[0]) {
        const prodUrl = exactMatchResult[0].products[0].product_url;
        const scrapeData = async () => {
          setIsLoading(true);
          const res = await fetch("/scrapper", {
            method: "POST",
            body: JSON.stringify({
              url: prodUrl,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const exactMatchResultExceptNetmeds = data.exact_match.result.filter(
            (item) => item.pharmacy_name !== "netmeds"
          );
          const products = await res.json();

          const updatedData: any = [
            ...exactMatchResultExceptNetmeds,
            {
              pharmacy_name: "netmeds",
              products: [
                {
                  composition: products.genericName,
                  offer_price: reFormPrice(products.price),
                  product_name: products.name,
                  product_url: exactMatchResult[0].products[0].product_url,
                  quantity: exactMatchResult[0].products[0].quantity,
                  stock_value: exactMatchResult[0].products[0].stock_value,
                },
              ],
            },
          ];

          setExactMatch(updatedData);
          setIsLoading(false);
        };
        scrapeData();
      } else {
      }
    } else {
    }
  }, []);
  //

  //Combine both exact and generic Results into one array
  const allAvailableData = [...exactMatch, ...genericMatchResultObjsArr];
  if (exactMatch.length === 0) {
    const sample: any = exactMatchResult.map((item) => {
      return {
        pharmacy_name: item.pharmacy_name,
        products: item.products.slice(0, 2),
      };
    });
    setExactMatch(sample);
  }
  return { isLoading, sample, exactMatch, allAvailableData };
}

export function useHandleOfflineData(data: OfflineData, searchType: any) {
  const [exactMatch, setExactMatch] = useState([]);

  const exactMatchResult = data.exact_match.result.filter(
    (item) => item.products.length !== 0
  );
  const genericMatchResultObjsArr = data.generic_match.result.filter(
    (item) => item.products.length !== 0
  );
  const sample = genericMatchResultObjsArr.map((item) => {
    return {
      pharmacy_name: item.pharmacy_name,
      products: item.products.slice(0, 2),
    };
  });
  const allAvailableData = [...exactMatchResult, ...genericMatchResultObjsArr];

  useEffect(() => {
    if (exactMatchResult.length !== 0) {
      const exactMatchSample = exactMatchResult.map((item) => {
        return {
          pharmacy_name: item.pharmacy_name,
          products: item.products.slice(0, 2),
        };
      });
      setExactMatch(exactMatchSample);
    }
  }, [exactMatchResult]);

  return { sample, exactMatch, allAvailableData };
}
