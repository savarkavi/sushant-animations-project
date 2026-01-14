import Image from "next/image";
import Overlay from "./overlay";
import { cn } from "@/lib/utils";
import { cormorant } from "@/fonts/fonts";

const Page = () => {
  return (
    <div className={cn(cormorant.className)}>
      <div className="relative h-screen w-full">
        <Image
          src="https://res.cloudinary.com/dcsv0xhjz/image/upload/v1768353524/sushant-animations-project/navigation-menu-1/navigation-menu-1-img1_unqlyh.webp"
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <Overlay />
    </div>
  );
};

export default Page;
