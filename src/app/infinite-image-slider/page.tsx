import { cinzel } from "@/fonts/fonts";
import Slider from "./slider";

const Page = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12 overflow-hidden bg-white">
      <div
        className={`${cinzel.className} w-full py-12 text-center text-9xl text-black uppercase`}
      >
        <p>Image slider</p>
      </div>
      <Slider />
      <div
        className={`${cinzel.className} flex w-full flex-col items-center justify-center gap-2 py-12 text-black`}
      >
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">
          Navigation
        </p>
        <div className="flex items-center gap-4 text-xl font-medium">
          <span>&larr; Move Left</span>
          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
          <span>Move Right &rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
