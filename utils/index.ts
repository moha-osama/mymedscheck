export const searchOptionsLoader = async (searchType: any) => {
  // const searchByName = "/medicine/list/products";
  // const searchByCompositions = "/medicine/list/compositions";
  // const res = await fetch(
  //   `http://${process.env.API_IPV4_ADDRESS}:5000${
  //     searchType === "name" ? searchByName : searchByCompositions
  //   }`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  // if (!res.ok) {
  //   throw new Error("failed to fetch data");
  // }
  // const data = await res.json();
  // console.log(data);
  let data = {
    response_data:
      '[{"modified_form": "aceclofenac (200.0 mg)", "original_form": ["aceclofenac(200.0 mg)"]}, {"modified_form": "brimonidine (0.15 %)", "original_form": ["brimonidine(0.15 %)"]}, {"modified_form": "capecitabine (500.0 mg)", "original_form": ["capecitabine(500.0 mg)"]}, {"modified_form": "cephalexin / cefalexin (125.0 mg)", "original_form": ["cephalexin / cefalexin(125.0 mg)"]}, {"modified_form": "domperidone (10.0 mg) + pantoprazole (40.0 mg)", "original_form": ["domperidone(10.0 mg) + pantoprazole(40.0 mg)"]}, {"modified_form": "inositol nicotinate", "original_form": ["inositol nicotinate"]}, {"modified_form": "levocetirizine (5.0 mg)", "original_form": ["levocetirizine(5.0 mg)"]}, {"modified_form": "pantoprazole (40.0 mg)", "original_form": ["pantoprazole(40.0 mg)"]}, {"modified_form": "tobramycin (0.3 %) + fluorometholone (0.1 %)", "original_form": ["tobramycin(0.3 %) + fluorometholone(0.1 %)"]}, {"modified_form": "vitamin b6 / pyridoxine(10.0 mg) + doxylamine (10.0 mg) + vitamin b9 / folic acid / folate(2.5 mg)", "original_form": ["vitamin b6 / pyridoxine(10.0 mg) + doxylamine(10.0 mg) + vitamin b9 / folic acid / folate(2.5 mg)"]}]',
    status: "OK",
    status_code: "200",
  };
  const compositionParsedData = JSON.parse(data.response_data).map(
    (obj: { modified_form: string; original_form: string[] }) =>
      obj.modified_form
  );
  const compositionPOrigianlarsedData = JSON.parse(data.response_data).map(
    (obj: { modified_form: string; original_form: string[] }) =>
      obj.original_form
  );
  return {
    options: compositionParsedData,
    origin: compositionPOrigianlarsedData,
  };

  // if (searchType === "name") {
  //   if (!data.response_data) {
  //     return {
  //       options: [
  //         "3a pan 40mg tablet",
  //         "dopy plus tablet",
  //         "3a pan d tablet",
  //         "tobrasone eye drops",
  //         "jocap 500mg tablets",
  //         "brimo eye drops",
  //         "broxin syrup 30ml",
  //         "le one 5mg tablet",
  //         "star 365",
  //         "aceper tablet",
  //       ],
  //       origin: null,
  //     };
  //   } else {
  //     const nameParsedData = JSON.parse(data.response_data);
  //     return { options: nameParsedData, origin: null };
  //   }
  // } else if (searchType === "composition") {
  //   const compositionParsedData = JSON.parse(data.response_data).map(
  //     (obj: { modified_form: string; original_form: string[] }) =>
  //       obj.modified_form
  //   );
  //   const compositionPOrigianlarsedData = JSON.parse(data.response_data).map(
  //     (obj: { modified_form: string; original_form: string[] }) =>
  //       obj.original_form
  //   );
  //   return {
  //     options: compositionParsedData,
  //     origin: compositionPOrigianlarsedData,
  //   };
  // } else {
  //   return { options: [], origin: [] };
  // }
};

export const getCompositionInfo = async (product: string) => {
  // const encodedSalts = encodeURIComponent(product);
  // const res = await fetch(
  //   `http://${process.env.API_IPV4_ADDRESS}:5000/medicine/composition/list?salts=${encodedSalts}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  // if (!res.ok) {
  //   throw new Error("failed to fetch data");
  // }
  // const data = await res.json();
  // console.log(data);

  const parsedData = {
    exact_match: {
      composition: ["aceclofenac"],
      result: [
        {
          pharmacy_name: "onemg_prices",
          products: [],
        },
        {
          pharmacy_name: "apollo",
          products: [],
        },
        {
          pharmacy_name: "bharat_generic",
          products: [],
        },
        {
          pharmacy_name: "medkart",
          products: [],
        },
        {
          pharmacy_name: "mrmed",
          products: [],
        },
        {
          pharmacy_name: "pharmeasy",
          products: [
            {
              product_name: "Aceper Tablet",
              product_url: "https://pharmeasy.in/online-medicine-order/3",
              offer_price: "47.60",
              quantity: "10 Tablet(s) in Strip",
              stock_value: null,
              composition: "Aceclofenac(200.0 Mg)",
            },
            {
              product_name: "Aceper Tablet",
              product_url: "undefined",
              offer_price: "47.60",
              quantity: "10 Tablet(s) in Strip",
              stock_value: null,
              composition: "Aceclofenac(200.0 Mg)",
            },
          ],
        },
        {
          pharmacy_name: "truemeds_raw",
          products: [],
        },
      ],
    },
    generic_match: [
      {
        composition: "aceclofenac",
        result: [
          {
            pharmacy_name: "onemg_prices",
            products: [
              {
                product_name: "Erinac SR Tablet",
                product_url:
                  "https://www.1mg.com/drugs/erinac-sr-tablet-157382",
                offer_price: null,
                quantity: "",
                stock_value: "DISCONTINUED",
                composition: "Aceclofenac (200mg)",
              },
              {
                product_name: "Endonac Gel",
                product_url: "https://www.1mg.com/drugs/endonac-gel-308876",
                offer_price: null,
                quantity: "",
                stock_value: "₹59\nInclusive of all taxes\nMRP₹69  14% OFF",
                composition: "Aceclofenac (NA)",
              },
              {
                product_name: "Euroace 100mg Tablet",
                product_url:
                  "https://www.1mg.com/drugs/euroace-100mg-tablet-567637",
                offer_price: null,
                quantity: "",
                stock_value: null,
                composition: "Aceclofenac (100mg)",
              },
              {
                product_name: "Gag PR Gel",
                product_url: "https://www.1mg.com/drugs/gag-pr-gel-256744",
                offer_price: null,
                quantity: "",
                stock_value: "₹45\nInclusive of all taxes\nMRP₹53.33  15% OFF",
                composition: "Aceclofenac (1.5% w/w)",
              },
              {
                product_name: "Eclonac 100mg Tablet",
                product_url:
                  "https://www.1mg.com/drugs/eclonac-100mg-tablet-273146",
                offer_price: null,
                quantity: "",
                stock_value: "₹18\nInclusive of all taxes\nMRP₹19.43  7% OFF",
                composition: "Aceclofenac (100mg)",
              },
              {
                product_name: "Ediflam 100mg Tablet",
                product_url:
                  "https://www.1mg.com/drugs/ediflam-100mg-tablet-432866",
                offer_price: null,
                quantity: "",
                stock_value: null,
                composition: "Aceclofenac (100mg)",
              },
              {
                product_name: "Emofast 200mg Tablet SR",
                product_url:
                  "https://www.1mg.com/drugs/emofast-200mg-tablet-sr-685371",
                offer_price: null,
                quantity: "",
                stock_value: null,
                composition: "Aceclofenac (200mg)",
              },
              {
                product_name: "Esclo Tablet DT",
                product_url: "https://www.1mg.com/drugs/esclo-tablet-dt-339999",
                offer_price: null,
                quantity: "",
                stock_value: "₹28\nInclusive of all taxes\nMRP₹30  6% OFF",
                composition: "Aceclofenac (100mg)",
              },
              {
                product_name: "Eclofen 100mg Tablet",
                product_url:
                  "https://www.1mg.com/drugs/eclofen-100mg-tablet-544328",
                offer_price: null,
                quantity: "",
                stock_value: null,
                composition: "Aceclofenac (100mg)",
              },
              {
                product_name: "Edoclof 200mg Tablet SR",
                product_url:
                  "https://www.1mg.com/drugs/edoclof-200mg-tablet-sr-470617",
                offer_price: null,
                quantity: "",
                stock_value: null,
                composition: "Aceclofenac (200mg)",
              },
            ],
          },
          {
            pharmacy_name: "apollo",
            products: [],
          },
          {
            pharmacy_name: "bharat_generic",
            products: [
              {
                product_name: "Dolosaid-100mg ",
                product_url:
                  "https://www.bharatgeneric.com/product/product_details/142097/dolosaid-100mg",
                offer_price: "29.00",
                quantity: "( 10 )",
                stock_value: "Add To Cart ",
                composition: "Aceclofenac (100mg)",
              },
              {
                product_name: "Dolosaid-200SR ",
                product_url:
                  "https://www.bharatgeneric.com/product/product_details/141728/dolosaid-200sr",
                offer_price: "18.00",
                quantity: "( 10 )",
                stock_value: "Add To Cart ",
                composition: "Aceclofenac (200mg)",
              },
            ],
          },
          {
            pharmacy_name: "medkart",
            products: [
              {
                product_name: "AKILOS 100MG TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/akilos-100mg-tablet-10s",
                offer_price: "15.30",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 100 mg",
              },
              {
                product_name: "ACIMOL SR TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/acimol-sr-tablet-10s",
                offer_price: "36.00",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 200 mg sustained release",
              },
              {
                product_name: "ERINAC SR 200MG TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/erinac-sr-200mg-tablet-10s-4291",
                offer_price: "38.46",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 200 mg sustained release",
              },
              {
                product_name: "MOVON 100MG TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/movon-100mg-tablet-10s-8607",
                offer_price: "25.93",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 100 mg",
              },
              {
                product_name: "MOVON CR 200MG TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/movon-cr-200mg-tablet-10s-8608",
                offer_price: "43.35",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 200 mg sustained release",
              },
              {
                product_name: "AROFF SR 200MG TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/aroff-sr-200mg-tablet-10s-837",
                offer_price: "25.93",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 200 mg sustained release",
              },
              {
                product_name: "AKILOS CR TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/akilos-cr-tablet-10s",
                offer_price: "35.70",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 200 mg sustained release",
              },
              {
                product_name: "ARFLUR CR TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/arflur-cr-tablet-10s-796",
                offer_price: "42.92",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 200 mg sustained release",
              },
              {
                product_name: "ACENEXT 100MG TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/acenext-100mg-tablet-10s",
                offer_price: "23.00",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 100 mg",
              },
              {
                product_name: "ZERODOL CR TABLET 10'S",
                product_url:
                  "https://www.medkart.in/order-medicine/zerodol-cr-tablet-10s-15085",
                offer_price: "77.86",
                quantity: null,
                stock_value: null,
                composition: "Aceclofenac 200 mg sustained release",
              },
            ],
          },
          {
            pharmacy_name: "mrmed",
            products: [],
          },
          {
            pharmacy_name: "pharmeasy",
            products: [
              {
                product_name: "Actozik Sr 200mg Tablets",
                product_url:
                  "https://pharmeasy.in/online-medicine-order/156208",
                offer_price: null,
                quantity: "10 Tablet(s) in Strip",
                stock_value: "Out of Stock",
                composition: "Aceclofenac",
              },
              {
                product_name: "Acelist Sr 200mg Tablets",
                product_url:
                  "https://pharmeasy.in/online-medicine-order/125774",
                offer_price: null,
                quantity: "10 Tablet(s) in Strip",
                stock_value: "Out of Stock",
                composition: "Aceclofenac",
              },
              {
                product_name: "Alto Gel 30gm",
                product_url: "https://pharmeasy.in/online-medicine-order/81127",
                offer_price: null,
                quantity: "30g Gel in Tube",
                stock_value: "Out of Stock",
                composition: "Aceclofenac",
              },
              {
                product_name: "Aciwide 100mg Tablets",
                product_url:
                  "https://pharmeasy.in/online-medicine-order/149600",
                offer_price: null,
                quantity: "10 Tablet(s) in Strip",
                stock_value: "Out of Stock",
                composition: "Aceclofenac(100.0 Mg)",
              },
              {
                product_name: "Acent Injection",
                product_url:
                  "https://pharmeasy.in/online-medicine-order/106117",
                offer_price: null,
                quantity: "1ml Injection",
                stock_value: "Out of Stock",
                composition: "Aceclofenac(150.0 Mg)",
              },
              {
                product_name: "Act 1 Kit",
                product_url: "https://pharmeasy.in/online-medicine-order/32941",
                offer_price: null,
                quantity: "Price to be Updated\n\nOut of Stock\nNotify Me",
                stock_value: "Out of Stock",
                composition: "Aceclofenac",
              },
              {
                product_name: "Algonac Tablets",
                product_url:
                  "https://pharmeasy.in/online-medicine-order/135396",
                offer_price: null,
                quantity: "10 Tablet(s) in Strip",
                stock_value: "Out of Stock",
                composition: "Aceclofenac",
              },
              {
                product_name: "Aflodoc Tablets",
                product_url: "https://pharmeasy.in/online-medicine-order/84393",
                offer_price: null,
                quantity: "10 Tablet(s) in Strip",
                stock_value: "Out of Stock",
                composition: "Aceclofenac",
              },
              {
                product_name: "Actavis 100mg Tablets",
                product_url:
                  "https://pharmeasy.in/online-medicine-order/164467",
                offer_price: null,
                quantity: "10 Tablet(s) in Strip",
                stock_value: "Out of Stock",
                composition: "Aceclofenac(100.0 Mg)",
              },
              {
                product_name: "Actozik 100mg Tablets",
                product_url:
                  "https://pharmeasy.in/online-medicine-order/156207",
                offer_price: null,
                quantity: "10 Tablet(s) in Strip",
                stock_value: "Out of Stock",
                composition: "Aceclofenac",
              },
            ],
          },
          {
            pharmacy_name: "truemeds_raw",
            products: [
              {
                product_name: "Akilos 100 MG Tablet 10",
                product_url:
                  "https://www.truemeds.in/medicine/akilos-100-mg-tablet-10-tm-tacr1-001051",
                offer_price: "9.20",
                quantity: "Pack of 10 Units",
                stock_value: "OUT OF STOCK",
                composition: "ACECLOFENAC (100 MG)",
              },
              {
                product_name: "Aclonac 100 MG Tablet 10",
                product_url:
                  "https://www.truemeds.in/medicine/aclonac-100-mg-tablet-10-tm-tacr1-055547",
                offer_price: "5.89",
                quantity: "Pack of 10 Units",
                stock_value: "OUT OF STOCK",
                composition: "ACECLOFENAC (100 MG)",
              },
              {
                product_name: "Atofen 100 MG Tablet 10",
                product_url:
                  "https://www.truemeds.in/medicine/atofen-100-mg-tablet-10-tm-tacr1-003516",
                offer_price: "8.65",
                quantity: "Pack of 10 Units",
                stock_value: "",
                composition: "ACECLOFENAC (100 MG)",
              },
              {
                product_name: "Afenak 100 MG Tablet 10",
                product_url:
                  "https://www.truemeds.in/medicine/afenak-100-mg-tablet-10-tm-tacr1-000942",
                offer_price: "10.48",
                quantity: "Pack of 10 Units",
                stock_value: "OUT OF STOCK",
                composition: "ACECLOFENAC (100 MG)",
              },
              {
                product_name: "Acetal 100 MG Tablet 10",
                product_url:
                  "https://www.truemeds.in/medicine/acetal-100-mg-tablet-10-tm-tacr1-056340",
                offer_price: "9.60",
                quantity: "Pack of 10 Units",
                stock_value: "",
                composition: "ACECLOFENAC (100 MG)",
              },
              {
                product_name: "Novoflam 200 MG Tablet 10",
                product_url:
                  "https://www.truemeds.in/medicine/novoflam-200-mg-tablet-10-tm-tacr1-027478",
                offer_price: "8.80",
                quantity: "Pack of 10 Units",
                stock_value: "",
                composition: "ACECLOFENAC (200 MG)",
              },
              {
                product_name: "Arflur 50 MG Tablet 10",
                product_url:
                  "https://www.truemeds.in/medicine/arflur-50-mg-tablet-10-tm-tacr1-002938",
                offer_price: "11.46",
                quantity: "Pack of 10 Units",
                stock_value: "OUT OF STOCK",
                composition: "ACECLOFENAC (50 MG)",
              },
              {
                product_name: "Neofen 100 MG Tablet 10",
                product_url:
                  "https://www.truemeds.in/medicine/neofen-100-mg-tablet-10-tm-tacr1-026144",
                offer_price: "10.48",
                quantity: "Pack of 10 Units",
                stock_value: "",
                composition: "ACECLOFENAC (100 MG)",
              },
              {
                product_name: "Flonac Injection 3 ML",
                product_url:
                  "https://www.truemeds.in/medicine/flonac-injection-3-ml-tm-inon2-009279",
                offer_price: "7.04",
                quantity: "Pack of 3 ML",
                stock_value: "",
                composition: "ACECLOFENAC (150 MG)",
              },
              {
                product_name: "Ac1 100 MG Tablet 10",
                product_url:
                  "https://www.truemeds.in/medicine/ac1-100-mg-tablet-10-tm-tacr1-000176",
                offer_price: "8.00",
                quantity: "Pack of 10 Units",
                stock_value: "",
                composition: "ACECLOFENAC (100 MG)",
              },
            ],
          },
        ],
      },
    ],
  };

  return parsedData;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

// export const getProductDetails = async (product: string) => {
//   const encodedSalts = encodeURIComponent(product);
//   const res = await fetch(
//     `http://${process.env.API_IPV4_ADDRESS}:5000/medicine/name/details/${encodedSalts}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   if (!res.ok) {
//     throw new Error("failed to fetch data");
//   }
//   const data = await res.json();
//   const parsedData = JSON.parse(data.response_data);

//   return parsedData;
// };

// 1)	To get list of compositions for Page 1:
// GET /medicine/list/compositions
// Request parameters: None

// 3)	To get list of products for Page 1:
// GET /medicine/list/products
// Request parameters: None
