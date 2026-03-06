"use client";

import { cinzel, merriweather } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const numbers = [
  [0, 0],
  [2, 7],
  [5, 9],
  [7, 7],
  [9, 9],
];

const Page = () => {
  useGSAP(() => {
    const masterTl = gsap.timeline();
    const loaderTl = gsap.timeline();

    numbers.forEach((_, i) => {
      loaderTl.to(`.number-${i}`, {
        x: 0,
        duration: 0.8,
        onComplete: () => {
          gsap.to(`.number-${i}`, { xPercent: 100 });
        },
      });
    });

    masterTl
      .add(loaderTl)
      .to(
        ".main-text",
        { opacity: 100, rotateY: "0deg", duration: 0.8 },
        "+=0.5",
      );
  });

  return (
    <div className="h-screen overflow-hidden">
      <div className="absolute top-0 left-0 z-10 flex w-full justify-between p-8 text-xl font-semibold tracking-widest uppercase">
        <div>Sushant Animations</div>
        <div className="flex gap-8">
          <span className="cursor-pointer transition-opacity hover:opacity-70">
            Work
          </span>
          <span className="cursor-pointer transition-opacity hover:opacity-70">
            About
          </span>
          <span className="cursor-pointer transition-opacity hover:opacity-70">
            Contact
          </span>
        </div>
      </div>
      <div
        className={`${merriweather.className} absolute bottom-0 left-0 flex w-full justify-between`}
      >
        {numbers.map((number, i) => (
          <div key={i} className="flex">
            <div className="relative overflow-hidden">
              <p
                className={`number-${i} -translate-x-full scale-y-150 text-[16rem]`}
              >
                {number[0]}
              </p>
            </div>
            <div className="relative overflow-hidden">
              <p
                className={`number-${i} -translate-x-full scale-y-150 text-[16rem]`}
              >
                {number[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p
        className={`${cinzel.className} main-text absolute bottom-0 left-0 flex w-full -translate-y-1/2 scale-y-200 rotate-y-30 justify-between overflow-hidden px-4 text-[12rem] leading-40 font-bold uppercase opacity-0`}
      >
        {"saviour fair".split("").map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </p>
    </div>
  );
};

export default Page;
