import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { data, type } = await req.json();

  const contactUs = "/user/query";
  const joinUs = "/partner/add/request";
  const subscribe = "/subscribe";
  const defaultUrl = "/default-url"; // add default URL

  const url =
    type === "contact-us"
      ? contactUs
      : type === "join-us"
      ? joinUs
      : type === "subscribe"
      ? subscribe
      : defaultUrl; // use default URL if type is not recognized

  const formData = new FormData();

  if (type !== "subscribe") {
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("contact", data.contact);
    formData.append("query", data.query);
  }
  if (type === "join-us") {
    formData.append("address", data.address);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("city", data.city);
    formData.append("pharmacy_name", data.pharmacy_name);
  } else if (type === "subscribe") {
    formData.append("email", data.email);
  }

  const res = await fetch(`http://34.207.163.81:5000${url}`, {
    method: "POST",
    body: formData,
  });

  try {
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: `An error occured ${error.message}` });
  }
}
