import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ListItemProps {
  btnText: string;
  pharmacyName?: string;
  offerPrice?: string;
  productName?: string;
  productUrl?: string;
}

interface Product {
  composition: string;
  offer_price: string | null;
  product_name: string;
  product_url: string;
  quantity: string;
  stock_value: string | null;
}

const ListItem = ({
  btnText,
  pharmacyName,
  offerPrice,
  productName,
  productUrl,
}: ListItemProps) => {
  return (
    <div className="flex items-center border-b border-gray-500 w-full py-3">
      <div className="flex flex-grow items-center gap-4">
        <div className="relative h-8 w-8">
          <Image
            fill
            src={`/home_delivery_logos/${pharmacyName}.jpg`}
            className="rounded-full"
            alt=""
          />
        </div>
        <h1>{productName}</h1>
      </div>
      <div className="flex items-center gap-6">
        <div>
          {offerPrice ? (
            <p className="text-[24px] font-[600]">
              <span className="pr-1 text-[18px]">₹</span>
              {offerPrice}
            </p>
          ) : (
            <p>Check on the webiste</p>
          )}
        </div>
        <Link href={`${productUrl}`}>
          <button className="border border-[#085C60] text-[#085C60] font-medium py-[0.5rem] px-[1rem] rounded-md text-[16px] hover:bg-[#085C60] hover:text-white">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
