import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"], // Specify the 'latin' subset
  weight: ["400", "700"], // Optional, specify the font weights you need
  preload: true, // Enable preloading if you want to preload the font
});
