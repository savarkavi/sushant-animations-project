import {
  Alfa_Slab_One,
  Cormorant_Garamond,
  Uncial_Antiqua,
  Gasoek_One,
  Cinzel,
  Merriweather,
} from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const unicalAntiqua = Uncial_Antiqua({
  subsets: ["latin"],
  weight: ["400"],
});

export const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const gasoekOne = Gasoek_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
