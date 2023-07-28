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
    `https://${process.env.API_IPV4_ADDRESS}:5000${
      searchType === "composition" ? searchByCompositions : searchByName
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  console.log(data);
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
    `https://${process.env.API_IPV4_ADDRESS}:5000${
      searchType === "name" ? searchByName : searchByCompositions
    }${encodedSalts}`,
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

export const getDetails = async (searchType: string, product: string) => {
  const encodedSalts = encodeURIComponent(product);
  const searchByName = "/medicine/name/details";
  const searchByCompositions = "/medicine/composition/details";

  const res = await fetch(
    `https://${process.env.API_IPV4_ADDRESS}:5000${
      searchType === "name" ? searchByName : searchByCompositions
    }/${encodedSalts}`,
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

export const logActivity = async (
  ip: string,
  city: string,
  state: string,
  page_name: string,
  country: string
) => {
  const res = await fetch(
    `https://${process.env.API_IPV4_ADDRESS}:5000//log/activity`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ip: "2.2.2.2",
        city: "test",
        state: "test",
        country: "test",
        page_name: "test",
        url: "test",
      }),
    }
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
};
