export interface PharmacyProduct {
  pharmacy_name: string;
  products: Product[];
}

export interface Product {
  composition: string;
  product_name: string;
  product_url: string;
  stock_value: string | null;
  offer_price: string | null;
  quantity: string | null;
}

export type Data = {
  exact_match: {
    composition: string[];
    result: PharmacyProduct[];
  };
  generic_match: {
    composition: string;
    result: PharmacyProduct[];
  }[];
};

export interface Details {
  composition_name: string;
  type: string;
  uses: string;
  side_effects: string;
  info: string;
  dosage: string;
}
