"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const data = [
  {
    name: "Astraline,",
    url: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768377479/sushant-animations-project/image-reveal-on-hover/image-reveal-on-hover-1_jro6vp.webp",
  },
  {
    name: "Lucid Rift,",
    url: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768377479/sushant-animations-project/image-reveal-on-hover/image-reveal-on-hover-6_wuxz9o.webp",
  },
  {
    name: "Solara,",
    url: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768377478/sushant-animations-project/image-reveal-on-hover/image-reveal-on-hover-4_ngmqci.webp",
  },
  {
    name: "Eclipsed,",
    url: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768377478/sushant-animations-project/image-reveal-on-hover/image-reveal-on-hover-3_ghv7h6.webp",
  },
  {
    name: "Nebulae,",
    url: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768377478/sushant-animations-project/image-reveal-on-hover/image-reveal-on-hover-7_dbmmmt.webp",
  },
  {
    name: "Hollowlight,",
    url: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768377478/sushant-animations-project/image-reveal-on-hover/image-reveal-on-hover-2_arww71.webp",
  },
  {
    name: "Echofall",
    url: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768377478/sushant-animations-project/image-reveal-on-hover/image-reveal-on-hover-5_b9akox.webp",
  },
];

gsap.registerPlugin(useGSAP);

const ContentContainer = () => {
  const hoverTls = useRef<Map<number, gsap.core.Timeline>>(new Map());

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLDivElement>(".item-name");

    items.forEach((_, i) => {
      hoverTls.current.set(
        i,
        gsap
          .timeline({ paused: true })
          .to(`.item-image-${i}`, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          })
          .to(`.underline-${i}`, { width: 0 }, "<"),
      );
    });
  });

  const handleItemHover = (i: number) => {
    hoverTls.current.get(i)?.play();
  };
  const handleItemLeave = (i: number) => {
    hoverTls.current.get(i)?.reverse();
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between pt-36">
      <div className="absolute top-1/2 left-1/2 h-175 w-250 -translate-1/2 rounded-xl">
        {data.map((item, i) => (
          <div
            key={item.name}
            style={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }}
            className={`item-image-${i} absolute top-0 left-0 h-full w-full rounded-xl`}
          >
            <Image
              src={item.url}
              alt="image"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
      <div className="z-99 flex">
        <p className="text-6xl text-black mix-blend-difference">
          Hover over the links
        </p>
        <Image src="/arrow.png" alt="arrow svg" width={100} height={100} />
      </div>
      <div className="z-99 flex w-225 flex-wrap items-center gap-4 py-10 text-black">
        {data.map((item, i) => (
          <div
            onMouseEnter={() => handleItemHover(i)}
            onMouseLeave={() => handleItemLeave(i)}
            key={item.name}
            className="item-name relative cursor-pointer text-6xl font-semibold"
          >
            {item.name}
            <div
              className={`underline-${i} absolute bottom-0 left-0 h-px w-full bg-black`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentContainer;
