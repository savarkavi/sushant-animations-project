"use client";

import { alfaSlabOne } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const data = [
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768876459/sushant-animations-project/scroll-trigger-2/scroll-trigger-2-img-1_wafoap.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768876459/sushant-animations-project/scroll-trigger-2/scroll-trigger-2-img-2_jreslu.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768876459/sushant-animations-project/scroll-trigger-2/scroll-trigger-2-img-3_gwyn53.jpg",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768876460/sushant-animations-project/scroll-trigger-2/scroll-trigger-2-img-4_uhzzeb.jpg",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Page = () => {
  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLDivElement>(".img-card");

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
      },
    });

    images.forEach((item, i) => {
      const direction = i % 2 === 0 ? -1 : 1;
      const rotation = (5 + i * 1.5) * direction;

      mainTl.to(item, { top: "50%", rotate: rotation });
    });
  });

  return (
    <div
      className={`${alfaSlabOne.className} main-container relative min-h-screen bg-black`}
    >
      <div className="relative h-screen overflow-hidden">
        <div className="relative flex items-center justify-between p-8 uppercase">
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4">
            <p className="border px-4 py-1 font-serif">Seletti</p>
            <p className="text-xl text-blue-700">Absolut.</p>
          </div>
          <p className="absolute top-1/2 right-4 -translate-y-1/2 text-blue-700">
            Connect wallet
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[12rem] uppercase">Roadmap.</h1>
          <div className="flex animate-bounce flex-col items-center gap-2 text-xl">
            <p>Scroll</p>
            <p>↓</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-screen w-full">
        {data.map((item, i) => (
          <div
            key={i}
            className="img-card absolute top-[140%] left-1/2 h-125 w-175 -translate-1/2 rounded-xl border border-white"
          >
            <Image
              src={item.src}
              alt="img"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-[12rem] uppercase">Roadmap.</h1>
      </div>
    </div>
  );
};

export default Page;
