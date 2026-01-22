"use client";

import { cormorant, gasoekOne } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const navItems = [
  {
    label: "Travels",
  },
  {
    label: "Bookings",
  },
  {
    label: "About",
  },
  {
    label: "Contact",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MainContent = () => {
  useGSAP(() => {
    const fujiTextTl = gsap
      .timeline()
      .to(".fuji-text-container", {
        top: 0,
        scale: 0.2,
      })
      .to(".fuji-text", { scale: 0.8, lineHeight: "1rem" }, "<")
      .to(".city-text", { scale: 0.9 }, "<");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
        },
      })
      .to(".main-container", { maxWidth: "100vw", height: "100vh" })
      .to(".nav-container", { gap: "50%" }, "<")
      .add(fujiTextTl, "<")
      .to(".fuji-desc", { opacity: 1, y: 0 });
  });

  return (
    <div className="main-container absolute top-1/2 left-1/2 z-10 flex h-130 w-full max-w-225 -translate-1/2 flex-col justify-between bg-white p-6 text-blue-600">
      <div className="nav-container flex items-center justify-between gap-[25%] font-serif text-lg">
        <div className="flex w-full justify-between">
          {navItems.slice(0, 2).map((item) => (
            <p key={item.label} className="font-bold">
              {item.label}
            </p>
          ))}
        </div>
        <div className="flex w-full justify-between">
          {navItems.slice(-2).map((item) => (
            <p key={item.label} className="font-bold">
              {item.label}
            </p>
          ))}
        </div>
      </div>
      <div className="fuji-text-container absolute top-74 left-1/2 flex -translate-x-1/2 justify-center gap-4 px-3">
        <p
          className={`fuji-text text-[14rem] leading-48 ${gasoekOne.className}`}
        >
          FUJI
        </p>
        <div className="city-text mt-4 h-fit w-full bg-blue-600 p-1">
          <p
            className={`${gasoekOne.className} city-text text-6xl font-bold text-white`}
          >
            CITY
          </p>
        </div>
      </div>
      <div className="fuji-desc flex translate-y-24 items-end justify-between font-serif font-bold opacity-0">
        <p className="text-xl">Epic mountain. Great Trek. No shortcuts.</p>
        <p className={`${cormorant.className} max-w-250 text-5xl`}>
          Mount Fuji (Fujisan) is Japans tallest peak (3,776m), an iconic
          stratovolcano near Tokyo, revered as sacred and a major cultural
          symbol inspiring art and pilgrimages for centuries
        </p>
      </div>
    </div>
  );
};

export default MainContent;
