"use client";

import { unicalAntiqua } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";

const data = [
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768797276/landing-page-reveal-1/landing-page-animation-img1_auztt3.webp",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768797276/landing-page-reveal-1/landing-page-animation-img2_ygxlbw.webp",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768797275/landing-page-reveal-1/landing-page-animation-img3_c52ydn.webp",
  },
  {
    src: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768797275/landing-page-reveal-1/landing-page-animation-img4_tjxy0i.webp",
  },
];

gsap.registerPlugin(useGSAP, SplitText);

const Intro = () => {
  useGSAP(() => {
    gsap.set(".title", { opacity: 1 });

    const masterTl = gsap.timeline();
    const imagesTl = gsap.timeline();

    const images = gsap.utils.toArray<HTMLDivElement>(".image-container");

    const split = new SplitText(".title", { type: "chars" });

    const firstChar = split.chars[0];
    const lastChar = split.chars[split.chars.length - 1];

    const middleCharcters = split.chars.filter((char) => {
      return char !== firstChar && char !== lastChar;
    });

    const charactersIntroTl = gsap.timeline().from(split.chars, {
      y: gsap.utils.wrap([100, -100]),
      opacity: 0,
      duration: 0.8,
    });

    const middleCharctersTl = gsap
      .timeline({ defaults: { ease: "power3.inOut" } })
      .to(middleCharcters, {
        y: gsap.utils.wrap([100, -100]),
        stagger: 0.05,
      })
      .to(middleCharcters, {
        width: 0,
      });

    images.forEach((container) => {
      const image = container.querySelector(".image");
      const tl = gsap
        .timeline({ defaults: { duration: 0.8, ease: "expo.inOut" } })
        .to(container, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        })
        .to(image, { scale: 1.2 }, "<");

      imagesTl.add(tl);
    });

    const collapseImagesTl = gsap
      .timeline({ defaults: { ease: "expo.inOut", duration: 1 } })
      .to(images, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      })
      .to(".title", { bottom: "50%" }, "-=0.8");

    const outroTl = gsap.timeline().to(".intro-container", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power3.in",
      duration: 0.8,
    });

    masterTl
      .add(imagesTl)
      .add(charactersIntroTl, "<")
      .add(middleCharctersTl)
      .add(collapseImagesTl)
      .add(outroTl);
  });

  return (
    <div
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      className="intro-container absolute top-0 left-0 z-10 flex h-screen w-full items-center justify-center bg-black"
    >
      <div className="center-container relative h-125 w-100">
        {data.map((item, i) => (
          <div
            style={{
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            key={i}
            className="image-container absolute top-0 left-0 h-full w-full"
          >
            <Image
              src={item.src}
              alt="image"
              fill
              className="image object-cover"
            />
          </div>
        ))}
        <h1
          className={`title absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 scale-y-180 overflow-hidden text-7xl text-nowrap text-white uppercase opacity-0 mix-blend-difference ${unicalAntiqua.className}`}
        >
          Astrid Stella
        </h1>
      </div>
    </div>
  );
};

export default Intro;
