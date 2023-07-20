"use client";
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../public/banner1.png";
import img2 from "../public/banner2.jpg";
import { StaticImageData } from "next/image";

type Slides = { img: StaticImageData; alt: string };

const Banner = () => {
  const slides: Slides[] = [
    { img: img1, alt: "slide 1" },
    { img: img2, alt: "slide 2" },
  ];
  return (
    <div className="w-[90rem] mx-auto my-[1rem] ">
      <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
        {slides.map((item) => (
          <div key={item.alt}>
            <Image
              src={item.img}
              alt={item.alt}
              style={{ objectFit: "cover" }}
              className="aspect-[16/10] md:aspect-auto"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
