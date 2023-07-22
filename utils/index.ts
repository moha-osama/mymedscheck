export const searchOptionsLoader = async (searchType: any) => {
  const searchByName = "/medicine/list/products";
  const searchByCompositions = "/medicine/list/compositions";
  const res = await fetch(
    `http://52.91.28.140:5000${
      searchType === "name" ? searchByName : searchByCompositions
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  const nameParsedData = JSON.parse(data.response_data);
  const compositionParsedData = JSON.parse(data.response_data).map(
    (obj: { modified_form: string; original_form: string[] }) =>
      obj.modified_form
  );
  const compositionPOrigianlarsedData = JSON.parse(data.response_data).map(
    (obj: { modified_form: string; original_form: string[] }) =>
      obj.original_form
  );

  if (searchType === "name") {
    return { options: nameParsedData, origin: null };
  } else if (searchType === "composition") {
    return {
      options: compositionParsedData,
      origin: compositionPOrigianlarsedData,
    };
  } else {
    return { options: [], origin: [] };
  }
};

export const getCompositionInfo = async (product: string) => {
  const encodedSalts = encodeURIComponent(product);
  const res = await fetch(
    `http://52.91.28.140:5000/medicine/composition/list?salts=${encodedSalts}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  const parsedData = JSON.parse(data.response_data);

  return parsedData;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

// 1)	To get list of compositions for Page 1:
// GET /medicine/list/compositions
// Request parameters: None

// 3)	To get list of products for Page 1:
// GET /medicine/list/products
// Request parameters: None
