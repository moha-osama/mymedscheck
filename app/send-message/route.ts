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

  const res = await fetch(`http://44.211.191.213:5000${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const data = await res.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: `An error occured ${error.message}` });
  }
}
