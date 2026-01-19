import { Cormorant_Garamond, Uncial_Antiqua } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const unicalAntiqua = Uncial_Antiqua({
  subsets: ["latin"],
  weight: ["400"],
});
