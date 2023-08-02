export interface Details {
  composition_name: string;
  type: string | null;
  uses: string | null;
  side_effects: string | null;
  info: string | null;
  dosage: string | null;
}

///////////////////////

export interface Product {
  composition: string;
  product_name: string;
  product_url: string;
  stock_value: string | null;
  offer_price: string | null;
  quantity: string | null;
}

export interface PharmacyProduct {
  pharmacy_name: string;
  products: Product[];
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

///////////////////////

export interface OfflineProduct {
  address: string;
  contact_person_name: string;
  contact_person_phone_number: string;
  email: string;
  id: number;
  image_url: string;
  latitude: string;
  location_id: number;
  longitude: string;
  pharmacy_name: string;
  products: {
    brand: string;
    composition: string;
    offer_price: string;
    product_name: string;
    product_url: string;
    quantity: string;
    stock_value: string;
  }[];
  ratings: string;
  store_contact: string;
  store_name: string;
}

export type OfflineData = {
  exact_match: {
    composition: string[];
    result: OfflineProduct[];
  };
  generic_match: {
    composition: string[];
    result: OfflineProduct;
  }[];
};

///////////////////////

export type CscObj = {
  country: string | null;
  country_code_iso2: string | null;
  state: string | null;
  state_code_iso2: string | null;
  city: string | null;
  city_code_iso2: string | null;
  postal_code: string | null;
}[];
