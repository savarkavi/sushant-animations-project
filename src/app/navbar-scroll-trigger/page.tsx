import Image from "next/image";
import MainContent from "./main-content";

const Page = () => {
  return (
    <div className="hero relative min-h-screen">
      <div className="relative h-screen w-full">
        <Image
          src="https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768957682/sushant-animations-project/navbar-scroll-trigger/fuji_gb63kj.jpg"
          alt="image"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <MainContent />
    </div>
  );
};

export default Page;
