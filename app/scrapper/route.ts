import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

export async function POST(req: Request, res: NextRequest) {
  const { url } = await req.json();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const html = await page.content();
  const $ = cheerio.load(html);

  try {
    if (url.includes("netmeds")) {
      const name = $(".prodName h1").text().trim();
      const price = $(".final-price").text().trim();
      const drugVarient = $(".drug-varient").text().trim();
      const brand = $(".drug-manu a").text().trim();
      const genericName = $(".genericName").text();

      const info = $("#np_tab1");
      const infoItem = info
        .find("p")
        .map((index, element) => $(element).text().trim())
        .get();

      const usesList = $("#np_tab3 ul");
      const usesListItem = usesList
        .find("li")
        .map((index, element) => $(element).text().trim())
        .get();

      const sideEffectList = $("#np_tab7 ul");
      const sideEffectListItem = sideEffectList
        .find("li")
        .map((index, element) => $(element).text().trim())
        .get();

      return NextResponse.json({
        name,
        price,
        drugVarient,
        brand,
        usesListItem,
        sideEffectListItem,
        genericName,
        infoItem,
      });
    } else {
      return NextResponse.json({ error: `An error occured` });
    }
  } catch (error: any) {
    return NextResponse.json({ error: `An error occured ${error.message}` });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

//other pharmacies scrapping function

// else if (url.includes("apollopharmacy")) {
//   const name = $(".PdpWeb_heading__gUMpv").text().trim();
//   const price = $(".MedicineInfoWeb_medicinePrice__HPf1s").text();
//   const drugVarient = $(".p_typography_x4nuc_1 _typography_x4nuc_1")
//     .text()
//     .trim();
//   const brand = $(".p_typography_x4nuc_1 _typography_x4nuc_1")
//     .text()
//     .trim();

//   const info = $(".ProductDetailsGeneric_descMain__acWBY");
//   const infoItem = info
//     .find("p")
//     .map((index, element) => $(element).text().trim())
//     .get();

//   const usesList = $(
//     'div.ProductDetailsGeneric_descListing__w3wG3 h2:contains("Uses of Brimo Eye Drops 5 ml")'
//   ).parent();
//   const usesListItem = usesList
//     .find("p")
//     .map((index, element) => $(element).text().trim())
//     .get();

//   const sideEffectList = $(".ProductDetailsGeneric_txtListing__d7bk_ ul");
//   const sideEffectListItem = sideEffectList
//     .find("li")
//     .map((index, element) => $(element).text().trim())
//     .get();

//   return NextResponse.json({
//     name,
//     price,
//     drugVarient,
//     brand,
//     usesListItem,
//     sideEffectListItem,

//     infoItem,
//   });
// } else if (url.includes("pharmeasy")) {
//   const name = $(".MedicineOverviewSection_medicineName__dHDQi")
//     .text()
//     .trim();
//   const price = $(".PriceInfo_gcdDiscountContainer__hr0YD").text();
//   const drugVarient = $(".DescriptionTable_value__0GUMC").text().trim();
//   const brand = $(".p_typography_x4nuc_1 _typography_x4nuc_1")
//     .text()
//     .trim();

//   const info = $(".MedicalDescription_root__0RzqO");
//   const infoItem = info
//     .find("p")
//     .map((index, element) => $(element).text().trim())
//     .get();

//   const usesList = $("#uses");
//   const usesListItem = usesList
//     .find(".SubSection_section__y3rQh")
//     .map((index, element) => $(element).text().trim())
//     .get();

//   const sideEffectList = $("#sideEffects ul");
//   const sideEffectListItem = sideEffectList
//     .find("li")
//     .map((index, element) => $(element).text().trim())
//     .get();

//   return NextResponse.json({
//     name,
//     price,
//     drugVarient,
//     brand,
//     usesListItem,
//     sideEffectListItem,

//     infoItem,
//   });
// }
