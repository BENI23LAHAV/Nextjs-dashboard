import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], weight: "400" });

export const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
});

export const lusitana = Lusitana({ subsets: ["latin"], weight: "400" });

export const fontLusitana = Lusitana({
  variable: "--font-lusitana",
  subsets: ["latin"],
  weight: "400",
});
