import Header from "./header";
import { cn } from "@/lib/utils";
import { cormorant } from "@/fonts/fonts";
import ContentContainer from "./content-container";

const Page = () => {
  return (
    <div className={cn("p-8 bg-white h-screen", cormorant.className)}>
      <Header />
      <ContentContainer />
    </div>
  );
};

export default Page;
