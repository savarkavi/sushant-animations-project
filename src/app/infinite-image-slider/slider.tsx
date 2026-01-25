"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const data = [
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769229380/sushant-animations-project/infinite-image-slider/infinite-slider-img1_ayiy3m.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769229380/sushant-animations-project/infinite-image-slider/infinite-slider-img2_xqmjg9.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769229380/sushant-animations-project/infinite-image-slider/infinite-slider-img3_bbgaqk.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769229380/sushant-animations-project/infinite-image-slider/infinite-slider-img4_c8fjb3.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769229380/sushant-animations-project/infinite-image-slider/infinite-slider-img5_fr6quu.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769229380/sushant-animations-project/infinite-image-slider/infinite-slider-img6_zd7uul.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769229381/sushant-animations-project/infinite-image-slider/infinite-slider-img7_fdq7tl.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769229381/sushant-animations-project/infinite-image-slider/infinite-slider-img8_o5ogsm.jpg",
  },
];

const SLIDER_DATA = [...data, ...data, ...data];

gsap.registerPlugin(useGSAP);

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef(1);

  useGSAP(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;

    let currentX = 0;

    const scrollX = gsap.quickSetter(container, "x", "px");

    const totalSliderWidth = container?.scrollWidth;
    const singleSetWidth = totalSliderWidth / 3;

    const handleMouseMove = (e: MouseEvent) => {
      const center = window.innerWidth / 2;

      if (e.clientX < center) {
        directionRef.current = -1;
      } else {
        directionRef.current = 1;
      }
    };

    const updatePosition = () => {
      currentX -= directionRef.current * 4;

      const wrappedX = gsap.utils.wrap(-singleSetWidth, 0, currentX);

      scrollX(wrappedX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(updatePosition);
    };
  });

  return (
    <div className="w-full overflow-hidden py-10">
      <div
        ref={sliderRef}
        className="flex w-max cursor-grab items-center gap-6 active:cursor-grabbing"
      >
        {SLIDER_DATA.map((item, i) => (
          <div
            key={`img-${i}`}
            className="relative h-75 w-100 shrink-0 overflow-hidden rounded-md"
          >
            <Image src={item.src} alt="img" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
