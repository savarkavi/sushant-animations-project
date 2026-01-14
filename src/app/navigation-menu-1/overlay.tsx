"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const items = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Work" },
  { id: 4, title: "Studio" },
  { id: 5, title: "Contact" },
];

const Overlay = () => {
  const overlayToggleTl = useRef<gsap.core.Timeline>(null);
  const hoverTls = useRef<Map<number, gsap.core.Timeline>>(new Map());

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLDivElement>(".menu-item");

    overlayToggleTl.current = gsap
      .timeline({ paused: true })
      .to(".overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "expo.in",
        duration: 1,
      })
      .to(".menu-item", { translateY: 0, stagger: 0.1 });

    items.forEach((item, i) => {
      hoverTls.current.set(
        i,
        gsap
          .timeline({ paused: true })
          .to(item, { translateY: -120, duration: 0.3 })
      );
    });
  });

  const handleOverlayOpen = () => {
    overlayToggleTl.current?.play();
  };
  const handleOverlayClose = () => {
    overlayToggleTl.current?.reverse();
  };

  const handleItemHover = (i: number) => {
    hoverTls.current.get(i)?.play();
  };
  const handleItemLeave = (i: number) => {
    hoverTls.current.get(i)?.reverse();
  };

  return (
    <>
      <div
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        className="overlay fixed bg-[#c5fb45] top-0 left-0 w-full h-screen z-10 text-black"
      >
        <button
          onClick={handleOverlayClose}
          className="absolute top-6 right-6 uppercase text-2xl cursor-pointer"
        >
          Close
        </button>
        <div className="flex flex-col justify-center gap-6 p-12">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="w-fit cursor-pointer h-32 overflow-hidden"
              onMouseEnter={() => handleItemHover(i)}
              onMouseLeave={() => handleItemLeave(i)}
            >
              <div className="menu-item relative w-fit translate-y-[120px]">
                <p
                  className="text-top text-9xl uppercase"
                  style={{ willChange: "transform" }}
                >
                  {item.title}
                </p>
                <p className="text-bottom text-9xl uppercase">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-end justify-between text-xl font-semibold uppercase px-16">
          <p>Sushant production</p>
          <div className="flex flex-col gap-2">
            <p className="cursor-pointer">Instagram ↗</p>
            <p className="cursor-pointer">Youtube ↗</p>
            <p className="cursor-pointer">Twitter ↗</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleOverlayOpen}
        className="absolute top-6 right-6 uppercase text-2xl cursor-pointer"
      >
        Menu
      </button>
    </>
  );
};

export default Overlay;
