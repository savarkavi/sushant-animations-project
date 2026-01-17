"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const data = [
  {
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768618494/sushant-animations-project/scroll-trigger-1/scroll-trigger-img1_lm4nmd.jpg",
  },
  {
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768618495/sushant-animations-project/scroll-trigger-1/scroll-trigger-img4_d8oqu2.jpg",
  },
  {
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768618495/sushant-animations-project/scroll-trigger-1/scroll-trigger-img2_bcvt3n.jpg",
  },
  {
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768618495/sushant-animations-project/scroll-trigger-1/scroll-trigger-img5_miujxb.jpg",
  },
  {
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768618495/sushant-animations-project/scroll-trigger-1/scroll-trigger-img6_f9qnku.jpg",
  },
  {
    img: "https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768618495/sushant-animations-project/scroll-trigger-1/scroll-trigger-img3_byafxf.jpg",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ImagesContainer = () => {
  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLDivElement>(".image-card");

    images.forEach((img, i) => {
      const totalRows = images.length / 2;

      const isLeftColumn = i % 2 === 0;
      const xDirection = isLeftColumn ? -1 : 1;

      const currentRow = Math.floor(i / 2);
      const intensity = totalRows - currentRow;

      const xMove = 350 * intensity * xDirection;
      const yMove = -300 * currentRow;
      const rotation = (25 + intensity * 3) * xDirection;

      gsap.to(img, {
        x: xMove,
        y: yMove,
        rotate: rotation,
        scrollTrigger: {
          trigger: ".image-container",
          start: "top top",
          scrub: 1,
        },
      });
    });
  });

  return (
    <div className="image-container w-full flex flex-col items-center mx-auto pt-10 pb-30 min-screen overflow-hidden">
      <h1 className="text-center text-9xl font-bold">日本の驚くべき東京物語</h1>
      <div className="relative flex flex-wrap gap-6 justify-center mt-40">
        <h1 className="text-center absolute top-[55%] left-1/2 -translate-1/2 text-6xl font-bold text-red-500 max-w-[400px]">
          日本の驚くべき東京物語
        </h1>
        {data.map((item, i) => (
          <div
            key={i}
            className="image-card relative rounded-xl w-[800px] h-[500px]"
          >
            <Image
              src={item.img}
              alt="img"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        ))}
        <p className="max-w-[800px] text-center absolute left-1/2 -translate-x-1/2 bottom-8 text-gray-400">
          東京の1980年代は、きらめくネオンと静かな情緒が同時に息づいていた時代だった。渋谷の交差点にはカセットテープの音楽が流れ、人々は少し未来を信じながら、少しだけ不安を胸に歩いていた。新宿の高層ビル群は夜空に溶け込み、窓の灯り一つ一つが誰かの物語のように瞬いていた。路地裏の喫茶店では、コーヒーの香りとともにゆっくりと時間が流れ、若者たちは夢や恋や仕事について語り合っていた。経済の勢いと人間らしい温もりが同居する東京は、どこか懐かしく、どこか切ない美しさを持っていた。
        </p>
      </div>
    </div>
  );
};

export default ImagesContainer;
