import { StaticImageData } from "next/image";

import searchImg from "../public/guide/search.jpg";
import listImg from "../public/guide/check.png";
import walletImg from "../public/guide/wallet.jpg";
import localPharmacy from "../public/local-pharmacy1.png";
import Delivery from "../public/deliveryy1.png";
import list from "../public/list.png";
import steps from "../public/steps.png";
import vision from "../public/vision.png";
import increase from "../public/increase.png";

export const navLinks: { title: string; href: string }[] = [
  { title: "Help", href: "/help" },
  { title: "Contact Us", href: "/contact?mode=send-a-message" },
  { title: "Blog", href: "/blog" },
  { title: "Mobile App", href: "/dowenload-app" },
  { title: "About Us", href: "/about-us" },
];

export const guideSteps: {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
}[] = [
  {
    id: 1,
    title: "Search Prescription drugs",
    description:
      "Easily search medications using product name or drug composition",
    img: searchImg,
  },
  {
    id: 2,
    title: "Unlock the best prices for your medicine effortlessly",
    description: "Unlock the best prices for your medicine effortlessly",
    img: listImg,
  },
  {
    id: 3,
    title: "Pick your pharmacy and avail best deals",
    description:
      "From the list, Select your medicine and add it in your cart from merchant’s website",
    img: walletImg,
  },
];

export const PartnerWithUsBenefits: {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
}[] = [
  {
    id: 1,
    title: "List any small or big pharmacy",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
    img: list,
  },
  {
    id: 2,
    title: "step-by-step directions",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
    img: steps,
  },
  {
    id: 3,
    title: "Increased visibility",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
    img: vision,
  },
  {
    id: 4,
    title: "Higher returns",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
    img: increase,
  },
];

export const footerLinks: {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}[] = [
  {
    title: "Support",
    links: [
      { title: "Help&FAQs", href: "/help" },
      { title: "Advertising Notice", href: "/conact" },
      { title: "Accessibility", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/help" },
      { title: "Privacy Center", href: "/conact" },
      { title: "Terms of Use", href: "/blog" },
      { title: "Site Disclaimer", href: "/blog" },
      { title: "Collection Notice", href: "/blog" },
      { title: "Cookie Preferences", href: "/blog" },
      { title: "Your Privacy Choices", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About MyMedCheck", href: "/help" },
      { title: "Press", href: "/conact" },
      { title: "Research", href: "/blog" },
      { title: "Partner with us", href: "/blog" },
      { title: "Jobs", href: "/blog" },
      { title: "Investors", href: "/blog" },
      { title: "Corporate news", href: "/blog" },
    ],
  },
];

export const getYourMedication: {
  title: string;
  description: string;
  img: StaticImageData;
}[] = [
  {
    title: "Local Pharmacy store pickup",
    description:
      "You can choose to pick up from local pharmacy store as per the medicine availability",
    img: localPharmacy,
  },
  {
    title: "Home Delivery",
    description:
      "You can select any online pharmacy listed and place your order",
    img: Delivery,
  },
];

export const productNavLinks: {
  title: string;
  href: string;
  isActive?: boolean;
}[] = [
  { title: "Prices", href: "/productInfo", isActive: true },
  { title: "Uses", href: "/productInfo" },
  { title: "Drug Info", href: "/productInfo" },
  { title: "Side Effects", href: "/productInfo" },
  { title: "Images", href: "/productInfo" },
];
