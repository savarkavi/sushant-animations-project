"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import { Menu, X } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, CustomEase);

const data = [
  {
    label: "Manifesto",
  },
  {
    label: "Spatial Journeys",
  },
  {
    label: "Material Archive",
  },
  {
    label: "Contact",
  },
];

const MenuOverlay = () => {
  const overlayTl = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    CustomEase.create("hop", "0.85, 0, 0.15, 1");

    overlayTl.current = gsap
      .timeline({ paused: true, defaults: { ease: "hop" } })
      .set(".bg-container", { pointerEvents: "auto" })
      .to(".bg-right-inner", { rotate: 0, duration: 1 })
      .to(".bg-left-inner", { rotate: 0, duration: 1 }, "<")
      .to(".menu-items", { opacity: 1, top: "50%", ease: "none" })
      .to(".close-btn", { opacity: 1, top: "24px", ease: "none" }, "<");
  });

  const handleOpen = () => {
    overlayTl.current?.play();
  };

  const handleClose = () => {
    overlayTl.current?.reverse();
  };

  return (
    <>
      <div className="absolute top-5 left-8 flex items-center gap-4 text-black">
        <Menu className="cursor-pointer" onClick={handleOpen} />
        <p className="text-lg capitalize">← Click on the menu</p>
      </div>
      <div className="bg-container pointer-events-none absolute top-0 left-0 h-screen w-full">
        <div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden">
          <div
            style={{ transformOrigin: "100% 50%" }}
            className="bg-left-inner absolute top-0 left-0 h-full w-full scale-300 rotate-180 bg-stone-950"
          />
        </div>
        <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden">
          <div
            style={{ transformOrigin: "0% 50%" }}
            className="bg-right-inner absolute top-0 left-0 h-full w-full scale-300 rotate-180 bg-stone-950"
          />
        </div>
        <X
          className="close-btn absolute top-8 right-8 size-8 cursor-pointer opacity-0"
          onClick={handleClose}
        />
        <div className="menu-items absolute top-[55%] left-1/2 flex -translate-1/2 flex-col items-center gap-10 text-white opacity-0">
          {data.map((item) => (
            <div key={item.label}>
              <p className="cursor-pointer text-7xl uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuOverlay;
