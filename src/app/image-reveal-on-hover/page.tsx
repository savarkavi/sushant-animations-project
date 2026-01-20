import Header from "./header";
import { cn } from "@/lib/utils";
import { cormorant } from "@/fonts/fonts";
import ContentContainer from "./content-container";

const Page = () => {
  return (
    <div className={cn("h-screen bg-white p-8", cormorant.className)}>
      <Header />
      <ContentContainer />
    </div>
  );
};

export default Page;
