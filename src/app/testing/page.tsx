"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Page = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const setRotationY = gsap.quickTo(".image", "rotationX", {
      duration: 0.3,
    });
    const setRotationX = gsap.quickTo(".image", "rotationY", {
      duration: 0.3,
    });

    if (!imageRef.current) return;

    const handleMouseMove = (e) => {
      const rotationY = gsap.utils.mapRange(0, 500, 0, 25, e.offsetX - 225);
      const rotationX = gsap.utils.mapRange(0, 700, 0, 25, e.offsetY - 350);

      setRotationY(rotationY);
      setRotationX(rotationX);
    };

    imageRef.current.addEventListener("mousemove", handleMouseMove);
    imageRef.current.addEventListener("mouseout", () => {
      setRotationX(0);
      setRotationY(0);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div
      style={{ perspective: "800px" }}
      className="flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <div ref={imageRef} className="image relative h-175 w-125 border">
        <Image
          src="/blog-test-img15.jpg"
          alt="img"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
