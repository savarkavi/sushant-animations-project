import Image from "next/image";
import Intro from "./intro";

const Page = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <Intro />
      <div className="relative h-screen w-full">
        <Image
          src="https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768807343/landing-page-reveal-1/home-image_rgiokf.webp"
          alt="img"
          fill
          className="object-cover object-bottom"
        />
      </div>
    </div>
  );
};

export default Page;
