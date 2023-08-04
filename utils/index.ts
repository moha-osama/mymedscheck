export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

export const searchOptionsLoader = async (searchType: any) => {
  const searchByName = "/medicine/list/products";
  const searchByCompositions = "/medicine/list/compositions";
  const res = await fetch(
    `http://100.26.102.21:5000${
      searchType === "composition" ? searchByCompositions : searchByName
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Host-Name": " ec2-35-172-133-114.compute-1.amazonaws.com",
        cache: "no-cache",
      },
    }
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();

  // fix this error later
  if (data.response_data === null) {
    return {
      options: ["aceclofenac (200.0 mg)", "brimonidine (0.15 %)"],
      originalForm: ["brimonidine(0.15 %)", "aceclofenc(200.0 mg)"],
    };
  }

  if (searchType === "name") {
    const options = JSON.parse(data.response_data);
    return { options: options, originalForm: options };
  } else if (searchType === "composition") {
    const options = JSON.parse(data.response_data).map(
      (medicine: any) => medicine.modified_form
    );
    const originalForm = JSON.parse(data.response_data).map(
      (medicine: any) => medicine.original_form
    );
    return { options: options, originalForm: originalForm };
  }
};

export const getProductData = async (searchType: string, product: string) => {
  const encodedSalts = encodeURIComponent(product);
  const searchByName = "/medicine/name/list/";
  const searchByCompositions = "/medicine/composition/list?salts=";

  const res = await fetch(
    `http://100.26.102.21:5000${
      searchType === "name" ? searchByName : searchByCompositions
    }${encodedSalts}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Host-Name": " ec2-35-172-133-114.compute-1.amazonaws.com",
        cache: "no-cache",
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

export const getDetails = async (searchType: string, product: string) => {
  const encodedSalts = encodeURIComponent(product);
  const searchByName = "/medicine/name/details";
  const searchByCompositions = "/medicine/composition/details";

  const res = await fetch(
     `http://100.26.102.21:5000${
      searchType === "name" ? searchByName : searchByCompositions
    }/${encodedSalts}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cache: "no-cache",
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

export const getOfflinePharmaciesData = async (
  searchType: string,
  product: string
) => {
  const encodedSalts = encodeURIComponent(product);

  const searchByName = "/medicine/local/searchbyname";
  const searchByCompositions = "/medicine/local/searchbycomposition?salts=";
  const queries = `city=sonipat&state=HR&country=IN&latitude=28.994553&longitude=77.023975&radius=5`;

  const res = await fetch(
    `http://34.207.163.81:5000${
      searchType === "name" ? searchByName : searchByCompositions
    }/${encodedSalts}?${queries}`,
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

export const getCSCData = async () => {
  const res = await fetch( `http://100.26.102.21:5000/list/csc`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Host-Name": " ec2-35-172-133-114.compute-1.amazonaws.com",
      cache: "no-cache",
    },
  });
  const data = await res.json();
  const parsedData = JSON.parse(data.response_data);
  return parsedData;
};
