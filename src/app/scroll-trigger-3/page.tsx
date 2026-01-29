import { cormorant, unicalAntiqua } from "@/fonts/fonts";
import Header from "./header";
import Main from "./main";
import ReactLenis from "lenis/react";

const Page = () => {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1 }} />
      <div className={`${cormorant.className} min-h-screen bg-white`}>
        <Header />
        <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-4 text-black">
          <p
            className={`${unicalAntiqua.className} scale-y-120 text-7xl font-bold uppercase`}
          >
            Creative house for Royalty
          </p>
          <div className="text-4xl">
            <p className="animate-bounce"> Scroll ↓</p>
          </div>
        </div>
        <Main />
        <div className="h-screen"></div>
      </div>
    </>
  );
};

export default Page;
