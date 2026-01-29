"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef, useState } from "react";

const data = [
  {
    label: "Marc jacobs",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579431/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img1_d5wunl.jpg",
  },
  {
    label: "Linvosges",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579431/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img2_qu1xmh.jpg",
  },
  {
    label: "Beau magazine",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579431/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img3_xx3mjz.jpg",
  },
  {
    label: "Lutron",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579431/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img4_mnzyvi.jpg",
  },
  {
    label: "Miu miu",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579430/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img5_yomdzm.jpg",
  },
  {
    label: "Hermes",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579430/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img6_kdlf16.jpg",
  },
  {
    label: "Luis vutton",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579430/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img7_qqpw4l.jpg",
  },
  {
    label: "Baccarat",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579430/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img8_uiqvzn.jpg",
  },
  {
    label: "L’artisan parfumeur",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579430/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img9_jt6lw4.jpg",
  },
  {
    label: "PussPuss Magazine",
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769579430/sushant-animations-project/scroll-trigger-3/scroll-trigger-3-img10_t45ctg.jpg",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageWrapper = useRef<HTMLDivElement>(null);
  const itemsWrapper = useRef<HTMLDivElement>(null);
  const mainContainer = useRef<HTMLDivElement>(null);
  const indexContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageWrapper.current) return;

    const images = gsap.utils.toArray<HTMLDivElement>(".image");
    const items = gsap.utils.toArray<HTMLDivElement>(".item");

    const mainContainerCenter = window.innerHeight / 2 + 40;
    const endScrollDistance =
      imageWrapper.current?.offsetHeight + window.innerHeight / 2 - 40 - 400;
    const itemScrollDistance =
      mainContainer.current!.offsetHeight - itemsWrapper.current!.offsetHeight;
    const indexTravelDistance =
      mainContainer.current!.offsetHeight -
      indexContainer.current!.offsetHeight -
      96;

    gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top 80px",
        end: `+=${endScrollDistance}`,
        pin: true,
        pinSpacing: false,
      },
    });

    images.forEach((item, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            start: `top ${mainContainerCenter}`,
            end: `bottom ${mainContainerCenter}`,
            scrub: 1,
            onEnter: () => {
              setActiveIndex(i);
            },
            onEnterBack: () => {
              setActiveIndex(i);
            },
          },
        })
        .to(items[i], { y: -itemScrollDistance });
    });

    gsap.to(".index-container", {
      y: indexTravelDistance,
      ease: "none",
      scrollTrigger: {
        trigger: ".main-container",
        start: "top 80px",
        end: `+=${endScrollDistance}`,
        scrub: 1,
      },
    });
  });

  return (
    <div>
      <div
        ref={mainContainer}
        className="main-container relative h-[calc(100vh-80px)] text-black"
      >
        <div className="absolute top-1/2 left-1/2 h-px w-1/2 -translate-1/2 bg-gray-300" />
        <div
          ref={indexContainer}
          className="index-container absolute top-12 left-0 scale-y-150 px-8 font-sans text-[100px] leading-30 font-semibold"
        >
          <p>{`${activeIndex + 1}/10`}</p>
        </div>
        <div
          ref={itemsWrapper}
          className="absolute right-0 bottom-0 flex flex-col p-6 text-right text-4xl font-bold uppercase"
        >
          {data.map((item, i) => (
            <div
              style={{ color: activeIndex === i ? "#000" : "#99a1af" }}
              key={i}
              className="item"
            >
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={imageWrapper}
        className="flex -translate-y-100 flex-col items-center gap-4"
      >
        {data.map((item, i) => (
          <div key={i} className="image relative h-100 w-175">
            <Image
              src={item.img}
              alt="img"
              fill
              className={`object-cover transition-all ${activeIndex === i ? "opacity-100" : "opacity-50"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
