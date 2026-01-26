import Image from "next/image";
import MenuOverlay from "./menu-overlay";
import { cormorant } from "@/fonts/fonts";

const Page = () => {
  return (
    <div className={`${cormorant.className} h-screen`}>
      <div className="relative h-full w-full">
        <Image
          src="https://res.cloudinary.com/dcsv0xhjz/image/upload/v1769324704/sushant-animations-project/navigation-menu-2/navigation-menu-2_sxfuui.jpg"
          alt="img"
          fill
          className="object-cover"
        />
      </div>
      <MenuOverlay />
    </div>
  );
};

export default Page;
