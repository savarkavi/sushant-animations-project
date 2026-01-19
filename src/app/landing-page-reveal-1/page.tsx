import Image from "next/image";
import Intro from "./intro";

const Page = () => {
  return (
    <div className="h-screen bg-white flex justify-center items-center w-full">
      <Intro />
      <div className="h-screen w-full relative">
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
